import React, {useState} from 'react'
import axios from 'axios'

function Login() {

        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
        
        const login = () => {
          axios.post("http://localhost:3001/barbers/login", {username: username, password: password}, {withCredentials: true})
          .then((res) => console.log(res));
        };
    
        return (
          <div className="App">
      
            <div>
              <h1>Login</h1>
              <input
                placeholder="email"
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={login}>Submit</button>
            </div>
          </div>
    )
}

export default Login
