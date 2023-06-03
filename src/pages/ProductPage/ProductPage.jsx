import React ,{useRef, useState} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './ProductPage.css'
import user from '../../assets/user.png'
import shopingcart from '../../assets/shopingcart.png'
import logo from '../../assets/logo.png'

import filter from '../../assets/filter.png'
import print from '../../assets/print.png'
import posslogogif from "../../assets/posslogogif.gif"
import { useEffect } from "react";
import { getAdminProducts, getAllProducts, getbrandCategory, getpetCategory, gettypeCategory, searchInput } from "../../Api/ProductRequest.js";


import { Circles } from  'react-loader-spinner'


import 'bootstrap/dist/css/bootstrap.css';

import {Footer} from '../../components/Footer/Footer'
import { Link, useNavigate, useParams }  from 'react-router-dom';
import MediaNavbar from '../../components/MediaNavbar/MediaNavbar';

import MediaFooter from '../../components/Footer/MediaFooter';
import { addToWishlist, getWishlist } from '../../Api/WishlistRoute';
import swal from 'sweetalert';
import { Badge } from '@mui/material'

const ProductPage = () => {
  const params=useParams()
  useEffect(() => {
    window.scrollTo(0, 0)
    cart()
  }, [])
  const  [isMobile,setIsMobile] = useState(false);
const[petCatagoryy,setpetCatagoryy]=useState(JSON.parse(localStorage.getItem("pet"))||[])
const[typeCatagoryy,settypeCatagoryy]=useState(JSON.parse(localStorage.getItem("type"))||[])
const[brandCatagoryy,setbrandCatagoryy]=useState(JSON.parse(localStorage.getItem("brand"))||[])
const [loading,setLoading]=useState(false)
const [limit,setLimit]=useState(20)

const brand=[
  'SMARTY PET',
'LAL PET',
'DROOLS',
'ACANA',
'AQUA DOG',
'ARDEN GRANGE',
'SAVIC',
'DOGFEST',
'BARK N BONE',
'BARK BUTLER',
'BASIL',
'ALL4PETS',
'CANOPUS',
'CATFEST',
'DOG',
'PAWSH',
'TRUELOVE',
'WAGGY ZONE',
'WHOOF WHOOF',
'BEAPHAR',
'BEEPS',
'BENNY’S',
'BIO PET ACTIVE',
'BIOLINE',
'TRIXIE',
'BRAVECTO',
'FIFOZONE',
'CANINE CREEK',
'VIRBAC',
'SAVAVET',
'INTERSAND',
'ODOURLOCK',
'SIMPLE SOLUTION',
'CATSAN',
'CHAPPI',
'RENA',
'CHIP CHOP',
'CHIPSI',
'CAPTAIN ZACK',
'TEA TREE OIL',
'DIBAQ',
'POSS',
'TRIXIE',
'BAYER',
'BIO GROOM',
'FARMINA',
'FIDELE',
'FOODIE PUPPIES',
'PETFROLICS',
'FIRST BARK',
'FIRST MEOW',
'FONDAPET',
'VENKY’S',
'TROPICLEAN',
'OUTWARD HOUND',
'GNAWLERS',
'gnawlers puppy snack strip123',
'GOODIES',
'H.P.',
'HELLO PET',
'HAPPY DOG',
'HELLOFEED',
'HIMALAYA',
'PETSTAGES',
'IAMS',
'iams pug123',
'FREEDOM',
'JERHIGH',
'KILTIX',
'KISKIN',
'KENNEL KITCHEN',
'BIO-GROOM',
'KRYPTO',
'ME-O',
'MY BEAU',
'FARMINA',
'PET CARE',
'VETOQUINOL',
'PETKIN',
'ORIJEN',
'OUT PETCARE',
'PEDIGREE',
'DOG LOVERS',
'INTAS',
'PURINA',
'HOLY PAWS',
'ROYAL CANIN',
'RUFFWEAR',
'SCOOBEE',
'SHEBA',
'SIMPARICA',
'SMARTHEART',
'SKY EC',
'TAIYO',
'TASTE OF THE WILD',
'TEMPTATION',
'TWISTIX',
'VITAPOL',
'WHISKAS',
'WOREX',
'YOUR BUDDY',
'ZOOMIES',
'ZUPREEM',
'BARK BONE'
]
    const [category, setCategory] = useState("");
    // const [products, setProduct] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  // const handleLoadMore=async()=>{
  //   try {
  //     setLoading(true)
  //     // setpetCatagoryy(beta)
    
  //     const ata={
  //       typeCatagoryy:typeCatagoryy,
    
  //       petCatagoryy:petCatagoryy,
  //       brandCatagoryy:brandCatagoryy,
  //       limit:limit
  //      }
      
  //     // You can await here
      
  //     const {data}=await getAllProducts(ata)
  //     setLoading(false)
  //     setProduct(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  const handlePet=async(e)=>{
    if(petCatagoryy.includes(e)){
      return
    }else{
    // const beta=[...petCatagoryy,e]
    setLoading(true)
    // setpetCatagoryy(beta)
    petCatagoryy.push(e)
    const ata={
      typeCatagoryy:typeCatagoryy,
  
      petCatagoryy:petCatagoryy,
      brandCatagoryy:brandCatagoryy
     }
    
    // You can await here
    
    const {data}=await getAllProducts(ata)
    setLoading(false)
    setProduct(data)
    }
    // ...
  }
  const handleBrand=async(e)=>{
    if(brandCatagoryy.includes(e)){
      return
    }else{
    // const beta=[...petCatagoryy,e]
    setLoading(true)
    // setpetCatagoryy(beta)
    brandCatagoryy.push(e)
    const ata={
      typeCatagoryy:typeCatagoryy,
  
      petCatagoryy:petCatagoryy,
      brandCatagoryy:brandCatagoryy
     }
    
    // You can await here
    
    const {data}=await getAllProducts(ata)
    setLoading(false)
    setProduct(data)
    }
    // ...
  }

 const handletype=async(e)=>{
  if(typeCatagoryy.includes(e)){
    return
  }else{
    
  // const beta=[...typeCatagoryy,e]
 setLoading(true)
  // settypeCatagoryy(beta)
  typeCatagoryy.push(e)
  const ata={
    typeCatagoryy:typeCatagoryy,

    petCatagoryy:petCatagoryy,
    brandCatagoryy:brandCatagoryy
   }
  
  // You can await here
  
  const {data}=await getAllProducts(ata)
  setLoading(false)
  setProduct(data)
 }
  // ...
 }

 const frback=async()=>{
  const pet=JSON.parse(localStorage.getItem("pet"))
  const type=JSON.parse(localStorage.getItem("type"))
  const brand=JSON.parse(localStorage.getItem("brand"))
  if(pet || brand || type ){
   setLoading(true)
   setpetCatagoryy(pet)
   const ata={
     typeCatagoryy:typeCatagoryy,
 
     petCatagoryy:petCatagoryy,
     brandCatagoryy:brandCatagoryy
    }
   
   // You can await here
   
   const {data}=await getAllProducts(ata)
   setLoading(false)
   setProduct(data)
  }
 }

 
