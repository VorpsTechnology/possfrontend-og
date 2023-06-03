import React, { useEffect, useState } from 'react'
import AccountSidebar from './AccountSidebar'
import Navbar from '../../components/Navbar/Navbar'
import './Account.css'
import MediaFooter from '../../components/Footer/MediaFooter'
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'
import { getUser } from '../../Api/UserRequest'


const Account = () => {
    const [address,setAddress]=useState([])
    const [user,setUser]=useState({})
    const [billingaddress,setbillingaddress]=useState()
    const userId=localStorage.getItem("userId")
    useEffect(()=>{
        async function fetchData() {
          // You can await here
            const {data}=await getUser(userId)
            // ...
            setUser(data)
            setAddress(data.address)
            const length=data.address.length
            setbillingaddress(data.address[length-1])
          }
          fetchData();
    },[]
    )
  return (
    <>
    <div className='container-fluid'>
        <Navbar />
        <MediaNavbar />
      <div className='mediaview'>
      <div className='row'  id='rowid'>
            <div className='col-2' id='colid' >
                <AccountSidebar />
            </div>
            <div className='col-10' id='colid2'>
                <div className='container' id='container'>
                <h1 className='manageaccount'>Manage My Account</h1>
                <p className='para'>From your My Account Dashboard you have the ability to view a snapshot of your recent account activity and update your account information. Select a link below to view or edit information.
                Select a link below to view or edit information.</p>
                <div style={{padding:'10px'}}>
                    <div className='' >
                        <div className=''>
                            <div className='card' id='accountcard'>
                                <h4 className='headeraccount'>PERSONAL PROFILE</h4>
                                <div>
                                <h6><b>First name :</b> {user.firstName?user.firstName: " +"}</h6>
                                <h6><b>Last name :</b> {user.lastName?user.lastName:" +"} </h6>
                                <h6><b>Phone :</b> {user.mobile?user.mobile:" +"}</h6>
                                <h6><b>Email :</b> { user.email?user.email:" +"} </h6>

                                </div>
                            </div>
                            <br />
                        </div>
                        <div className=''>
                        <div className='card'  id='accountcard'>
                            <h4 className='headeraccount'>ADDRESS BOOK</h4>
                            {address && address.length>0 && address.map((e)=>(
                                <>
                                <div>
                               Address : { e.address1}, {e.city}, {e.state}, {e.post}, {e.country}
                                 </div>
                                 <hr />
                                 </>
                            ))}
                        </div>
                        </div>
                        <br />
                        <div className=''>
                        <div className='card' id='accountcard'>
                            <h4 className='headeraccount'>BILLING ADDRESS</h4>
                            {billingaddress &&
                                <div>
                                Address : { billingaddress.address1}, {billingaddress.city}, {billingaddress.state}, {billingaddress.post}, {billingaddress.country}
                                </div>
                           }
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <MediaFooter/>
    </>
    
  )
}

export default Account