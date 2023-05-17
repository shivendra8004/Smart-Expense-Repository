import React from "react";

const Spinner = () => {
    return (
        <>
            <div className="d-flex justify-content-center">
                <div class="spinner-border m-5" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    );
};

export default Spinner;
