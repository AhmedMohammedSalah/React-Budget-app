import React from 'react'
import ReactDom from 'react-dom'
import './Modal.css'
const Modal = ({visible ,children,closeModal}) => {
    if (!visible) {
        return null
    }
    return ReactDom.createPortal(
        <div>
            <div className="modal-overlay" onClick={closeModal}>
                <div className="modal" onClick={(e)=>{e.stopPropagation()}}>
                    {children}
                </div>
            </div>
        </div>, document.querySelector( '#modal-root' )
    )

}
export default Modal
