'use client'
import { useState } from "react"


import { redirect } from "next/navigation";
export default  function about(){
    

 
    const [index,setIndex]= useState(0);
    const  toUpper= function(amount){
        setIndex(index+amount);
    }
    const  toLower= function(amount){
        setIndex(index-amount);
    }
    return(
   <>
    <h1 style={{backgroundColor:`rgb(255, ${index}, 0)`}}>{index}</h1>
    <h1 style={{backgroundColor:`rgb(${index},255 , 0)`}}>{index}</h1>
    <h1 style={{backgroundColor:`rgb(0, ${index}, 255)`}}>{index}</h1>
    <button onClick={()=>toUpper(100)}>upper</button>
    <button onClick={()=>toLower(100)}>lower</button>
   
   </>
    )
    



}