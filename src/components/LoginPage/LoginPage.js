import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import LoginForm from './LoginForm/LoginForm';
import Logo from './Logo/Logo';

export default function LoginPage() {

    return (
        <Grid container component="div" height={600} >
            <Paper
                sx={{
                    p: 1,
                    margin: 'auto',
                    maxWidth: 500,
                    maxHeight: 380,
                    flexGrow: 3,
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
            >
                <Logo />
                <LoginForm/>

            </Paper>
        </Grid>
    );
}