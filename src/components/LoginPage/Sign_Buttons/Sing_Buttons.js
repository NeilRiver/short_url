import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { useSelector, useDispatch } from 'react-redux'
import { addEntriesAsync } from '../../../redux/slices/headAppSlice'

export default function SingButtons(prop) {
    const notify = useSelector(state => state.app.notify)
    const dispatch = useDispatch()

    const create_object_login = (login, password, sing_up) => {

        fetch(`http://localhost:3001/${(sing_up) ? "login" : "create_user"}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "email": login,
                "password": password
            })
        }).then((data) => data.json()).then(object => dispatch(addEntriesAsync(object)))
    }

    return (
        <Grid container alignItems="center" direction="column">

            <Button
                disabled={notify.length >= 1 ? true : false}
                type="submit"
                variant="contained"
                sx={{ mt: 2, mb: 1, width: 200 }}
                onClick={() => create_object_login(prop.login, prop.password, prop.sing_up)}
            >
                {prop.sing_up ? "Sign In" : "Sign Up"}
            </Button>
            <Link
                component="button"
                variant="body2"
                onClick={() => {
                    return (
                        prop.setSignUp(x => !x),
                        prop.setLogin(''),
                        prop.setPassword('')
                    )
                }}
            >
                {prop.sing_up ? "Sign Up" : "Back to Sign In"}
            </Link>

        </Grid >
    );
}