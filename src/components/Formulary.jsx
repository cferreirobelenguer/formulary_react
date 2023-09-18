import React,{useState, useEffect} from 'react';
import '../components/Formulary.css';


const Formulary = () => {

    //data inputs
    const [fullName, setFullName] =useState('');
    const [email, setEmail] =useState('');
    const [message, setMessage] = useState('');
    //error info
    const [errorEmail, setErrorEmail] = useState('');
    const [errorFullName, setErrorFullName] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    //validate message
    const [validado, setValidado] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        //first rendering we don´t show message and validate is false
        setShowMessage(false);
        setValidado(false);
    },[]);

    useEffect(() => {
        //if we have error messages we show message
        if (errorFullName || errorEmail || errorMessage) {
            setShowMessage(true);
            setValidado(false);
        } else {
            setValidado(true)
        }
    }, [errorFullName, errorEmail, errorMessage]);
    /**
     * @description fullName input data
     * @param event 
     */
    const handleFullName = (event) => {
        setErrorFullName('');
        setShowMessage(false);
        setFullName(event.target.value);
    }
    
    const handleEmail = (event) => {
        setShowMessage(false);
        setErrorEmail('');
        setEmail(event.target.value);
    }
    
    const handleMessage = (event) => {
        setShowMessage(false);
        setErrorMessage('');
        setMessage(event.target.value);
    }
    
    const validation = (fullName, email, message) => {
        if (!(email && email.indexOf('@')!== -1)) {
            setErrorEmail('Email must have @');
        }
        if (!(fullName.length > 5 && !/\d/.test(fullName))) {
            setErrorFullName('You must complete the name and it must not have numbers');
        }
        if (!(message && message.length > 10)){
            setErrorMessage('The message must be longer than 10 characters')
        }
    }
    
    const handleClick = () => {
        setShowMessage(true);
        validation(fullName,email, message);
    }
    

    return (
        <div className='formulary'>
            <h1 className='formulary_title'>Contact us</h1>
            <form className='formulary_container'>
                <label htmlFor='fullname' className='formulary_container--label'>Full Name</label>
                <input className='formulary_container--input' type="text" required placeholder='Enter name' onChange={(event) => handleFullName(event)}></input>
                {errorFullName ? (
                    <p className="error" >{errorFullName}</p>
                ) : ''}
                <label htmlFor='email' className='formulary_container--label'>Email</label>
                <input className='formulary_container--input' type="email" required placeholder='Enter Email' onChange={(event) => handleEmail(event)}></input>
                {errorEmail ? (
                    <p className="error">{errorEmail}</p>
                ): ''}
                <label htmlFor='message' className='formulary_container--label'>Message</label>
                <textarea className="formulary_textarea" required placeholder='Enter your comments' onChange={(event) => handleMessage(event)}></textarea>
                {errorMessage ? (
                    <p className='error'>{errorMessage}</p>
                ): ''}
                <textarea className="formulary_textarea" readOnly={true} defaultValue={message}></textarea>
                <div className='formulary_container_submit'>
                    <input type='button' className='formulary_container_submit--btn' value='SUBMIT' onClick={handleClick}></input>
                    <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40" className="white-rotated-icon">
                        <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
                    </svg>
                </div>
            </form>
            {validado && showMessage ? (
                <p className='validate'>Validated data</p>
            ) : validado === false && showMessage ? (
                    <p className='error'>Error</p>
            ) : null }
        </div>
    )
}

export default Formulary;