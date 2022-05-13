import SignUpForm from "../../components/SignUpForm/SignUpForm"
import LoginForm from "../../components/LoginForm/LoginForm"

export default function AuthPage ({setUser}) {
    return (
        <main>
        <h1>Still Life of a Procrastinator</h1>
        <SignUpForm setUser={setUser}/>
        <LoginForm setUser={setUser}/>
        </main>
    )
}