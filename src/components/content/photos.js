import React, { Component } from 'react'
import { Draggable } from 'react-beautiful-dnd';
import './photos.scss';

const img1 = require('../../images/img-1.jpeg');
const img2 = require('../../images/img-2.jpeg');
const img3 = require('../../images/img-3.jpeg');
const img4 = require('../../images/img-4.jpeg');
const img5 = require('../../images/img-5.jpeg');
const img6 = require('../../images/img-6.jpeg');




export default class Photos extends Component {
    constructor(props){
        super(props);

    }

   render(){
      const allPhotos = [
          {id:'1', url:`${img1}`},
          {id:'2', url:`${img2}`},
          {id:'3', url:`${img3}`},
          {id:'4', url:`${img4}`},
          {id:'5', url:`${img5}`},
          {id:'6', url:`${img6}`}
          
      ]
       return(
           <React.Fragment>
               <div>
                   <h1 className="heading">Select The Photos</h1>
                   {
          allPhotos.map((image,index)=>{
            //  console.log('images >>', image.id)
            return (
              <Draggable draggableId={image.id.toString()}
               index={index}
               key={index}
               >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className='draggableThumb'
                  >
                    
                    <img src={image.url} />
                     </div>
                )}
              </Draggable>
            )
          })
        }
               </div>
           </React.Fragment>
       )
   } 
}