// useEffect(async()=>{
//  const pet=JSON.parse(localStorage.getItem("pet"))
//  if(pet){
//   setLoading(true)
//   const ata={
//     typeCatagoryy:typeCatagoryy,

//     petCatagoryy:petCatagoryy,
//     brandCatagoryy:brandCatagoryy
//    }
  
//   // You can await here
  
//   const {data}=await getAllProducts(ata)
//   setLoading(false)
//   setProduct(data)
//  }
// },[petCatagoryy])
  
 
    const navigate =useNavigate()
    function handleProductPurchase(event){
      navigate('/ProductPurchase');
    }

    const shrink=()=>{
      document.getElementById('sidebar').style.width='0px'
      document.getElementById('show').style.display='none'
  
  }
  const expand=()=>{
      document.getElementById('sidebar').style.width='250px'
      document.getElementById('show').style.display='none'
  
  }

  
  
    const [products,setProduct]=useState([])
    const Productpage = () => {
        navigate(`/ProductPage/${products._id}`)
    } 

    const userData =localStorage.getItem("userId")
    const userInfo =localStorage.getItem("userInfo")

    const removePet=async(e)=>{
      console.log(e);
      const index = petCatagoryy.indexOf(e);
      
    if (index > -1) { // only splice array when item is found
      setLoading(true)
      petCatagoryy.splice(index, 1); // 2nd parameter means remove one item only
      setpetCatagoryy(petCatagoryy)
      localStorage.setItem("pet",JSON.stringify(petCatagoryy))
      console.log(petCatagoryy);
      const ata={
        typeCatagoryy:typeCatagoryy,
    
        petCatagoryy:petCatagoryy,
        brandCatagoryy:brandCatagoryy
       }
      
      // You can await here
      
      const {data}=await getAllProducts(ata)
      setLoading(false)
      setProduct(data)
      
      // ...
    }
      
    }
  
const removetype=async(e)=>{
  console.log(e);
  const index = typeCatagoryy.indexOf(e);

if (index > -1) { // only splice array when item is found
  setLoading(true)
  typeCatagoryy.splice(index, 1); // 2nd parameter means remove one item only
  settypeCatagoryy(typeCatagoryy)
  localStorage.setItem("type",JSON.stringify(typeCatagoryy))
  console.log(petCatagoryy);
  const ata={
    typeCatagoryy:typeCatagoryy,

    petCatagoryy:petCatagoryy,
    brandCatagoryy:brandCatagoryy
   }
  
  // You can await here
  
  const {data}=await getAllProducts(ata)
  setLoading(false)
  setProduct(data)
  
  // ...
}

}

