import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions';
import './UserData.css';
import ToolTip from './ToolTip';
import Drawer from './Drawer';

const UserData = React.memo(() => {
    const [showClass, setShowClass] = useState(0);
    const [selectedSection, setSelectedSection] = useState(0);
    const [showTooltip, setUserToolTip] = useState(0);
    const [showDrawer, setDrawer] = useState(null);
    const dispatch = useDispatch();
    const { userData } = useSelector(state => state.user);
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);
    return (
        <div className="data">
            {userData && Object.keys(userData).map((item, i) => {
                const dataItem = userData[item];
                return (
                    <div key={i} className="display-flex parentClass">
                        <div className="classes" onClick={() => setShowClass(item)}>{`Class ${item}`}</div>
                        {showClass === item && Object.keys(dataItem).map((itemData, index) => {
                            return (
                                <div key={index} className="sectionWrapper">
                                    <div onClick={() => setSelectedSection(itemData)}>{`Section ${itemData}`}</div>
                                    {selectedSection === itemData && <div>
                                        {dataItem[itemData].map((userName, userIndex) => {
                                            return (
                                                <div key={userIndex} className="pos-rel display-ib studentWrapper">
                                                    <div onClick={() => setDrawer(userName)} onMouseOver={() => setUserToolTip(userName)}>{userName.name}</div>
                                                    {showTooltip.rollNumber === userName.rollNumber && <ToolTip userName={userName} />}
                                                </div>
                                            );
                                        })}
                                </div>}
                            </div>
                            );
                        })}
                        {showDrawer && <Drawer userName={showDrawer} onClose={() => setDrawer(null)}/>}
                    </div>
                );
            })}
        </div>
    );
});

export default UserData;