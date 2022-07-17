import Grid from '@mui/material/Grid';

import Email_SignIn from './Email_Input/Email_SignIn';
import Email_SignUp from './Email_Input/Email_SignUp';
import Password_SignIn from './Password_Input/Password_SignIn';
import Password_SignUn from './Password_Input/Password_SignUn';
import Sign_in_up from './Buttons/Sign_in_up';

import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { addEntriesAsync, showBackdrop } from 'redux/slices/headAppSlice';

export default function Login(prop) {

    const create_object_login = async (form_data) => {
        dispatch(showBackdrop())
        let response = await fetch(`https://short-url-back-end.herokuapp.com/${(sign_up) ? "login" : "create_user"}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": sign_up ? form_data.email : form_data.email_signup,
                "password": sign_up ? form_data.password : form_data.password_signup
            })
        })
        let data = await response.json();
        dispatch(addEntriesAsync(data))
    }

    const sign_up = useSelector(state => state.app.sign_up)
    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange"
    });

    return (
        <Grid
            container
            component="form"
            onSubmit={handleSubmit(create_object_login)}
            spacing={2} justifyContent="center">

            {sign_up ?
                <>
                    <Email_SignIn errors={errors} register={register} />
                    <Password_SignIn errors={errors} register={register} />
                </>
                :
                <>
                    <Email_SignUp errors={errors} register={register} />
                    <Password_SignUn errors={errors} register={register} />
                </>
            }

            <Sign_in_up sign_up={sign_up} />
        </Grid>
    );
}