const removebrand=async(e)=>{
  console.log(e);
  const index = brandCatagoryy.indexOf(e);
if (index > -1) { // only splice array when item is found
  setLoading(true)
  brandCatagoryy.splice(index, 1); // 2nd parameter means remove one item only
  setbrandCatagoryy(brandCatagoryy)
  localStorage.setItem("brand",JSON.stringify(brandCatagoryy))
  const ata={
    typeCatagoryy:typeCatagoryy,

    petCatagoryy:petCatagoryy,
    brandCatagoryy:brandCatagoryy
   }
  
  // You can await here
  
  const {data}=await getAllProducts(ata)
  setLoading(false)
  setProduct(data)
  
  // ...
}
}
     
     function handleClick(event) {
     
       navigate('/Signin');
     }
    
    useEffect(() => {
  
      async function fetchData() {
      
        setLoading(true)
        
        
        const ata={
          typeCatagoryy:[params.type],
      
          petCatagoryy:[params.id],
          brandCatagoryy:[]
         }
        
        // You can await here
        
        const {data}=await getAllProducts(ata)
        setLoading(false)
        setProduct(data)
        
        // ...
      
      
    }
    if(petCatagoryy.length>0 || typeCatagoryy.length>0 || brandCatagoryy.length>0){
      
      frback()
     }else{
    fetchData();}
    }, [params]); // Or [] if effect doesn't need props or state


   
    const src=(data)=>{
    
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

const wishlist=async(data)=>{
  if(userData && userInfo){
   const ata={
     productId:data._id,
     userId:userData,
     quantity:1,
     name:data.name,
     uploadImages:data.uploadImages,
     price:data.price
   }
   const tata= await addToWishlist(ata)
   if(tata){
    cart()
   swal("Added to cart")
    
   }
  }else{
   swal("Login first")
   navigate('/login')
  }
  
    
 }







 const  handleProduct=async(dataz)=>{
  setLoading(true)
const type=dataz.typeCatagoryy ?[dataz.typeCatagoryy]:[]
const pet=dataz.petCategoryy?[dataz.petCategoryy]:[]

if(type.length>0 && pet.length>0){
  setpetCatagoryy(pet)
  settypeCatagoryy(type)
  
  navigate(`/ProductPage/${dataz.petCategoryy}/${dataz.typeCatagoryy}`)}
 
  else if(pet.length>0){
    setpetCatagoryy(pet)
    settypeCatagoryy([])
    
  const ata={
    typeCatagoryy:type,

    petCatagoryy:pet,
    brandCatagoryy:[]
   }
  
  // You can await here
  
  const {data}=await getAllProducts(ata)
  setLoading(false)
  setProduct(data)
 }
  }

  function handleLogin(event){
    navigate('/Login');
  }



const [searchText,setSearchText]=useState("")
const handleChange = (e) => {
 setSearchText(e.target.value)
};

console.log("srtxt",searchText);
const handleSearchInput=async(e)=>{
  setLoading(true)
  e.preventDefault();
  const ata= {search:searchText}
   if(searchText!==""){
    console.log("ata",ata);

    const {data}=await searchInput(ata)
    console.log(data);
    setLoading(false)
    setProduct(data)
   setSearchText("")
   }else{
    const {data}=await getAdminProducts()
    setLoading(false)
    setProduct(data)
   }
 
  
}
const [cartNumber,setCartNumber]=useState(0)
const userId=localStorage.getItem("userId")
const cart=() => {
  async function fetchData() {
    // You can await here
    // alert()
    const beta={userId:userId}
    const {data}=await getWishlist(beta)
 
    console.log("data",data);
 setCartNumber(data?.Wishlist?.products?.length)
 
    // ...
  }
  fetchData();
}; 
  return (
    <>
    <div>
  
{/* navbar starts here */}

<div className='desktopnavbar' style={{margin:'10px'}}>
    
    <nav id='navbar' className="navbar navbar-expand-lg navbar-light"  >
      <a   className="navbar-brand"  >
  <>
 <img onClick={()=>{
  navigate("/")
 }} src={posslogogif } style={{width:"70px",height:'70px',borderRadius:'40px'}} alt="" />
  </>

      </a>
 
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul id='liskmit'  className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a   className="nav-link dropdown-toggle" data-toggle="dropdown"  href='/' id="navbarDropdown" role="button"   aria-haspopup="true" aria-expanded="false">
              Dogs
            </a>
            <div className="dropdown-menu"  aria-labelledby="navbarDropdown">
              <a  className="dropdown-item"   onClick={()=>{
              handleProduct({
                "petCategoryy":"DOG",
                "typeCatagoryy":"FOOD"
              })
            }}>Food</a>
              <a className="dropdown-item"   onClick={()=>{
              handleProduct({
                "petCategoryy":"DOG",
                "typeCatagoryy":"TREAT"
              })
            }} >Treats</a>
              <a className="dropdown-item"  onClick={()=>{
              handleProduct({
                "petCategoryy":"DOG",
                "typeCatagoryy":"TOY"
              })
            }} >Toys </a>
             
              <a className="dropdown-item"   onClick={()=>{
              handleProduct({
                "petCategoryy":"DOG",
                "typeCatagoryy":"APPARELS"
              })
            }}  >Apparels</a>
              <a className="dropdown-item"    onClick={()=>{
              handleProduct({
                "petCategoryy":"DOG",
                "typeCatagoryy":"ACCESSORIES"
              })
            }}>Accessories</a>
             
              <a className="dropdown-item"   onClick={()=>{
              handleProduct({
                "petCategoryy":"DOG",
                "typeCatagoryy":"MAT"
              })
            }}  >Bed And Mats</a>
          
              <a className="dropdown-item"   onClick={()=>{
              handleProduct({
                "petCategoryy":"DOG",
                "typeCatagoryy":"HEALTH & HYGIENE"
              })
            }} >Health and Hygiene</a>
            
              
            </div>
          </li>
          <li  className="nav-item dropdown">
            <a href='/' className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Cats
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item"    onClick={()=>{
              handleProduct({
                "petCategoryy":"CAT",
                "typeCatagoryy":"FOOD"
              })
            }} >Food </a>
              <a className="dropdown-item"   onClick={()=>{
              handleProduct({
                "petCategoryy":"CAT",
                "typeCatagoryy":"TREAT"
              })
            }} >Treats</a>
              <a className="dropdown-item"    onClick={()=>{
              handleProduct({
                "petCategoryy":"CAT",
                "typeCatagoryy":"TOY"
              })
            }} >Toys </a>
              
              <a className="dropdown-item"   onClick={()=>{
              handleProduct({
                "petCategoryy":"CAT",
                "typeCatagoryy":"APPARELS"
              })
            }} >Apparels</a>
              <a className="dropdown-item"    onClick={()=>{
              handleProduct({
                "petCategoryy":"CAT",
                "typeCatagoryy":"ACCESSORIES"
              })
            }} >Accessories</a>
             
              <a className="dropdown-item"    onClick={()=>{
              handleProduct({
                "petCategoryy":"CAT",
                "typeCatagoryy":"MAT"
              })
            }} >Bed And Mats</a>
              
              <a className="dropdown-item"    onClick={()=>{
              handleProduct({
                "petCategoryy":"CAT",
                "typeCatagoryy":"HEALTH & HYGIENE"
              })
            }} >Health and Hygiene</a>
             
            
            </div>
          </li>
          <li  className="nav-item dropdown">
            <a   href='/' className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Other Animals
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item"     onClick={()=>{
              handleProduct({
                "petCategoryy":"BIRD"
              })
            }}>BIRD </a>
              <a className="dropdown-item"   onClick={()=>{
              handleProduct({
                "petCategoryy":"TURTLE"
              })
            }} >TURTLE</a>
              <a className="dropdown-item"   onClick={()=>{
              handleProduct({
                "petCategoryy":"FISH"
               
              })
            }} >FISH </a>
              
              <a className="dropdown-item" 
                onClick={()=>{
                  handleProduct({
                    "petCategoryy":"GUINEA PIG"
                  })
                }}
              >GUINEA PIG</a>
              <a className="dropdown-item"   onClick={()=>{
              handleProduct({
                "petCategoryy":"HAMSTER"
              })
            }} >HAMSTER</a>
              <a className="dropdown-item" 
                onClick={()=>{
                  handleProduct({
                    "petCategoryy":"RABBIT"
                  })
                }}
              >RABBIT </a>
             
             
            
            </div>
          </li>
          {/* <li   className="nav-item">
            <a  id="navlinka" className="nav-link active" href="/AboutUS">About US</a>
          </li> */}
          <li   className="nav-item">
            <a  id="navlinka" className="nav-link active" href="/#priceContainer"
            
          //   onClick = {(e)=>{
          //     e.preventDefault();
          //     window.scrollTo({
          //     top: document.querySelector("#OurServiceSlider").offsetTop,
          //     behavior: "smooth",
          //  });}}
            >Our Services</a>
          </li>
          {/* <li   className="nav-item">
            <a  id="navlinka" className="nav-link active" href="/ContactUS">Contact US</a>
          </li> */}
         
     
         
          
        </ul>
        <form id='serachbar' className="form-inline my-2 my-lg-0" onSubmit={handleSearchInput}>
         <div > <input value={searchText } onChange={handleChange} style={{width:'240px',padding:'20px',backgroundColor:'white',fontSize:'15px'}} className="form-control mr-sm-2" type="text" placeholder="Search your query here" name='searchText' aria-label="Search" /><span>
          
          <button type="submit" style={{backgroundColor:'transparent',borderColor:'transparent',marginLeft:"5px"}}><i class="fa fa-search" aria-hidden="true"></i></button></span>
