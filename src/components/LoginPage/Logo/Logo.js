import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import { styled } from '@mui/material/styles';

import logo from '../../../static/logo.png'
import sing_up_logo from '../../../static/signup-logo.png'
import { useSelector } from 'react-redux';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '60%',
});

export default function Logo(prop) {
    const sign_up = useSelector(state => state.app.sign_up)
    return (
        <Grid item>
            <ButtonBase sx={{ width: 328, height: 128  }}>
                <Img alt="complex" src={ sign_up ? logo : sing_up_logo } />
            </ButtonBase>
        </Grid>
    )
}