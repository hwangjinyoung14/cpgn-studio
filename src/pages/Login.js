import React from 'react'

const Login = () => {
  return (
    <div className='Login'>
      <div className="inner login-inner">
      <h2 className='login-title'>LOGIN</h2>
       <div className='login-box'>
        <form className="login-box-top">
          <div className="login-box-left">
            <input type="text" placeholder='ID'/>
            <input type="password" placeholder='PASSWORD'/>
          </div>
          <button type='submit' className='login-btn'>LOGIN</button>
        </form>
        <div className="lock">
        <img src={process.env.PUBLIC_URL + "./images/Login/lock-icon.svg"} alt="lock" />
        <p>보안접속</p>
        </div>
        <ul className="login-box-bottom">
          <li>FIND ID</li>
          <li>FIND PASSWORD</li>
          <li>JOIN US</li>
        </ul>
       </div>
      </div>
    </div>
  )
}

export default Login