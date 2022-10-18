import { GoogleLogin } from 'react-ggogle-login';

const clientId = "secret";

function Login() {

    return(
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_orign'}
                isSignedIn={true}
            />
        </div>
    )

}

export default Login;