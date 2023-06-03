import React from 'react'

import mediaslideone from '../../assets/mediaslideone.png'
import mediaslidetwo from '../../assets/mediaslidetwo.png'
import mediaslidethree from '../../assets/mediaslidethree.png'
import './ImageSlider.css'

import { useNavigate } from 'react-router-dom'


document.body.style = 'background: rgba(230, 235, 229, 1);'

const MediaImageSlider = () => {
  const navigate=useNavigate()
  function handleProduct(data){
  
    console.log(data);
    navigate(`/ProductPage/${data.petCategoryy}/${data.typeCatagoryy}`);
  }
  return (

  <div className='container-fluid' id='imageslidermedia' >
     <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        {/* <ol className="carousel-indicators" style={{width:'0px'}}>
          <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
          <li data-target="#carouselExampleIndicators" data-slide-to={1} />
          <li data-target="#carouselExampleIndicators" data-slide-to={2} />
        </ol> */}
          <div className="carousel-inner" >
            <div className="carousel-item active">
               <a 
               onClick={()=>{
                handleProduct({
                  "petCategoryy":"DOG",
                  "typeCatagoryy":"TOY"
                })
              }} 
                 >
               <img 
                
                 className="d-block" style={{width:'100%',borderRadius:'20px'}}   src={mediaslideone} alt="First slide" />
               </a> 
                
          </div>
          <div className="carousel-item"  >
           <a href='#MediaPriceContainer' ><img className="d-block "  style={{width:'100%',borderRadius:'20px'}}  src={mediaslidetwo} alt="Second slide" /></a>

         
          </div>
          <div className="carousel-item" >
         <a href='#MediaPriceContainer' ><img className="d-block"  style={{width:'100%',borderRadius:'20px'}}  src={mediaslidethree} alt="Third slide" /> </a>
           
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
      </div>
  </div>
  )
}

export default MediaImageSlider
