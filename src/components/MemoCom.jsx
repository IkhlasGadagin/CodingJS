import React, { useMemo } from 'react'

const MemoCom = () => {
    function calculation(num){
        useMemo(()=>{
            for(let i=0;i<num;i++){
                console.log(i);
            }
        },[num])
    
    }
    
    console.log(calculation(56));
    
  return (
    <div>
      
    </div>
  )
}

export default MemoCom
