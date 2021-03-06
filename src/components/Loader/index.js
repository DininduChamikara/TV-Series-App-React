import React from "react";
import loaderSrc from '../../assets/loader.gif';

const Loader = props => (
    <div>
        <img 
            style={{ width: 100 }}
            alt="Loader icon" 
            src={loaderSrc}/>
    </div>
);

export default Loader;