import React, { Fragment } from 'react';

const Contact = () => {
    return (
        <Fragment>
            <div className="my-5">
                <h1 className="text-center brand-name">Contact Us</h1>
                <div className="container-fluid contact_div">
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form>
                                <div class="form-group mb-3">
                                    <label for="formGroupExampleInput">Name</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Enter Your Name" />
                                </div>
                                <div class="form-group mb-3">
                                    <label for="formGroupExampleInput2">Mobile Number</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter Your Mobile Number" />
                                </div>
                                <div class="form-group mb-3">
                                    <label for="formGroupExampleInput2">E-Mail</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Enter Your E-mail" />
                                </div>
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Comments</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Contact;