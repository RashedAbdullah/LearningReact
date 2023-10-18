import React, {useState} from 'react';
import './Form.css';

const Form = () => {

    const [name, setName] = useState(``);
    const [email, setEmail] = useState(``);
    const [phone, setPhone] = useState(``);

    function nameChange(e){
        setName(e.target.value)
    }

    function emailChange(e){
        setEmail(e.target.value)
    }

    function phoneChange(e){
        setPhone(e.target.value)
    }

    function ChackSubmit(e){

        const userInfo = {
            //in object when key and value are same, we can difined lik this:
            name,   //name: name,
            email,  //emil: email,
            phone   //phone: phone
        }
        console.log(userInfo);
        
        // it's refreshiing automaticlly
        //Solution is:
        e.preventDefault(); //it's good
    }

  
    <div>

        <form action="" onSubmit={ChackSubmit}>
            
        <h2 className='text-center'>Form</h2>
            {/* Previos Parent */}
            <div>
                <label htmlFor="name">Name: </label>
                <input value={name} onChange={nameChange} id='name' type="text" placeholder='Enter your name' required/>
            </div>

            <div>
                <label htmlFor="email">Email: </label>
                <input value={email} onChange={emailChange} id='email' type="email" placeholder='Email' required/>
            </div>

            <div>
                <label htmlFor="number">Contact</label>
                <input value={phone} onChange={phoneChange} id='number' type="number" placeholder='Enter your Phone number' required/>
            </div>

            <div>
                <input type="submit" />
            </div>

        </form>
    </div>
 
}

export default Form;