</div>
        </form>
        <ul  className='liskmin'>
        <li   className="nav-item">
      <a > <Badge badgeContent={cartNumber} color="primary">
     <img onClick={()=>{
                navigate("/storeCart")
              }} src={shopingcart} style={{width:"20px"}} alt="" />
</Badge></a>
  
          </li>
         
          <li  className="nav-item dropdown">
            <a href='/'  className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src={user} alt="" />
            </a>
            <div className="dropdown-menu" style={{marginLeft:'-80px'}} aria-labelledby="navbarDropdown">
          {userInfo ? <>
            <a  className="dropdown-item" > <button style={{backgroundColor:'transparent',borderColor:'transparent',fontSize:'15px',fontWeight:'650'}} onClick={()=>{
           
            navigate("/Account")
          }}> MY ACCOUNT </button> </a>
          
             <a  className="dropdown-item" > <button style={{backgroundColor:'transparent',borderColor:'transparent',fontSize:'15px',fontWeight:'650'}} onClick={()=>{
            swal("Do You Want To Logout")
            
            localStorage.removeItem("userInfo")
            localStorage.removeItem("userId")
            navigate("/")
          }}> LOGOUT </button> </a></>
           : <>
          <a  className="dropdown-item" > <button style={{backgroundColor:'transparent',borderColor:'transparent',fontSize:'15px',fontWeight:'650'}} onClick={handleClick}> Sign Up </button> </a>
              <a  className="dropdown-item" > <button style={{backgroundColor:'transparent',borderColor:'transparent',fontSize:'15px',fontWeight:'650'}}  onClick={handleLogin} >Login</button> </a>

          </>}
            </div>
          </li>
         
        
        </ul>
      </div>
    </nav>
  </div>
{/* navbar ends here */}

{/* medianavbar starts */}
<div className='MediaNavbar'>
  <div style={{display:'flex',justifyContent:'space-between',width:'100%',padding:'10px 5px 5px 5px'}}>
    <div style={{justifyContent:'left'}}>

    <>
   <img onClick={()=>{
    navigate("/")
   }} src={posslogogif } style={{borderRadius:"30px"}} className='logo' alt="" />
    </>
    </div>
    <div align='center' style={{justifyContent:'center'}}>
    <form  className='search-container' onSubmit={handleSearchInput} >
     
      
     <div> <input  name='searchText'  type="text"  style={{width:'80%'}} placeholder="Search.." value={searchText } onChange={handleChange}  />  
      <span> <button type="submit" style={{marginLeft:"5px",backgroundColor:'transparent',borderColor:'transparent',marginLeft:"2px"}}><i class="fa fa-search" aria-hidden="true"></i></button>
</span>
</div>
    </form>
    </div>
    <div style={{justifyContent:'right'}}>
    <button className='mobile-menu-icon' 
  onClick={()=>setIsMobile(!isMobile)}
  >
    {
      isMobile ? (
        <i className='fas fa-times'></i>
      ):(
        <i className='fas fa-bars'></i>
      )
    }
  </button>
  <li className={isMobile?'nav-links-mobile':'nav-links'}  onClick={()=> setIsMobile(false)}>
        
       <ul  style={{display:'flex',textDecoration:'none',padding:'10px'}}>
        <li style={{listStyle:'none'}}>  <a > <Badge badgeContent={cartNumber} color="primary">
     <img onClick={()=>{
                navigate("/storeCart")
              }} src={shopingcart} style={{width:"20px"}} alt="" />
</Badge></a>
        </li>
   
        <li style={{ listStyle:'none'}}><Link to="/login" className='home'><i className="fa fa-heart"></i>
          </Link>
          </li>
    
       </ul>
        <li style={{margin:'0'}}>
        <button
    className="dropdown-toggle"
    type="button"
    id="menu1"
    data-toggle="dropdown"
  >
         Dogs
    <span className="caret" />
  </button>
  <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
    <li role="presentation" id='listmo' >
      <a role="menuitem" tabIndex={-1}  onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"FOOD"
                })
              }} >
      Food
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} 
       onClick={()=>{
        handleProduct({
          "petCategoryy":"DOG",
          "typeCatagoryy":"TREAT"
        })
      }} >
      Treats
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} 
       onClick={()=>{
        handleProduct({
          "petCategoryy":"DOG",
          "typeCatagoryy":"TOY"
        })
      }} >
      Toys
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} 
      
      onClick={()=>{
        handleProduct({
          "petCategoryy":"DOG",
          "typeCatagoryy":"APPARELS"
        })
      }} >
      Apparels
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} 
       onClick={()=>{
        handleProduct({
          "petCategoryy":"DOG",
          "typeCatagoryy":"ACCESSORIES"
        })
      }} >
      Accessories
      </a>
    </li>
    
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} 
       onClick={()=>{
        handleProduct({
          "petCategoryy":"DOG",
          "typeCatagoryy":"MAT"
        })
      }} >
      Bed And Mats 
      </a>
    </li>
   
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} 
       onClick={()=>{
        handleProduct({
          "petCategoryy":"DOG",
          "typeCatagoryy":"HEALTH & HYGIENE"
        })
      }} >
      Health and Hygiene 
      </a>
    </li>


 
  </ul>
