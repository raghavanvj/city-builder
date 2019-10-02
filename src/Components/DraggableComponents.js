import React from 'react';
import roadHR from '../assets/images/road_horizontal.jpg';
import roadVR from '../assets/images/road_vertical.jpg';
import home from '../assets/images/home.jpeg';

const DraggableComponent = (props) => {
    return ( 
        <React.Fragment>
            <img src={roadHR} onDrag={event => props.onDrag(event, 'hr')} alt="horizonatal road" ></img>
            <img src={roadVR} onDrag={event => props.onDrag(event, 'vr')} alt="vertical road" ></img>
            <img src={home} onDrag={event => props.onDrag(event, 'home')} alt="home"></img>
        </React.Fragment>
     );
}
 
export default DraggableComponent;