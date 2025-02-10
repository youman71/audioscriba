'use client'

export function AlertButton({message,children}){
    return (
       <button onClick={()=> alert(message)}>
        {children}
       </button>

    );

    
}
export default function AlertButtonTest({message,children}){
    return (
        <>
        
         <AlertButton message="Hello"> hello</AlertButton>
         <p></p>
       <AlertButton message="Bye"> Bye</AlertButton>

        </>
      
    );
    
    
    
}