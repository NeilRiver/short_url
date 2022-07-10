import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function Login(prop) {

    const createUserHandler = (text, type) => {
        if (type === 'login') {
            prop.setLogin(text)
        } else {
            prop.setPassword(text)
        }
    }

    return (
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={8}>
                <TextField
                    onChange={(e) => createUserHandler(e.target.value, 'login')}
                    fullWidth
                    size="small"
                    id="email"
                    label={prop.sing_up ? "Email" : "Type your email"}
                    value={prop.login}
                    placeholder="test"
                    autoComplete="email"
                />
            </Grid>
            <Grid item xs={8}>
                <TextField
                    onChange={(e) => createUserHandler(e.target.value, 'password')}
                    fullWidth
                    size="small"
                    label={prop.sing_up ? "Password" : "Type your password"}
                    value={prop.password}
                    placeholder="test"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                />
            </Grid>
        </Grid>
    );
}