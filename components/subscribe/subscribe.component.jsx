import { Fragment, useRef } from "react";
import classes from './subscribe.module.css';

function SubscribeBar () {
    
    const emailInputRef = useRef();

    function onSubmitHandler(event) {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        console.log(enteredEmail);
        fetch('/api/subscribe', {
            method: 'POST',
            body: JSON.stringify({ email: enteredEmail }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => response.json())
        .then((data) => console.log(data));
    }
    
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
                
                <input type="email" id='email' placeholder="Email Address" ref={emailInputRef} />
                <button type="submit">I want to play kendama</button>
            </form>
            <small>
                Featuring weekly challenges, promos, and prizes! 
            </small>
        </div> 
    <footer className={classes.footer}>
        <p>
            
        </p>
    </footer>
</Fragment>
    );
};

export default SubscribeBar;