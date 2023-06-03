import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AccountSidebar from '../Account/AccountSidebar'
import './AddressBook.css'
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'
import MediaFooter from '../../components/Footer/MediaFooter'
import { useNavigate } from 'react-router-dom'
import DataTable from 'react-data-table-component';
import { getUser, removeAddress } from '../../Api/UserRequest'
import swal from 'sweetalert'
const AddressBook = () => {
    const [user,setUser]=useState([])
    const navigate = useNavigate();
    const [filterUsers,setFilteredUsers]=useState([]);
      const userData=localStorage.getItem('userId')
const  removeAddressz=async(e)=>{
    const {data}=await removeAddress({userId:userData,address1:e})
    if(data){
        swal("Address removed")
    }else{
        swal("Error")
    }
}
      useEffect(() => {
        async function fetchData() {
          // You can await here
          // alert()
          
          const {data}=await getUser(userData)
          setUser(data)
 setFilteredUsers(data.address)// ...
        }
        fetchData();
      }, [removeAddressz]); // Or [] if effect doesn't need props or state
    function handleClick(event) {
  
      navigate('/AddNewAdress');
    }



    const coloumn=[
        
        {name:"Address",selector:(row)=>row.address1,style: {
            color: "gray",
            }},
        {name:"Region",selector:(row)=>row.city,style: {
            color: "gray",
            }},
            {name:"State",selector:(row)=>row.state,style: {
                color: "gray",
                }},
                {name:"Post",selector:(row)=>row.post,style: {
                    color: "gray",
                    }},
                   

                        {name:"Action",selector:(row)=> <>
                        <button className='button' style={{background:"red",color:"white",marginLeft:"5px",padding:"10px",borderRadius:"5px",border:"0px"}}
                          onClick={  ()=>{ removeAddressz(row.address1)}}
                          >Remove</button>
                        </>},
]
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
                <h4 style={{marginTop:'20px',marginBottom:'20px'}}>Address Book</h4>
                    
             
                  
                   
                        <DataTable 
        
        columns={coloumn} 
      data={filterUsers} 
        pagination
        fixedHeader
     
        highlightOnHover
        subHeader
      
        subHeaderAlign="center"
        // data={data}
      />  
                      
                    <div className='Addressbutton'>
                        <button onClick={handleClick}> + Add New Address </button>
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

export default AddressBook