
import { Grid, TextField } from "@mui/material";

export default function Password_SignIn(prop) {
    return (
        <Grid item xs={8}>
            <TextField
                error={(prop.errors.password == undefined) ? false : true}
                fullWidth
                size="small"
                type="password"
                helperText={(prop.errors.password == undefined) ? "" : prop.errors.password.message}
                label="Password"
                {...prop.register("password", {
                    value: "test",
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




