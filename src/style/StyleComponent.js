import React from 'react'
import './Style.css';
import styles from './Style.module.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function StyleComponent() {
    // const objectStyle = {
    //     color: '#080865',
    //     fontFamily: 'fantasy',
    //     backgroundColor: '#57cd57',
    //     padding: '15px',
    //     margin: '15px',
    //     border: '5px dashed'
    // }
    return (
        <div>
            <h1 style={{ color: 'blue', backgroundColor: 'green' }}>This is Style</h1>
            {/* <div style={objectStyle}>Style form object</div> */}
            <div className={'text'}>Style</div>
            <h3 className={styles.text}>This is Module CSS</h3>
            <h2 className='text-muted'>Bootstrap Applied!</h2>
        </div>
    )
}