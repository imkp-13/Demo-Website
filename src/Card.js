import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/service.jpg";

const Card = (props) => {
    return (
        <Fragment>
            <div className="my-5">
                <h1 className="text-center brand-name">Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card">
                                    <img src={web} className="card-img-top" alt="abc" />
                                    <div className="card-body">
                                        <h5 className="card-title">{props.title}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card">
                                    <img src={web} className="card-img-top" alt="abc" />
                                    <div className="card-body">
                                        <h5 className="card-title">{props.title}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card">
                                    <img src={web} className="card-img-top" alt="abc" />
                                    <div className="card-body">
                                        <h5 className="card-title">{props.title}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card">
                                    <img src={web} className="card-img-top" alt="abc" />
                                    <div className="card-body">
                                        <h5 className="card-title">{props.title}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card">
                                    <img src={web} className="card-img-top" alt="abc" />
                                    <div className="card-body">
                                        <h5 className="card-title">{props.title}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-10 mx-auto">
                                <div className="card">
                                    <img src={web} className="card-img-top" alt="abc" />
                                    <div className="card-body">
                                        <h5 className="card-title">{props.title}</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <NavLink to="/" className="btn btn-primary">Go somewhere</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Card;