import { useState } from "react";
import RegisterForm from "../components/auth/RegisterForm";
import LoginForm from "../components/auth/LoginForm";

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);


    const toggleAuthPage = () => {
        setIsLogin(!isLogin)
    }

    return (
        <div>
            {
            isLogin ?
                <LoginForm />
            :
            <div className="text-4xl">
                <RegisterForm />
            </div>
            }
            <div>
                <button onClick={() => toggleAuthPage()}>
                    {isLogin ? <div>Registrar a conta</div> : <div>Já possuo uma conta</div>}
                </button>
            </div>
        </div>
    )
}

export default AuthPage;