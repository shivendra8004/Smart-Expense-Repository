import { useEffect } from "react";
import "./Preloader.css";
import { preLoaderAnim } from "../../animations/";
const PreLoader = () => {
    useEffect(() => {
        preLoaderAnim();
    }, []);
    return (
        <div className="preloader">
            <div className="text-container">
                <span>A</span>
                <span>Fresh</span>
                <span>Way</span>
                <span>To</span>
                <span>Manage</span>
                <span>Expenses</span>
            </div>
        </div>
    );
};

export default PreLoader;