</li>
        
<li>
        <button
    className="dropdown-toggle"
    type="button"
    id="menu1"
    data-toggle="dropdown"
  >
         Cats
    <span className="caret" />
  </button>
  <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1}  onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"FOOD"
                })
              }} >
      Food
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"TREAT"
                })
              }}>
      Treats
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} 
      onClick={()=>{
        handleProduct({
          "petCategoryy":"CAT",
          "typeCatagoryy":"TOY"
        })
      }}>
      Toys
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"APPARELS"
                })
              }}>
      Apparels
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"ACCESSORIES"
                })
              }}>
      Accessories
      </a>
    </li>
   
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"MAT"
                })
              }}>
      Bed And Mats 
      </a>
    </li>
   
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} onClick={()=>{
                handleProduct({
                  "petCategoryy":"CAT",
                  "typeCatagoryy":"HEALTH & HYGIENE"
                })
              }}>
      Health and Hygiene 
      </a>
    </li>


 
  </ul>
</li>

<li>
        <button
    className="dropdown-toggle"
    type="button"
    id="menu1"
    data-toggle="dropdown"
    style={{margin:'0px 0px 0px 0px',textAlign:'center'}}

  >
         Other
         Animals
    <span className="caret" />
  </button>
  <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
    <li role="presentation" id='listmo' >
      <a role="menuitem" tabIndex={-1} onClick={()=>{
                handleProduct({
                  "petCategoryy":"RABBIT",
                  "typeCatagoryy":"FOOD"
                })
              }}>
      RABBIT      
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} onClick={()=>{
                handleProduct({
                  "petCategoryy":"HAMSTER",
                  "typeCatagoryy":"FOOD"
                })
              }}>
      HAMSTER
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1}onClick={()=>{
                handleProduct({
                  "petCategoryy":"GUINEA PIG",
                  "typeCatagoryy":"FOOD"
                })
              }}>
      GUINEA PIG
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} onClick={()=>{
                handleProduct({
                  "petCategoryy":"BIRD",
                  "typeCatagoryy":"FOOD"
                })
              }}>
      BIRD
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} onClick={()=>{
                handleProduct({
                  "petCategoryy":"TURTLE",
                  "typeCatagoryy":"FOOD"
                })
              }}>
      TURTLE
      </a>
    </li>
    <li role="presentation" id='listmo'>
      <a role="menuitem" tabIndex={-1} onClick={()=>{
                handleProduct({
                  "petCategoryy":"FISH",
                  "typeCatagoryy":"FOOD"
                })
              }}>
      FISH
      </a>
    </li>
   
   
   


 
  </ul>
</li>
     
        <li style={{ margin: '20px 10px'}}><Link to="/" className='home'>Contact
          </Link></li>
       
         
        <li style={{ margin: '20px 10px'}}>
        <Link to="/" className='home'>About </Link>
        </li>
       {userInfo ?<>
        <li style={{ margin: '20px 10px'}}><Link to="/Account" className='home'>My Account
          </Link></li>
          
       
        <li onClick={()=>{
              localStorage.removeItem("userInfo")
              localStorage.removeItem("userId")
              navigate("/")
            }} style={{ margin: '20px 10px'}}><Link to="/signin" className='home'>Logout
          </Link></li></> :
       <>
        <li style={{ margin: '20px 10px'}}><Link to="/signin" className='home'>SignUp
          </Link></li>
          <li style={{ margin: '20px 10px'}}><Link to="/login" className='home'>Login
          </Link></li>

         </>
       }
          
         
  </li>
    </div>
  </div>

 


  

   

    </div>
{/* media nav bar ends */}
  <div className='container-fluid' style={{display:"flex"}}>

  <div className='flexco' style={{justifyContent:"space-between"}} >
    <div className='flexit1'>
      <div style={{display:'flex'}}>
      <div >
      <a  style={{width:"auto",height:"2rem"}}  className="selectbox nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Pet
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
             
              <a className="dropdown-item"     onClick={()=>{
                handlePet( "DOG")
              }}>DOG</a>
               <a className="dropdown-item"     onClick={()=>{
                handlePet( "CAT")
              }}>CAT</a>
              <a className="dropdown-item"     onClick={()=>{
                handlePet( "BIRD")
              }}>BIRD </a>
                <a className="dropdown-item"   onClick={()=>{
                  handlePet( "TURTLE")
              
              }} >TURTLE</a>
                <a className="dropdown-item"   onClick={()=>{
                  handlePet( "FISH")
              }} >FISH </a>
                
                <a className="dropdown-item" 
                  onClick={()=>{
                    handlePet( "GUINEA PIG")
                   
                  }}
                >GUINEA PIG</a>
                <a className="dropdown-item"   onClick={()=>{
                  handlePet( "HAMSTER")
              
              }} >HAMSTER</a>
                <a className="dropdown-item" 
                  onClick={()=>{
                    handlePet( "RABBIT")
                   
                  }}
                >RABBIT </a>
               
               
              
              </div>
    
        </div>
      <div className='commm'>
               <a  style={{width:"auto",height:"2rem"}}     className="selectbox nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 Type
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              
               <a className="dropdown-item"     onClick={()=>{
               handletype("FOOD")
              }}>FOOD </a>
                <a className="dropdown-item"   onClick={()=>{
                 handletype("TOY")
              }} >TOY</a>
                <a className="dropdown-item"   onClick={()=>{
                  handletype("TREAT")
              }} >TREAT</a>
                
                <a className="dropdown-item" 
                  onClick={()=>{
                    handletype("APPARELS")
                  }}
                >APPARELS</a>
                <a className="dropdown-item"   onClick={()=>{
                 handletype("ACCESSORIES")
              }} >ACCESSORIES</a>
                <a className="dropdown-item" 
                  onClick={()=>{
                    handletype("HEALTH & HYGIENE")
                  }}
                >HEALTH & HYGIENE </a>
                 <a className="dropdown-item" 
                  onClick={()=>{
                    handletype("BEDS")
                  }}
                >BEDS & MATS </a>
               
               </div>
      
        </div>
      </div>
     <div style={{display:"block"}}>
     <div style={{marginTop:"10px"}}>
    {petCatagoryy.length>0 &&  
 petCatagoryy && petCatagoryy.map((e)=>(
        <>
        <button style={{fontSize:"10px" ,color:"black",borderRadius:"20px",backgroundColor:"#F3CA6D",borderColor:"transparent"}} onClick={()=>{removePet(e)}}>{e} ⨂</button> 
        </>
      ))}
        {
      typeCatagoryy.length>0 && 
     typeCatagoryy && typeCatagoryy.map((e)=>(
        <>
<button style={{fontSize:"10px" ,color:"black",borderRadius:"20px",marginLeft:"5px",backgroundColor:"#F3CA6D",borderColor:"transparent"}} onClick={()=>{removetype(e)}}>{e} ⨂</button> 
        </>
      ))
    
     }
   
