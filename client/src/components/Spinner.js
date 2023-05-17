import React from "react";

const Spinner = () => {
    return (
        <>
            <div className="d-flex justify-content-center position-fixed w-100 " style={{ color: " #c535b2" }}>
                <div class="spinner-border m-5" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    );
};

export default Spinner;
