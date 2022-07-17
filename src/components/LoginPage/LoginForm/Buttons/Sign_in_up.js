import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useDispatch } from 'react-redux';
import { setSignUp } from 'redux/slices/headAppSlice'

export default function Sign_in_up(prop) {
    const dispatch = useDispatch()
    return (
        <Grid container alignItems="center" direction="column">
            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 2, mb: 1, width: 200 }}
            >
                {prop.sign_up ? "Sign In" : "Sign Up"}
            </Button>
            <Link variant="body2"
                type="button"
                component="button"
                onClick={() => dispatch(setSignUp())}
            >
                {prop.sign_up ? "Sign Up" : "Back to Sign In"}
            </Link>
        </Grid >

    );
}