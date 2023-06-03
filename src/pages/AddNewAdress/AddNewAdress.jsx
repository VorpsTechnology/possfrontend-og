import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AccountSidebar from '../Account/AccountSidebar'
import './AddNewAdress.css'
import { Country, State, City }  from 'country-state-city';
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'
import MediaFooter from '../../components/Footer/MediaFooter'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { updateAddress } from '../../Api/UserRequest'
import { useEffect } from 'react';

function AddNewAdress() {
  const [states,setState]=useState([])
  const [stateCode,setStateCode]=useState("AN")
  const [cityCode,setCityCode]=useState("Bamboo Flat")
  const [city,setCity]=useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
    setState( State.getStatesOfCountry("IN"))
    setCity(City.getCitiesOfState("IN", stateCode))
  
  }, [stateCode]) 
  const navigate=useNavigate()
  const [error,setError]=useState(false)
  const [error2,setError2]=useState(false)
  const [error3,setError3]=useState(false)
  const userId=localStorage.getItem("userId")
  const userInfo=localStorage.getItem("userInfo")
  const [Address,setAddress]=useState({
      address1:"",
      post:"",
      city:"",
      state:"",
    

  })
  const handleSubmit = async (e) => {

      e.preventDefault();
      
   
        try {
          const userId=localStorage.getItem("userId")
          Address.state=stateCode
          Address.city=cityCode
          const { data } = await updateAddress({deliveryAddress:Address,userId:userId});
          if(data){
              alert("Address succefully")
              
              navigate("/AddressBook");
          }
        } catch (error) {
          console.log(error);
          setError(true);
        }
      
    };
  
  const handleChange = (e) => {
      setAddress({ ...Address, [e.target.name]: e.target.value });
    };

    const resetForm = () => {
     
      setAddress({
        address1:"",
        post:"",
        city:"",
        state:"",
        

      })
    };

  return (
    <>
    <div className='container-fluid' >
    <MediaNavbar />
    <Navbar />
    <div className='mediaview'>
        
    <div className='row' id='rowid'>
        <div className='col-2'  id='colid'>
            <AccountSidebar />
        </div>
        <div className='col-10' id='colid2'>
        
            <div className='container' id='container' >
            <h4 style={{marginTop:'20px',marginBottom:'20px'}}>Add new adress</h4>
            <p>We need an address where we could deliver products.</p>
              <form onSubmit={handleSubmit}>
              <div>
                <div className='flexk' style={{display:'inline'}}>
                    <div className='flek1'><h5 className='adfl'>STREET ADDRESS *</h5></div>
                    <div className='flek2'><input onChange={handleChange} name='address1' value={Address.address1} className='inputbox2' placeholder='House name and Street' type="text" /></div>
                </div>
               

              
                <div className='flexk' style={{display:'inline'}}>
                    <div ><h5 className='adfl'>STATE/PROVINCE *</h5></div>
                    <div>

                    <select className='nameinput2'  required onChange={(e)=>{
                  setStateCode(e.target.value)
                 
            
              }} name="" id="">
            
              {states &&
            states.length > 0 &&
            states.map((ele) => (  
              <option value={ele.isoCode} >{ele.name}</option>
             ))}
                
              </select>
                    </div>
                </div>
                <div className='flexk' style={{display:'inline'}}>
                    <div className='flek1'><h5 className='adfl'>CITY*</h5></div>
                    <div className='flek2'> <select className='nameinput2' required  name="" id="" onChange={(e)=>{
                  setCityCode(e.target.value)
                 
            
              }}>
             { city.length > 0 &&
            city.map((ele) => (  
              <option value={ele.name} >{ele.name}</option>
             ))}
              </select></div>
                </div>
                <div className='flexk' style={{display:'inline'}}>
                    <div className='flek1'><h5 className='adfl'>PINCODE *</h5></div>
                    <div className='flek2'><input className='inputbox2' placeholder='Pincode' type="text" onChange={handleChange} name='post' value={Address.post}/></div>
                </div>
               
                <div className='flexk10' style={{display:'inline'}}>
                    <div className='flek10'   ><h5 className='adfl'>Default Address</h5></div>
                    <div className='flek10' >Make Default Address <span><input placeholder='House name and Street' type="checkbox" /></span></div>
                </div>
              </div>
             
                <div className='Addressbutton'>
                    <button style={{width:'159px'}} type='submit'> Save </button>
                    </div>
                    </form>
            </div>
        </div>
    </div>
    </div>

</div>
<MediaFooter />
</>
  )
}

export default AddNewAdress
