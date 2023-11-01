import classes from './landing-background.module.css';
import Image from 'next/image';
function LandingBackground() {
    return (
        <Image 
          src='/images/landingback.png' 
          alt='this image has diagonal LLKs' 
          layout='fill' 
          objectFit='cover' 
          objectPosition='center'
          className={classes.landingimage} />
    );
};

export default LandingBackground;