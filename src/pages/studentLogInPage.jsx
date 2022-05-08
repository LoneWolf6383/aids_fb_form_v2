import axios from 'axios'
import React, { useState } from 'react'
import './studentLogIn.css'
import CaptchaBOX from '../components/captchaBOX'
import VerifiedIcon from '@mui/icons-material/Verified';

export const StudentLogInPage = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isVerified, setisVerified] = useState(false)
    const [error, setError] = useState('')
    async function handleSignIn(event) {
      event.preventDefault()
        const data = { username, password ,isVerified }
        try {
            const url = 'http://localhost:3001/feedback/signin'
            window.sessionStorage.setItem('username',username)
            const { data: res } = await axios.post(url, data)

        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message)
            }
       }
    }
  return (
    <div id="loginform">
      <h4 id="headerTitle"> ARTIFICIAL INTELLIGENCE DEPARTMENT PORTAL </h4>
      <div>
        <div class="row">
          <label>UserName:</label>
          <input
            type='text'
            placeholder='Enter your Username'
            name='Username'
            value={username}
            onChange={(e)=>setUserName(e.target.value)}/>
        </div>  
        <div class="row">
          <label>Password:</label>
          <input
            type='password'
            placeholder='Enter your Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>  
      <br />
      <br />
        <div style={{ display: 'flex' }}>
          <CaptchaBOX onChange={(val) => { setisVerified(val) }} />
          {isVerified === true && (<VerifiedIcon style={{ margin: '22px -15px', }} />)}
        </div>
      <div id="button" class="row">
       <button onClick={handleSignIn}>Log In</button>
      </div>
     </div>
    </div>
 )
}
