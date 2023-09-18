import React from 'react';
import '../components/Formulary.css';


const Formulary = () => {
    return (
        <div className='formulary'>
            <h1 className='formulary_title'>Contact us</h1>
            <form className='formulary_container'>
                <label htmlFor='fullname' className='formulary_container--label'>Full Name</label>
                <input className='formulary_container--input' type="text" required placeholder='Enter name'></input>
                <label htmlFor='email' className='formulary_container--label'>Email</label>
                <input className='formulary_container--input' type="email" required placeholder='Enter Email'></input>
                <label htmlFor='message' className='formulary_container--label'>Message</label>
                <textarea className="formulary_textarea" placeholder='Enter your comments'></textarea>
                <div className='formulary_container_submit'>
                    <input type='button' className='formulary_container_submit--btn' value='SUBMIT'></input>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40" className="white-rotated-icon">
                        <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
                    </svg>
                </div>
            </form>
        </div>
    )
}

export default Formulary;