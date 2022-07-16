import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useForm } from "react-hook-form";

export default function Login(prop) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: "test@test.by",
            password: "test"
        },
        mode: "onChange"
    });
    const onSubmit = data => alert(data);

    return (
        <Grid
            container
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            spacing={2} justifyContent="center">
            <Grid item xs={8}>
                <TextField
                    error={(errors.email == undefined) ? false : true}
                    fullWidth
                    size="small"
                    helperText={(errors.email == undefined) ? "" : errors.email.message}
                    label={prop.sing_up ? "Email" : "Enter your email address"}
                    {...register("email", {
                        required: {
                            value: true,
                            message: "⚠ Please enter your email address"
                        },
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "⚠ Invalid email address"
                        }
                    })}
                    placeholder="test@test.by"
                />
            </Grid>
            <Grid item xs={8}>
                <TextField
                    error={(errors.password == undefined) ? false : true}
                    fullWidth
                    size="small"
                    type="password"
                    helperText={(errors.password == undefined) ? "" : errors.password.message}
                    label={prop.sing_up ? "Password" : "Enter your password"}
                    {...register("password", {
                        required: {
                            value: true,
                            message: "⚠ Please enter your password"
                        },
                        minLength: {
                            value: 4,
                            message: "⚠ Password must have at least 4 characters"
                        }
                    })}
                    placeholder="test"
                />
            </Grid>
            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 2, mb: 1, width: 200 }}
            >
                {prop.sing_up ? "Sign In" : "Sign Up"}
            </Button>
        </Grid>
    );
}