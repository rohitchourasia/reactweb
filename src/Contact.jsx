import React from "react";
const Contact=()=>{
    return (
        <>
        <div className="my-5">
            <h1 className= "text-center">Contact ME</h1>

        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Enter Name</label>
    <div className="col-sm-10">
      <input type="text" class="form-control-plaintext" id="exampleFormControlInput1"  placeholder="enter your name"/>
    </div>
  </div>
  
  <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="text" readonly class="form-control-plaintext" id="staticEmail" placeholder="enter your mail"/>
    </div>
  </div>
  
  <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Contact  No</label>
    <div class="col-sm-10">
      <input type="number"  class="form-control-plaintext" id="staticEmail" placeholder="enter your contact no"/>
    </div>
    <button type="button" className="btn btn-primary">Submit</button>
  </div>
  
      

                </div>
            </div>
        </div>
        


        </>
    )
}
export default Contact ;