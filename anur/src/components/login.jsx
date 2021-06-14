import React from 'react'

function Login() {
    return (
        <div>
        <form>
        <label>
            user Name: <input placeholder ="username" type ="text" name="user name" required/>
            <br/>
            password: <input placeholder="password" type = "password" name= "password" required/>
            </label>    
        </form>    
        <button type="submit" name= "login"> Login</button>
            
        </div>
    )
}

export default Login
