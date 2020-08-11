import React from 'react';
import './ToolTip.css';

const ToolTip = ({userName}) => {
    const { name, age, gender, sports } = userName;
    return (
        <div className="tooltip">
            <div>Name: {name}</div>
            <div>Age: {age}</div>
            <div>Gender: {gender}</div>
            <div>Sports: {sports.length > 0 && sports.map((item, index) => {
                return (<span className="mr-5" key={index}>{item}</span>);
            })}</div>
        </div>
    )
}
export default ToolTip;
