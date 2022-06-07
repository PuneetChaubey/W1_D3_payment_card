import React from "react";
import Card_details from "./Card_details";

const Cards = ()=>{

let info = [
     {date:"28/10/2020", logo : "apple", study:"Case Study", heading:"Amzon Gift",subheading:"Pay", devices:"Desktop - Mobile",color:"yellow"},
     {date:"17/10/2020", logo : "apple",study:"Case Study", heading:"Amzon Gift",subheading:"Pay", devices:"Desktop - Mobile",color:"yellow"},
     {date:"17 sep 2020", logo : "apple",study:"Case Study", heading:"Apple Gift",subheading:"Payment", devices:"MacOS - Mobile",color:"white" ,arrow:"fa-solid fa-arrow-right-long"}


]





return <>
         { info.map((p,i)=>{

             return <div key={i}><Card_details {...p}/></div>
         })}
          

         </>    
        


}
export default Cards;