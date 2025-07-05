import React ,{useState} from 'react'

const ControlledInput = () => {
    //const [name, setName] = useState("");
    //const [job, setJob] = useState("");

    const [user, setUser]= useState({name:"", job:"", company:""});

 const handleChange= (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({...user,[name]:value});
 }
 

  const handleSubmit=  (e) => {
      e.preventDefault();
      const newUser = user;
      console.log(newUser);
      setUser({name:"", job:"", company:""});
     
    }
    

  return (
    <div className='main'>
      
     <h1 className='heading'>Controlled Input</h1>
      
      <div className="container">
        <div className='card'>
            <form onSubmit={handleSubmit} action="#" className='form-control'>
                <div >
                    <label htmlFor="name"> Name: </label>
                    <input type="text" name='name' value={user.name} onChange={handleChange}
                    />
                </div>
                <div >
                    <label htmlFor="job">Job: </label>
                    <input type="text" name='job' value={user.job}  onChange={handleChange}/>
                </div>
                <div >
                    <label htmlFor="company">Comipany: </label>
                    <input type="text" name='company' value={user.company}  onChange={handleChange}/>
                </div>
                <button className ="btn" type='submit'>Submit User</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default ControlledInput
