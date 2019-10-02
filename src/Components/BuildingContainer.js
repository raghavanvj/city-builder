import React, { Component } from 'react';
import BlockComponent from './BlockComponent';
import DraggableCompoments from './DraggableComponents';
import roadHR from '../assets/images/road_horizontal.jpg';
import roadVR from '../assets/images/road_vertical.jpg';
import home from '../assets/images/home.jpeg';
import '../assets/css/building.css';

const imgTplObj = {
    'hr': `<img src=${roadHR} alt="horizonatal road" class='blk-img'></img>`,
    'vr': `<img src=${roadVR} alt="vertical road" class='blk-img'></img>`,
    'home': `<img src=${home} alt="home" class='blk-img'></img>`
}



class BuildingContainer extends Component {
    constructor(props) {
        super(props);
        this.blockSize = 900;
        this.state = {  }
    }

    onDrag = (evt, imgKey) => {
        console.log(imgKey);
        this.key = imgKey;
    }

    allowDrop = (evt) => {
        evt.preventDefault();
    }
      
      
    onDrop = (evt) => {
        evt.preventDefault();
        var data = this.key;
        evt.currentTarget.innerHTML= '';
        evt.currentTarget.innerHTML= imgTplObj[data] ? imgTplObj[data] : '';
        this.key = null;
    }

   
    render() { 

        const blockCon = () => {

            let block = [];

            for(let i=1; i<= this.blockSize; i++) {
                block.push(<BlockComponent blKey={`blk-${i}`} key={i} onDrop={this.onDrop} allowDrop={this.allowDrop}/>)
            }
            return block
        }
        return (
            <section className='app-sec'>
                <article className='building-con'>
                    {blockCon()}
                </article>
                <article className='drag-con'>
                    <DraggableCompoments onDrag={this.onDrag} />
                </article>

            </section>
          );
    }
}
 
export default BuildingContainer;