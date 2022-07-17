
import { Grid, TextField } from "@mui/material";

export default function Password_SignUn(prop) {
    return (
        <Grid item xs={8}>
            <TextField
                error={(prop.errors.password_signup == undefined) ? false : true}
                fullWidth
                size="small"
                type="password"
                helperText={(prop.errors.password_signup == undefined) ? "" : prop.errors.password_signup.message}
                label="Enter your password"
                {...prop.register("password_signup", {
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
    )
}




