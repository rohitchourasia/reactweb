import React from 'react';
const Card=(props)=>{

    return (
        <>
           <div className="col-md-4 col-10 mx-auto">
                       <div className="card" >
  <img src={props.imgsrc} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 className="card-title">{props.title}</h5>
    
    
  </div>
</div>
</div>
        </>
    )
}
export default Card ;