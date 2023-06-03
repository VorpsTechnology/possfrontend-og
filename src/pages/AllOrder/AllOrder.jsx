import React, { useEffect, useState } from 'react'
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'
import Navbar from '../../components/Navbar/Navbar'
import DataTable from 'react-data-table-component';
import MediaFooter from '../../components/Footer/MediaFooter'

import Sidebar from '../Sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import { AdminChangeOrderstatus, getAdminOrder, getOrder } from '../../Api/OrderRequest';
function AllOrder() {
    const[users,setUsers]=useState([]);
    const [search,setSearch]=useState("");
    const [filterUsers,setFilteredUsers]=useState([]);
      const userData=localStorage.getItem('userId')
      const AdminData=localStorage.getItem('AdminId')
      const navigate=useNavigate()
      useEffect(()=>{
        if(AdminData){
          navigate("/AllOrder")
        }else{
          navigate("/Adminlogin")
        }
      },[])

      const [status,setStatus]=useState({
        status:"",
        
      })
      const fn=(data)=>{
    
        const images=[]
        var str_array =data.split(',');
  
  for(var i = 0; i < str_array.length; i++) {
  // Trim the excess whitespace.
  str_array[i] = str_array[i].replace(/^\s*/, "").replace(/\s*$/, "");
  // Add additional code here, such as:
  
  if(str_array[i]!==""){
  const url=new URL(str_array[i])  
  

  
  images.push(url.searchParams.get('id'))
  
  
  return `https://drive.google.com/uc?id=${images[0]}`
  }else{
    return `https://drive.google.com/uc?id=${"10uk_BvFXN-tHCfAQNYeNDUg4cNaM5SaX"}`
  }
  
  }   
  ;
  
  
  
  }
  const handleStatus=async(ID,status)=>{
    const ata={
       status:status,
       orderID:ID 
    }
    console.log(ata);
    const {data}=await AdminChangeOrderstatus(ata)
    setStatus({status:""})
    
 }
 
      useEffect(() => {
        async function fetchData() {
          // You can await here
          // alert()
          
          const {data}=await getAdminOrder()
          console.log(data); 
          setUsers(data)
          setFilteredUsers(data.orderlist)
   
         
          // ...
        }
        fetchData();
      }, [status,handleStatus]); // Or [] if effect doesn't need props or state
      useEffect(()=>{
        const result=users.filter((user)=>{
            return user.firstname.toLowerCase().match(search.toLowerCase());
            
        })
        setFilteredUsers(result)
      },[search]) 
    
     
      useEffect(() => {
      const userInfo = localStorage.getItem("AdminInfo");
       
        if (userInfo) {
       
          navigate("/AllOrder");
         
        } else {
          navigate("/Adminlogin");
        }
      }, []);


 
      const handleChange = (e) => {
        setStatus({ status: e});
      };

      
      const coloumn=[
        
        // {name:"Image",selector:(row)=><>
        // <img src={fn(row.uploadImages)} style={{width:"80px",height:"80px ",margin:"20px", border: "2px solid #F3CA6D"}}  alt=""  />
        // </>},
       {name:"Sl",selector:(row,index)=>index+1,style: {
        color: "gray",
        }},
        {name:"Image",selector:(row)=><>
        <img src={fn(row.uploadImages)} style={{width:"80px",height:"80px ",margin:"20px", border: "2px solid #F3CA6D"}}  alt=""  />
        </>},
        {name:"Price",selector:(row)=>`₹ ${row.price}`,style: {
            color: "gray",
            }},
            {name:"Id",selector:(row)=>row._id,style: {
              color: "gray",
              }},
              {name:"Address",selector:(row)=><>
              <div>
              {row.deliveryAddress.firstName}
              </div>
              <div>
              {row.deliveryAddress.address1}
             
              </div>
              <div>
              {row.deliveryAddress.city}
              </div>
              <div>
              {row.deliveryAddress.state}

              </div>
              <div>
              {row.deliveryAddress.post}
              </div>
              </>,style: {
                color: "gray",
                }},

            {name:"Product",selector:(row)=>row.name,style: {
                color: "gray",
                }},
                {name:"PaymentMod",selector:(row)=>row.paymentMod,style: {
                    color: "gray",
                    }},
        {name:"Status",selector:(row)=>
        <div style={{display:"flex" }}>
      
          {<>
          <div >
      
            <div style={{marginLeft:'10px'}}>
               <a   
                 className="selectbox nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   {row.OrderStatus}
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              
             
              
              {
            row.OrderStatus=="ORDERED" &&<>
              <a className="dropdown-item"     onClick={()=>{
               handleStatus(row._id,"DISPATCHED")
              }}>DISPATCHED</a>
               <a className="dropdown-item"     onClick={()=>{
           handleStatus(row._id,"DELIVERED")
              }}>DELIVERED</a>
               <a className="dropdown-item"     onClick={()=>{
              handleStatus(row._id,"CANCELLED")
              }}>CANCELLED</a>
            </>
            
          }
           {
            row.OrderStatus=="DISPATCHED" &&<>
            <a className="dropdown-item"     onClick={()=>{
            handleStatus(row._id,"DELIVERED")
              }}>DELIVERED</a>
          
            </>
          }
           
          {
            row.OrderStatus=="DELIVERED" &&<>
             <a className="dropdown-item"     onClick={()=>{
             handleStatus(row._id,"DELIVERED")
              }}>DELIVERED</a></>
          }
               
             
               
               </div>
      
        
      </div>
          
           </div>
          </>}
                  
                 
             </div>
           
            },

            {name:"ACTION ",selector:(row)=>
            <div style={{display:"flex" }}>
          
              

              {row.OrderStatus=="DELIVERED"  ?  
              <>
                

<button className='button' style={{background:"#F3CA6D",color:"black",marginLeft:"5px",padding:"10px",borderRadius:"5px",border:"0px"}}
              onClick={  ()=>{navigate(`/orderInvoice/${row._id}`)}}
              >Invoice </button>
                 
              </>:<>
              
              <button className='button' style={{background:"#F3CA6D",color:"black",marginLeft:"5px",padding:"10px",borderRadius:"5px",border:"0px"}}
                onClick={  ()=>{handleStatus(row._id)}}
                >Confirm</button>
                  <button className='button' style={{background:"red",color:"white",marginLeft:"5px",padding:"10px",borderRadius:"5px",border:"0px"}}
                onClick={  async ()=>{
                  if(row.OrderStatus==="ORDERED"){
                    const ata={
                      status:"ORDERED",
                      orderID:row._id 
                   }
                   console.log(ata);
                   const {data}=await AdminChangeOrderstatus(ata)
                   alert("Changed to previous state")
                   setStatus({status:""})
                  }else if(row.OrderStatus==="DISPATCHED"){
                    const ata={
                      status:"ORDERED",
                      orderID:row._id 
                   }
                   console.log(ata);
                   const {data}=await AdminChangeOrderstatus(ata)
                   alert("Changed to previous state")
                   setStatus({status:""})
                  }
                }}
                >Decline</button>
              </>
              
              }
                      
                     
                 </div>
               
                },
                  
      ]
  return (
    <>
    <div className='container-fluid' >
    <MediaNavbar />
    <Navbar />
    <div className='mediaview'>
        
    <div className='row' id='rowid'>
        <div className='col-2'  id='colid'>
            <Sidebar />
        </div>
        <div className='col-10' id='colid2'>
        <div className='container' id='container'>
            <div className='row' id='rowitem'>
                <h6> + Manage </h6> 
            </div>
        </div>
        <DataTable 
        
        columns={coloumn} 
      data={filterUsers} 
        pagination
        fixedHeader
        style={{color:"red"}}
        highlightOnHover
        subHeader
      
        subHeaderAlign="center"
        // data={data}
      />  
        </div>
    </div>
    </div>

</div>
<MediaFooter />
</>
  )
}

export default AllOrder
