import React, { Fragment } from 'react';
import Common from "./Common";
import web from "../src/images/react-js-img.png";

const Home = () => {
    return (
        <Fragment>
            <Common 
                name="Grow your business with"
                imgsrc={web}
                visit="/service"
                btname="Get Started"
             />
        </Fragment>
    );
}

export default Home;