{
        brandCatagoryy.length>0 && 
       brandCatagoryy && brandCatagoryy.map((e)=>(
          <>
          <button style={{fontSize:"10px" ,color:"black",borderRadius:"20px",marginLeft:"5px",backgroundColor:"#F3CA6D",borderColor:"transparent"}} onClick={()=>{removebrand(e)}}>{e} ⨂</button> 
          </>  
        ))}
      </div>
   
     
   
     
     </div>
    </div>
    <div className='flexit2'  >
    
    <button className='buttoncolor'  data-toggle="collapse"  data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" onClick={expand}> <b> <h5>Filter <span><img   src={filter} /></span></h5> </b> </button>
      <div  >
      <div  style={{display:'none' ,height:'100vh' ,backgroundColor:'#f1f1f1' ,width:"0px",}} >
      
          
          </div>
        <div  className="sidenav" id='sidebar' >
        
          <div id="close" onClick={shrink}><i class="fa fa-times" aria-hidden="true" style={{fontSize:'20px'}}></i></div>
    <header className="card-header" style={{backgroundColor:'transparent'}}>
    <a
      href
      data-toggle="collapse"
      data-target="#collapse_9"
      aria-expanded="false"
      className="anchor"
    >
      <h6 className="title"><span>Catogrory</span> <i className="icon-control fa fa-chevron-down" /></h6>
  
    </a>
  </header>
  <div className="filter-content collapse show" id="collapse_9" >
    <div className="card-body">
    
      <ul align='left' className="list-menu">
    
        <li>
          <a onClick={()=>{
             handlePet("DOG")
          }}>Dogs</a>
        </li>
        <li>
          <a onClick={()=>{
             handlePet("CAT")
          }}>Cats </a>
        </li>
        <li>
          <a onClick={()=>{
           handlePet("RABBIT")
          }}>Rabbit</a>
        </li>
        <li>
          <a onClick={()=>{
            handlePet("TURTLE")
          }}>Turtle</a>
        </li>

        <li>
          <a onClick={()=>{
            handlePet("GUINEA PIG")
          }}>Guinea Pigs</a>
        </li>
        <li>
          <a onClick={()=>{
           handlePet("BIRD")
          }}>Birds</a>
        </li>
        <li>
          <a onClick={()=>{
          handlePet("FISH")
          }}>Fish</a>
        </li>
        <li>
          <a onClick={()=>{
         handlePet("HAMSTER")
          }}>Hamster</a>
        </li>
        
      
      </ul>
    </div>{" "}
    {/* card-body.// */}
  </div>
  <header className="card-header" style={{backgroundColor:'transparent'}}>
    <a
      href
      data-toggle="collapse"
      data-target="#collapse_13"
      aria-expanded="false"
      className="anchor"
    >

