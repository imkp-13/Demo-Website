import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/react-js-img.png";

const Common = (props) => {
    return (
        <Fragment>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 mt-5 d-flex justify-content-center flex-column">
                                    <h1>{props.name} <strong className="brand-name">React Website</strong></h1>
                                    <h4 className="my-4">We are the team of experienced developers.</h4>
                                    <div className="mt-4">
                                        <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 mt-5 header-img">
                                    <img src={props.imgsrc} className="img-fluid animated" alt="Common img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Common;