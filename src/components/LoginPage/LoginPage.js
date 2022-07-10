import { useState } from 'react';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import LoginField from './Login/Login';
import LogoField from './Logo/Logo';
import SingButtons from './Sign_Buttons/Sing_Buttons';

export default function LoginPage() {
    const [sing_up, setSignUp] = useState(true)

    const [login, setLogin] = useState("test")
    const [password, setPassword] = useState("test")

    return (
        <Grid container component="div" height={600} >
            <Paper
                sx={{
                    p: 1,
                    margin: 'auto',
                    maxWidth: 500,
                    maxHeight: 340,
                    flexGrow: 3,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
            >
                <LogoField sing_up={sing_up} />
                <LoginField sing_up={sing_up}
                    login={login}
                    password={password}
                    setLogin={setLogin}
                    setPassword={setPassword} />
                <SingButtons sing_up={sing_up}
                    login={login}
                    password={password}
                    setSignUp={setSignUp}
                    setLogin={setLogin}
                    setPassword={setPassword} />

            </Paper>
        </Grid>
    );
}