{/* 
      brnad starts here */}
      <h6 className="title"><span>Brand</span> <i className="icon-control fa fa-chevron-down" /></h6>
  
    </a>
  </header>
  <div className="filter-content collapse show" id="collapse_13" >
    <div className="card-body">
    
      <ul align='left' className="list-menu">
    {brand &&brand .length>0 && brand.map((e)=>(
   <li>
   <a onClick={()=>{
      handleBrand(e)
   }}>{e}</a>
 </li>
    )

    ) }
       
       
       

      
        
      
      </ul>
    </div>{" "}
    {/* card-body.// */}
  </div>

  {/* brand ends here */}
    {/* <header className="card-header" style={{backgroundColor:'transparent'}}>
    <a
      href
      data-toggle="collapse"
      data-target="#collapse_90"
      aria-expanded="false"
      className="anchor"
    >
      <h6 className="title"><span>Brands</span> <i className="icon-control fa fa-chevron-down" /></h6>
  
    </a>
  </header> */}
  <div className="filter-content collapse show" id="collapse_90" >
  <div >
            <div className="card-body">
  {/* <select  className='inputbox' name='brandCategory' 
 onChange={handleBrandSelect} 
   id="">                             <option value="SMARTY PET">BRANDS</option>
                                      <option value="SMARTY PET">SMARTY PET</option>
                                      <option value="LAL PET">LAL PET</option>
                                      <option value="DROOLS">DROOLS</option>
                                      <option value="ACANA">ACANA</option>
                                      <option value="AQUA DOG">AQUA DOG</option>
                                      <option value="ARDEN GRANGE">ARDEN GRANGE</option>
                                      <option value="SAVIC">SAVIC</option>
                                      <option value="DOGFEST">DOGFEST</option>
                                      <option value="BARK N BONE">BARK N BONE</option>
                                      <option value="BARK BUTLER">BARK BUTLER</option>
                                      <option value="BASIL">BASIL</option>
                                      <option value="ALL4PETS">ALL4PETS</option>
                                      <option value="CANOPUS">CANOPUS</option>
                                      <option value="CATFEST">CATFEST</option>
                                      <option value="DOG">DOG</option>
                                      <option value="PAWSH">PAWSH</option>
                                      <option value="TRUELOVE">TRUELOVE</option>
                                      <option value="WAGGY ZONE">WAGGY ZONE</option>
                                      <option value="WHOOF WHOOF">WHOOF WHOOF</option>
                                      <option value="BEAPHAR">BEAPHAR</option>
                                      <option value="BEEPS">BEEPS</option>
                                      <option value="BENNY'S">BENNY'S</option>
                                      <option value="BIO PET ACTIVE">BIO PET ACTIVE</option>
                                      <option value="BIOLINE">BIOLINE</option>
                                      <option value="TRIXIE">TRIXIE</option>
                                      <option value="BRAVECTO">BRAVECTO</option>
                                      <option value="FIFOZONE">FIFOZONE</option>
                                      <option value="CANINE CREEK">CANINE CREEK</option>
                                      <option value="VIRBAC">VIRBAC</option>
                                      <option value="SAVAVET">SAVAVET</option>
                                      <option value="INTERSAND">INTERSAND</option>
                                      <option value="ODOURLOCK">ODOURLOCK</option>
                                      <option value="SIMPLE SOLUTION">SIMPLE SOLUTION</option>
                                      <option value="CATSAN">CATSAN</option>
                                      <option value="CHAPPI">CHAPPI</option>
                                      <option value="RENA">RENA</option>
                                      <option value="CHIP CHOP">CHIP CHOP</option>
                                      <option value="CHIPSI">CHIPSI</option>
                                      <option value="CAPTAIN ZACK">CAPTAIN ZACK</option>
                                      <option value="TEA TREE OIL">TEA TREE OIL</option>
                                      <option value="DIBAQ">DIBAQ</option>
                                      <option value="POSS">POSS</option>
                                      <option value="TRIXIE">TRIXIE</option>
                                      <option value="BAYER">BAYER</option>
                                      <option value="BIO GROOM">BIO GROOM</option>
                                      <option value="FARMINA">FARMINA</option>
                                      <option value="FIDELE">FIDELE</option>
                                      <option value="FOODIE PUPPIES">FOODIE PUPPIES</option>
                                      <option value="PETFROLICS">PETFROLICS</option>
                                      <option value="FIRST BARK">FIRST BARK</option>
                                      <option value="FIRST MEOW">FIRST MEOW</option>
                                      <option value="FONDAPET">FONDAPET</option>
                                      <option value="VENKY'S">VENKY'S</option>
                                      <option value="TROPICLEAN">TROPICLEAN</option>
                                      <option value="OUTWARD HOUND">OUTWARD HOUND</option>
                                      <option value="GNAWLERS">GNAWLERS</option>
                                      <option value="gnawlers puppy snack strip123">gnawlers puppy snack strip123</option>
                                      <option value="GOODIES">GOODIES</option>
                                      <option value="H.P.">H.P.</option>
                                      <option value="HELLO PET">HELLO PET</option>
                                      <option value="HAPPY DOG">HAPPY DOG</option>
                                      <option value="HELLOFEED">HELLOFEED</option>
                                      <option value="HIMALAYA">HIMALAYA</option>
                                      <option value="PETSTAGES">PETSTAGES</option>
                                      <option value="IAMS">IAMS</option>
                                      <option value="iams pug123">iams pug123</option>
                                      <option value="FREEDOM">FREEDOM</option>
                                      <option value="JERHIGH">JERHIGH</option>
                                      <option value="KILTIX">KILTIX</option>
                                      <option value="KISKIN">KISKIN</option>
                                      <option value="KENNEL KITCHEN">KENNEL KITCHEN</option>
                                      <option value="BIO-GROOM">BIO-GROOM</option>
                                      <option value="KRYPTO">KRYPTO</option>
                                      <option value="ME-O">ME-O</option>
                                      <option value="MY BEAU">MY BEAU</option>
                                      <option value="FARMINA">FARMINA</option>
                                      <option value="PET CARE">PET CARE</option>
                                      <option value="VETOQUINOL">VETOQUINOL</option>
                                      <option value="PETKIN">PETKIN</option>
                                      <option value="ORIJEN">ORIJEN</option>
                                      <option value="OUT PETCARE">OUT PETCARE</option>
                                      <option value="PEDIGREE">PEDIGREE</option>
                                      <option value="DOG LOVERS">DOG LOVERS</option>
                                      <option value="INTAS">INTAS</option>
                                      <option value="PURINA">PURINA</option>
                                      <option value="HOLY PAWS">HOLY PAWS</option>
                                      <option value="ROYAL CANIN">ROYAL CANIN</option>
                                      <option value="RUFFWEAR">RUFFWEAR</option>
                                      <option value="SCOOBEE">SCOOBEE</option>
                                      <option value="SHEBA">SHEBA</option>
                                      <option value="SIMPARICA">SIMPARICA</option>
                                      <option value="SMARTHEART">SMARTHEART</option>
                                      <option value="SKY EC">SKY EC</option>
                                      <option value="TAIYO">TAIYO</option>
                                      <option value="TASTE OF THE WILD">TASTE OF THE WILD</option>
                                      <option value="TEMPTATION">TEMPTATION</option>
                                      <option value="TWISTIX">TWISTIX</option>
                                      <option value="VITAPOL">VITAPOL</option>
                                      <option value="WHISKAS">WHISKAS</option>
                                      <option value="WOREX">WOREX</option>
                                      <option value="YOUR BUDDY">YOUR BUDDY</option>
                                      <option value="ZOOMIES">ZOOMIES</option>
                                      <option value="ZUPREEM">ZUPREEM</option>
                                      <option value="BARK BONE">BARK BONE</option>
                                      

                                  </select> */}
            </div>{" "}
            {/* card-body.// */}
          </div>
    {/* card-body.// */}
  </div>
    <header className="card-header" style={{backgroundColor:'transparent'}}>
    <a
      href
      data-toggle="collapse"
      data-target="#collapse_900"
      aria-expanded="false"
      className="anchor"
    >
      <h6 className="title"><span>Product Type</span> <i className="icon-control fa fa-chevron-down" /></h6>
  
    </a>
  </header>
  <div className="filter-content collapse show" id="collapse_900" >
    <div className="card-body">
    
      <ul align='left' className="list-menu">
        
        <li>
          <a onClick={()=>{
            handletype("FOOD")
          }}>FOOD</a>
        </li>
        <li>
          <a onClick={()=>{
           handletype("TOY")
          }}>TOY</a>
        </li>
        <li>
          <a onClick={()=>{
            handletype("ACCESSORIES")
          }}>ACCESSORIES</a>
        </li>

        <li>
          <a onClick={()=>{
            handletype("TREAT")
          }}>TREAT</a>
        </li>
        <li>
          <a onClick={()=>{
            handletype("BEDS")
          }}>BEDS & MAT</a>
        </li>
        <li>
          <a onClick={()=>{
           handletype("APPARELS")
          }}>APPARELS</a>
        </li>
        <li>
          <a onClick={()=>{
            handletype("HEALTH & HYGIENE")
          }}>HEALTH & HYGIENE</a>
        </li>
        
      
      </ul>
    </div>{" "}
    {/* card-body.// */}
  </div>
  </div> 

        </div>
    </div>

  </div>

  </div>

  <div className='container-fluid'>


        <div align='center'  id='rowlock' className='row'>
    
            <div>
          <div className='container' id='productcontainer' >
         <div >
         {loading===false && products.length===0?<img 
 style={{
  width:"12rem",
  marginLeft:"-10px"
 }}
 src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ba874382-2aa0-40bc-8b77-742fd1ea245e/d49w8t2-3f2077a0-fe23-45f9-a0dc-33de8bd62eff.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JhODc0MzgyLTJhYTAtNDBiYy04Yjc3LTc0MmZkMWVhMjQ1ZVwvZDQ5dzh0Mi0zZjIwNzdhMC1mZTIzLTQ1ZjktYTBkYy0zM2RlOGJkNjJlZmYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XFWX-tFjLqeO8gk6cBHHIjMJWvQLb81jzfqD7zIIk7I"
  alt="" />:""}
         <div  style={{width:"4rem"}} >

 <Circles
  height="80"
 
  width="80"
  color="#1BB5C0"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={loading}
