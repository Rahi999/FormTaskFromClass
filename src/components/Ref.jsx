import React, { useState } from "react"

export default function Ref() {
 
    
  const [form, setForm] = useState({})

  const handOnleChange =(e) => {
    let {name,checked,type, value, files} = e.target;
    //console.log(name,checked,type, value)
    if(type === "checkbox")
    {
      setForm({
        ...form,
        [name]: checked,
      }) ;
    }
    else if(type === "file"){
      setForm({
        ...form,
        [name]: files,
      }) ;
    }
    else{
      setForm({
        ...form,
        [name]: value,
      }) ;
    }
  } ;

  const handOnleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div>
      <form onSubmit={handOnleSubmit}>
        <div>
       <label >Name  :</label>
        <input type="text" placeholder="Enter Name.."
        name="username"
        value={form.name}
        onChange={handOnleChange}
        />
        </div>

        <div>
       <label >email  :</label>
        <input type="email" placeholder="Enter email.."
        name="email"
        value={form.email}
        onChange={handOnleChange}
        />
        </div>

        <div>
       <label >password   :</label>
        <input type="text" placeholder="Enter password.."
        name="password"
        value={form.password}
        onChange={handOnleChange}
        />
        </div>

        <div>
       <label >Age  :</label>
        <input type="text" placeholder="Enter Age.."
        name="age"
        value={form.age}
        onChange={handOnleChange}
        />
        </div>
       
       <div>
           <input type="checkbox"
             name="isIndian"
              checked={form.isIndian}
              onChange={handOnleChange}        
           /> <label >: Is-Inidan</label>

       </div>

       <div>
        <input type="radio"
         name="gender"
         value="male"
         onChange={handOnleChange} 
        />
        <label>Male</label>
      </div>

      <div>
        <input type="radio"
         name="gender"
         value="female"
         onChange={handOnleChange} 
        />
        <label>FeMale</label> <br/><br/>
      </div>
           
           <div>
           <label>User Resume :</label>
                 <input type="file"
                 name="resume"
                 files={form.resume}
                 onChange={handOnleChange}
                 />
           </div>
           
           <div>

            <select name="citu" value={form.city} onChange={handOnleChange}>
               <option value="banglore">Banglore</option>
               <option value="delhi">Delhi</option>

            </select>

           </div>
           <button type="submit" >submit</button>

      </form>

    
    </div>
  )
}