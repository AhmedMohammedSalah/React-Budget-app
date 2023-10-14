import React from 'react'
import ReactDom from 'react-dom'
import './Modal.css'
const Modal = ({visible ,children}) => {
    if (!visible) {
        return null
    }
    return ReactDom.createPortal(
        <div>
            <div className="modal-overlay">
                <div className="modal">
                    {children}
                </div>
            </div>
        </div>, document.querySelector( '#modal-root' )
    )

}
export default Modal
