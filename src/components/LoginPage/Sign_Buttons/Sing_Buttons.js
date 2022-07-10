import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export default function SingButtons(prop) {

    const create_object_login = (login, password, sing_up) => {
        sing_up
            ?
            alert(`LOGIN\nlogin: ${login}\npassword: ${password}`)
            :
            alert(`CREATE\nlogin: ${login}\npassword: ${password}`)
    }

    return (
        <Grid container alignItems="center" direction="column">

            <Button
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