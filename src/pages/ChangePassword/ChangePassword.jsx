import React from 'react'
import AccountSidebar from '../Account/AccountSidebar'
import Navbar from '../../components/Navbar/Navbar'
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'
import MediaFooter from '../../components/Footer/MediaFooter'
import './ChangePassword.css'
import { updateUserInfo } from '../../Api/UserRequest'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ChangePassword = () => {
    const navigate=useNavigate()
    const [error,setError]=useState(false)
    const [error2,setError2]=useState(false)
    const [error3,setError3]=useState(false)
    const userId=localStorage.getItem("userId")
    const userInfo=localStorage.getItem("userInfo")
    const [passwordChange,setPasswordChange]=useState({
        oldPass:"",
        _id:userId,
        password:"",
        conPass:""

    })
    const handleSubmit = async (e) => {
        e.preventDefault();
         if(passwordChange.password !==passwordChange.conPass){
          setError3(true)
        } else {
          try {
            const { data } = await updateUserInfo(passwordChange);
            if(data){
                alert("Password changed succefully")
                localStorage.removeItem("userId")
                localStorage.removeItem("userInfo")
                resetForm();
                navigate("/");
            }
          } catch (error) {
            console.log(error);
            setError(true);
          }
        }
      };
    
    const handleChange = (e) => {
        setPasswordChange({ ...passwordChange, [e.target.name]: e.target.value });
      };

      const resetForm = () => {
       
        setPasswordChange({
            oldPass:"",
            _id:userId,
            password:"",
            conPass:""

        })
      };
  return (
    <>
        <div className='container-fluid'>
        <Navbar />
        <MediaNavbar />
        <div className='mediaview'>
        <div className='row'  id='rowid'>
        <div className='col-2'  id='colid'>
            <AccountSidebar />
        </div>
        <div className='col-10'  id='colid2'>
            <div className='container' id='container'>
                {error && <><h6 style={{color:"red"}}>Old password didn't match..!</h6></>}
                {error2 && <><h6 style={{color:"red"}}>Field can't be empty..!</h6></>}
                {error3 && <><h6 style={{color:"red"}}>Confirm password & password didn't match..!</h6></>}
                <div><h4 className='passwordlabel'>Change Password</h4></div>
                <hr />
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className='formlabel'><label htmlFor="">Old Password</label></div>
                            <div><input className='inputbox' onChange={handleChange} name='oldPass' value={passwordChange.oldPass} type="password"  /></div>
                        </div>
                        <div>
                            <div className='formlabel'><label htmlFor="">New Password</label></div>
                            <div><input className='inputbox' onChange={handleChange} name='password' value={passwordChange.password} type="password"  />
                            <div style={{padding:'10px'}}>
                                <li>Your password must contain at least 8 characters.</li>
                                <li>Your password can’t be a commonly used password.</li>
                                <li>Your password can’t be entirely numeric.</li>
                               
                            </div>
                            </div>
                            <div>
                            <div className='formlabel'><label>Confirm Password</label></div>
                            <div><input  className='inputbox' onChange={handleChange} name='conPass' value={passwordChange.conPass} type="password"  /></div>
                            </div>
                            
                        </div>
                        <div className='button'><button type='submit'>Request Change Password</button></div>
                    </form>
                </div>
            </div>
        </div>
      </div>
        </div>
    
    </div>
    <MediaFooter />
    </>

  )
}

export default ChangePassword
