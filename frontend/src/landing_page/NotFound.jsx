import React from 'react';
import { Link } from 'react-router-dom';
function NotFound() {
    return (
        <>
            <div className="container ">

                <div className="row ">
                    <div className="col-5 p-5">
                        <h1 className="mb-5"><i>Something went wrong </i></h1>
                        <p className="text-muted mb-5"><b>404</b> &nbsp; NOT_FOUND</p>
                        <Link to="/">
                            <button type="button" class="btn btn-primary fs-4" style={{ width: "15rem", height: "4rem" }}>Home Page </button>  </Link>
                    </div>

                    <div className="col-7">
                        <img src='../font-awesome/media/images/error.svg' alt='Error image' className='ml-5' />
                    </div>


                </div>
            </div>

        </>
    );
}

export default NotFound;