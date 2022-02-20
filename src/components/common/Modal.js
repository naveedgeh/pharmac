import React from 'react'
import ReactDOM from 'react-dom';
export default function Modal(props) { 
    return ReactDOM.createPortal(
      <div
      style={{
        position: 'absolute',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
      }} onClick={props.onclose}>
        <div
          style={{
            padding: 20,
            background: '#fff',
            borderRadius: '2px',
            display: 'inline-block',
            minHeight: '400px',
            margin: '1rem',
            position: 'relative',
            minWidth: '600px',
            boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
            justifySelf: 'center',
          }}>
            {props.children}
            <hr/>
            <button onClick={props.onClose}>Close</button>
            </div>
            </div>
         ,
             document.getElementById('portal-root')
    )

    
}