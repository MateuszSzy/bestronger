import React from 'react';
import Header from "./Header";

import classes from "./Layout.module.scss";
import Carousel from "./Carousel";

const Layout = ({children}) => {

    return (
        <>
            <div className={classes.container}>{children}

            </div>
        </>
    );
};

export default Layout;