import React, { Fragment } from 'react';
import Common from './Common';
import web from "../src/images/react-js-img.png";

const About = () => {
    return (
        <Fragment>
            <Common 
                name="Welcome to About page"
                imgsrc={web}
                visit="/contact"
                btname="Contact Now"
             />
        </Fragment>
    );
}

export default About;