import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import Email_SignIn from './Email_Input/Email_SignIn';
import Email_SignUp from './Email_Input/Email_SignUp';
import Password_SignIn from './Password_Input/Password_SignIn';
import Password_SignUn from './Password_Input/Password_SignUn';

import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { setSignUp } from 'redux/slices/headAppSlice'

export default function Login(prop) {
    const dispatch = useDispatch()
    const sign_up = useSelector(state => state.app.sign_up)

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
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

            <Grid container alignItems="center" direction="column">
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 2, mb: 1, width: 200 }}
                >
                    {sign_up ? "Sign In" : "Sign Up"}
                </Button>
                <Link variant="body2"
                    type="button"
                    component="button"
                    onClick={() => dispatch(setSignUp())}
                >
                    {sign_up ? "Sign Up" : "Back to Sign In"}
                </Link>
            </Grid >
        </Grid>
    );
}