import React from "react";


export const Alert = (props) => {
  const capitalize = (word)=>{
    if(word==="danger"){
      word = "error"
    }
  }
  return (
    <>

    <div   style={{ width:'100%'}}>
    { props.alert &&  
     <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
   <strong> {capitalize(props.alert.type)}</strong>:  {props.alert.msg}
 </div>}
     </div>
   
   
     </>
  );
};

export default Alert


