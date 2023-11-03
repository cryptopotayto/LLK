import classes from './landing-background.module.css';
import Image from 'next/image';
import brimage from '../../public/images/landingback.png'
function LandingBackground() {
    return (
        <div  className={classes.landingimage}>
            <Image 
              src={brimage}
              alt='this image has diagonal LLKs' 
              quality={100}
              fill         
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder='blur'
               />
        </div>
    );
};

export default LandingBackground;