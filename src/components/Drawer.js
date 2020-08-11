import React from 'react';
import './Drawer.css';
function Drawer({ userName, onClose }) {
    if(!userName) return null;
    const { name, age, gender, sports } = userName; //
    return (
        <div className="drawer">
            <div className="closebtn" onClick={onClose}>X</div>
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Gender: {gender}</div>
            <div>Sports: {sports.length > 0 && sports.map((item, index) => {
                return (<span className="mr-5" key={index}>{item}</span>);
            })}</div>
        </div>
    )
}
export default Drawer;
