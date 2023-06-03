import React from 'react'
import './Wishlist.css'
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar'
import Navbar from '../../components/Navbar/Navbar'
import AccountSidebar from '../Account/AccountSidebar'
import MediaFooter from '../../components/Footer/MediaFooter'

import { getWishlist, removeFromWishlist } from '../../Api/WishlistRoute';
import DataTable from 'react-data-table-component';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Wishlist = () => {

  const userId=localStorage.getItem("userId")
  const [allCheckOutTotal,setallCheckOutTotal]=useState(0)
    const[users,setUsers]=useState([]);
const [search,setSearch]=useState("");
const [filterUsers,setFilteredUsers]=useState([]);
  const userData=localStorage.getItem('userId')
const navigate=useNavigate()
const handleRemove=async (row)=>{

  const {data}=await removeFromWishlist({userId:userId,productId:row})
  if(data){
    alert("deleted successfully")
  }
}
  useEffect(() => {
    async function fetchData() {
      // You can await here
      // alert()
      const beta={userId:userData}
      const {data}=await getWishlist(beta)
   
      setUsers(data)
      setFilteredUsers(data.Wishlist.products.reverse())
     fun()
    
    }
    fetchData();
  }, [handleRemove]); // Or [] if effect doesn't need props or state
  useEffect(()=>{
    const result=users.filter((user)=>{
        return user.firstname.toLowerCase().match(search.toLowerCase());
        
    })
    setFilteredUsers(result)
  },[search]) 

const fun=()=>{
  var val = filterUsers.reduce(function(previousValue, currentValue) {
    return {
      price: parseInt(previousValue.price) + parseInt(currentValue.price),
     
    }
  });
  setallCheckOutTotal(val.price)
  console.log("dta",val)
}
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
 
  useEffect(() => {
  const userInfo = localStorage.getItem("userInfo");
   
    if (userInfo) {
   
      navigate("/storeCart");
     
    } else {
      navigate("/login");
    }
  }, []);
  const coloumn=[
    {name:"Image",selector:(row)=><>
        <img src={fn(row.uploadImages)} style={{width:"80px",height:"80px ",margin:"20px", border: "2px solid #F3CA6D"}}  alt=""  />
        </>},
    {name:"Product",selector:(row)=>row.name,style: {
        color: "gray",
        }},
        {name:"Price",selector:(row)=>`₹ ${row.price}`,style: {
          color: "gray",
          }},
          {name:"Quantity",selector:(row)=>` ${row.quantity}`,style: {
            color: "gray",
            }},
    {name:"ACTION ",selector:(row)=>
    <div style={{display:"flex" }}>
  
      {<>
        <button className='button' style={{background:"#F3CA6D",color:"black",marginLeft:"5px",padding:"10px",borderRadius:"5px",border:"0px"}}
        onClick={  ()=>{navigate(`/Productpurchase/${row.product}`)}}
        >View </button>
         <button className='button' style={{background:"#F3CA6D",color:"black",marginLeft:"5px",padding:"10px",borderRadius:"5px",border:"0px"}}
        onClick={  ()=>{navigate(`/Instantpurchase/${row.product}/${row.quantity}`)}}
        >Buy now</button>
            <button className='button' style={{background:"red",color:"white",marginLeft:"5px",padding:"10px",borderRadius:"5px",border:"0px"}}
        onClick={()=>{
          handleRemove(row.product)
        }}
        >Remove</button>
      </>}
              
             
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
            <AccountSidebar />
        </div>
        <div className='col-10' id='colid2'>
        <div className='container' id='container'>
            <div className='row' id='rowitem'>
                <h6> + CONTINUE SHOPPING</h6> 
            </div>
            <div style={{position:"relative",float:"right",margin:"10px"}}> <div><h6>Total:  ₹ {allCheckOutTotal}</h6></div> <div><button onClick={()=>{
              navigate("/InstantPurchase/all")
            }} style={{background:"#F3CA6D",color:"black",marginLeft:"5px",padding:"10px",borderRadius:"5px",border:"0px"}}>Checkout </button></div> </div>
      
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

</div>
<MediaFooter />
</>
  )
}

export default Wishlist