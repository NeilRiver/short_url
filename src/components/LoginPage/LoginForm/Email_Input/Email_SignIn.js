import { Grid, TextField } from "@mui/material";

export default function Login(prop) {
    return (
        <Grid item xs={8}>
            <TextField
                error={(prop.errors.email == undefined) ? false : true}
                fullWidth
                size="small"
                helperText={(prop.errors.email == undefined) ? "" : prop.errors.email.message}
                label="Email"
                {...prop.register("email", {
                    value: "test@test.by",
                    required: {
                        value: true,
                        message: "⚠ Please enter your email address"
                    },
                    pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "⚠ Invalid email address"
                    },
                })}
                placeholder="test@test.by"
            />
        </Grid>
    )
}