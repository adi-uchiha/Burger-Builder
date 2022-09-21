import React from 'react'
import Auxilary from '../../hoc/Auxilary'
import classes from "./Layout.module.css";

const Layout = (props) => {
    return (
        <Auxilary>
            <div>
                Toolbar,
                sidebar,
                Backdrop
            </div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Auxilary>
    )
}

export default Layout