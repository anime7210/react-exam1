import { useEffect, useState } from "react"
import { useNavigate } from "react-router"


const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const user = JSON.parse(localStorage.getItem("user"))
        if (user.email === email && user.password === password) {
            localStorage.setItem("token", "123456789")
            navigate("/", {replace: true})
        } else {
            alert("Invalide email or password")
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
                <button>login</button>
            </form>
        </div>
    )
}

export default LoginPage