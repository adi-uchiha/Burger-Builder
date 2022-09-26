import React from 'react'
import Auxilary from '../../../hoc/Auxilary'
import BackDrop from '../BackDrop/BackDrop'
import classes from './Modal.module.css'


function Modal(props) {
    return (
        <Auxilary>
            <BackDrop show={props.show}
            clicked = {props.modalClosed}
            />
            <div className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                {props.children}
            </div>
        </Auxilary>
    )
}

export default Modal