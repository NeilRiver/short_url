import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

import TextField from '@mui/material/TextField';



import logo from '../static/logo.png'
import { Button } from '@mui/material';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function ComplexGrid() {
    return (
        <Paper
            sx={{
                p: 1,
                margin: 'auto',
                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
        >
            <Grid container spacing={2}>

                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>

                            <Grid item>
                                <ButtonBase sx={{ width: 328, height: 128 }}>
                                    <Img alt="complex" src={logo} />
                                </ButtonBase>
                            </Grid>

                            <Grid container spacing={2} justifyContent="center">
                                <Grid item xs={8}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        id="email"
                                        label="test"
                                        name="email"
                                        autoComplete="email"
                                    />
                                </Grid>
                                <Grid item xs={8}>
                                    <TextField
                                        fullWidth
                                        size="small"
                                        name="password"
                                        label="test"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 2, mb: 2, width: 200 }}
                            >
                                Sign Up
                            </Button>

                        </Grid>
                        <Grid item>
                            Регистрация
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}