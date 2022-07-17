import Grid from '@mui/material/Grid';

import Email_SignIn from './Email_Input/Email_SignIn';
import Email_SignUp from './Email_Input/Email_SignUp';
import Password_SignIn from './Password_Input/Password_SignIn';
import Password_SignUn from './Password_Input/Password_SignUn';
import Sign_in_up from './Buttons/Sign_in_up';

import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';

export default function Login(prop) {
    const sign_up = useSelector(state => state.app.sign_up)

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange"
    });
    const onSubmit = data => sign_up ? alert('логин') : alert('регистрация');

    return (
        <Grid
            container
            component="form"
            onSubmit={handleSubmit(onSubmit)}
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

            <Sign_in_up sign_up={sign_up}/>
        </Grid>
    );
}