import { getCurrentUser } from "../actions/getCurrentUser"
import LoginClient from "../components/auth/LoginClient"

const Login = async () => {
    const currentUser = await getCurrentUser();

    return (
        <div>
            <LoginClient currentUser={currentUser ? {
                ...currentUser,
                emailVerified: currentUser.emailVerified ? new Date(currentUser.emailVerified) : null,
                createdAt: new Date(currentUser.createdAt),
                updateAt: new Date(currentUser.updateAt)
            } : null} />
        </div>
    )
}

export default Login
/**
 * 
 */