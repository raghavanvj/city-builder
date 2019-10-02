import React from 'react';
const BlockComponent = (props) => {
    return ( 
        <div className='block-div' id={props.blKey} onDrop={(e) => props.onDrop(e)} onDragOver={props.allowDrop}>

        </div>
     );
}
 
export default BlockComponent;