/>



          </div>
         </div>
          {loading?<></>:<div align='center' id='procardlw'  className="row g-0">
    
    {products &&
    products.length > 0 &&
    products.map((ele) => (
      
        <div  className='col-sm-4'  id='kil'   >

        <div  id="Productcard30" className='card' >
      <div  onClick={()=>{
                      localStorage.setItem("pet",JSON.stringify(petCatagoryy))
                      localStorage.setItem("type",JSON.stringify(typeCatagoryy))
                      localStorage.setItem("brand",JSON.stringify(brandCatagoryy))
              navigate(`/ProductPurchase/${ele._id}`)
            }}>
            <div className='Productimg' style={{borderRadius:'20px'}} align="center"   >
              <img
            src={src(ele.uploadImages)} alt=""  /></div>
            
            <div  style={{paddingTop:'4px'}} align="center" >
            <p className='brand'>{ele.brandCategory}</p>
               <b><p style={{fontSize:'12px'}} >{ele.name.slice(0,30)+'....'}</p></b> 
                <h6 style={{paddingTop:'2px',fontSize:'15px'}}><s>₹ {ele.maxPrice} </s>  - <b>  ₹{ele.price}</b> </h6>
            </div>


            </div>
            <div style={{paddingTop:'5px',borderRadius:'20px'}} align="center">
            <button   className='button30' onClick={()=>{
                            localStorage.setItem("pet",JSON.stringify(petCatagoryy))
                            localStorage.setItem("type",JSON.stringify(typeCatagoryy))
                            localStorage.setItem("brand",JSON.stringify(brandCatagoryy))
                        wishlist(ele)
            }} ><img style={{backgroundColor:'#F4F7EE',margin:'5px',}} src={ele.uploadImages} alt="" /><span style={{backgroundColor:"#F4F7EE"}}>ADD TO CART</span></button></div>
            <div style={{borderRadius:'20px',paddingTop:'5px',paddingBottom:'5px'}} align="center">
            <button   className='button30' style={{backgroundColor:'#F2C879',color:'black'}} onClick={()=>{
              localStorage.setItem("pet",JSON.stringify(petCatagoryy))
              localStorage.setItem("type",JSON.stringify(typeCatagoryy))
              localStorage.setItem("brand",JSON.stringify(brandCatagoryy))
              navigate(`/InstantPurchase/${ele._id}/1`)
            }}><span >
          <img style={{width:'20px',height:'20px'}} src={print}/>
            
            </span> BUY NOW</button></div>
            </div>

            
        </div>
       ))}

       
    </div>}
          </div>
        </div>

        {/* <div>
     <button className='button30' style={{backgroundColor:'#F2C879',color:'black'}} onClick={()=>{
        let limits=limit+20
        setLimit(limits)
        handleLoadMore()
      }}>Load more ...</button> 
    </div> */}
        </div>

    </div>
 
    </div>
   
    <Footer />
    
    <MediaFooter />
  </>
  )
}

export default ProductPage
