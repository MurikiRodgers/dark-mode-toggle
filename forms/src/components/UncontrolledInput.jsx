import React, {useRef, useEffect} from 'react'

const UncontrolledInput = () => {

   const nameInputRef = useRef(null);
   const jobInputRef = useRef(null);

   const handleSubmit= (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredJob = jobInputRef.current.value;
     console.log(enteredName,enteredJob);
   }
   useEffect(()=>{
    nameInputRef.current.focus();
   },[]);
   
    return (
        <div className='main'>
          
         <h1 className='heading'>Controlled Input</h1>
          
          <div className="container">
            <div className='card'>
                <form onSubmit={handleSubmit} action="#" className='form-control'>
                    <div >
                        <label htmlFor="name"> Name: </label>
                        <input type="text" name='name' ref={nameInputRef}
                        />
                    </div>
                    <div >
                        <label htmlFor="job">Job: </label>
                        <input type="text" name='job'  ref={jobInputRef}/>
                    </div>
                  
                    <button className ="btn" type='submit'>Submit User</button>
                </form>
            </div>
          </div>
        </div>
      )
}

export default UncontrolledInput
