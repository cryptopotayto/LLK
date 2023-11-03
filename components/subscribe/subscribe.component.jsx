import { Fragment, useEffect, useRef, useState } from "react";
import classes from './subscribe.module.css';
import Notification from "../ui/notification";

async function sendContactData(contactDetails) {
    const response = await fetch('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify(contactDetails),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    if(!response.ok) {
        throw new Error(data.message || 'Opps, something went wrong.');
    }
}
function SubscribeBar () {
    const [requestStatus, setRequestStatus] = useState();
    const [emailInput, setemailInput] = useState('');
    const [errorMessage, setErrorMessage] = useState();

    useEffect(()=>{
        if(requestStatus === 'success' || requestStatus === 'error') {
            const timer = setTimeout(() => {
                setRequestStatus(null);
                setErrorMessage(null)
;            }, 5000);
            return () => clearTimeout(timer);
        }
    },[requestStatus]);
    
    
    async function onSubmitHandler(event) {
        event.preventDefault();
        const enteredEmail = emailInput;
        setRequestStatus('pending');

        try {
            await sendContactData({
                email: enteredEmail,
            });
            setRequestStatus('success');
            setemailInput('');
        } catch (error) {
            setRequestStatus('error');
            setErrorMessage(error.message);
            console.log(error.message);
        }       
    }

    let notification;

    switch(requestStatus){
        case 'pending':
            notification = {
                status: 'pending',
                title: 'Submitting Email...',
                message: 'Your request is being completed.',
            };
            break;
        case 'success':
            notification = {
                status: 'success',
                title: 'Success',
                message: 'You will receive an email soon!',
            };
            break;
        case 'error':
            notification = {
                status: 'error',
                title: 'Submission Failed',
                message: errorMessage || 'Oops, something went wrong.',
            };
            break;
    }
    console.log(notification);
    return (
    <Fragment>
        <div className={classes.panelContainer}>
            <small>
                KEN LEAGUE IS HERE
            </small>
            <h4>
                Submit your email  <br />
                for more info and sign-up instructions
            </h4>
            <form onSubmit={onSubmitHandler}>
                
                <input 
                    type="email" 
                    id='email' 
                    placeholder="Email Address"
                    value={emailInput} 
                    onChange={(event) => setemailInput(event.target.value)} />
                <button type="submit">I want to play kendama</button>
            </form>
            <small>
                Featuring weekly challenges, promos, and prizes! 
            </small>
        </div> 
    
        {notification && (<Notification notification={notification}/>)}
</Fragment>
    );
};

export default SubscribeBar;