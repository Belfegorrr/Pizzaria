import React from 'react'
import '../../App.css'

export default function Modal({
  id = 'bgmodal',
  onClose = () => {},
  children
}) {
  const handleOutSideClick = e => {
    if (e.target.id === id) onClose()
  }

  return (
    <div id={id} className="modal" onClick={handleOutSideClick}>
      <div className="containermodal">
        <button className="closemodal" onClick={onClose}>
          Close
        </button>
        <div className="contentmodal">{children}</div>
      </div>
    </div>
  )
}
