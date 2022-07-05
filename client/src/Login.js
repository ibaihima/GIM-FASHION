import React, {useState} from "react"
import { useNavigate } from "react-router-dom";

function Login({users, onLogin}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const history = useNavigate();

    function handleSubmit(e){
        e.preventDefault()
        onLogin(username, password)
        setUsername("")
        setPassword("")
      //   history.push('/shopping-cart')
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="con">
               <header className="head-form">
                     <h2>Log In</h2>
               </header>
               <br/>
               <div className="field-set">
                  {/* <label htmlFor="uname"><b>Username</b></label> */}
                  <input id="username" className="form-input" onChange={(e) => setUsername(e.target.value)} type="text" value={username} placeholder="@UserName" name="uname"></input>
                  {/* <label htmlFor="psw"><b>Password</b></label> */}
                  <input id="password" className="form-input" onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" name="psw"></input>
                  <button className="log-in" type="submit">Login</button>
               </div>
            </div>
        </form>
    )
}



export default Login;