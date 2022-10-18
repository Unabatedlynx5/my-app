import { GoogleLogout } from 'react-google-login';

const clientId = 'Secret';

function Logout() {

    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div> 
    )
}

export default Logout