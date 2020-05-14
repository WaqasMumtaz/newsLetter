// BackgroundImages
import React, { Component } from 'react';
import initialData from './initial-data';
import { DragDropContext } from 'react-beautiful-dnd';
import Columns from './columns';



export default class BackgroundImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateData: initialData
    }
  }


  onDragEnd = (result) => {
    // the only one that is required
    const { destination, source, reason } = result;
    console.log('source >>', source);
    console.log('Destination >>', destination);
    //  console.log('Droppable item ID>>',destination.droppableId === source.droppableId);
    // console.log('Index >>',destination.index === source.index);
    // Not a thing to do...
    if (!destination || reason === 'CANCEL') {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }
     const columns =  this.state.stateData.columns[source.droppableId];
    //  console.log('Columns >>', columns);
     const newTasks = Array.from(columns.taskIds);
    //  console.log('NewTasks >>', newTasks);
     newTasks.splice(source.index , 1);
     newTasks.splice(destination.index , 0 , result.draggableId);
    //  console.log('NewTasks Second >>', newTasks);

    //  add new column 
     const newColumn = {...columns, taskIds:newTasks};
    //  console.log('This is new column >>', newColumn);
     
     const newState = {...this.state.stateData , columns:{
       ...this.state.stateData.columns,
       [newColumn.id]:newColumn
     }}
    //  console.log('New State >>', newState);

     this.setState({stateData:newState})

  }



  render () {
    // const imagesArray = [
    //   { id:'0', url: 'https://www.fillmurray.com/640/360' },
    //   { id:'1', url: 'https://dummyimage.com/640x360/fff/aaa' },
    //   { id:'2', url: 'https://loremflickr.com/640/360' },
    //   { id:'3', url: 'https://placekitten.com/408/287' },
    //   { id:'4', url: 'https://www.fillmurray.com/640/360' },
    //   { id:'5', url: 'https://www.placecage.com/640/360' },
    //   { id:'6', url: 'http://placeimg.com/640/360/any' },
    //   { id:'7', url: 'https://placebear.com/640/360' },
    //   { id:'8', url: 'https://imgplaceholder.com/640x360' },
    //   { id:'9', url: 'https://placezombie.com/640x360' },
    //   { id:'10', url: 'https://www.fillmurray.com/640/360' },
    //   { id:'11', url: 'https://dummyimage.com/640x360/fff/aaa' },
    //   { id:'12', url: 'https://loremflickr.com/640/360' },
    //   { id:'13', url: 'https://placekitten.com/408/287' },
    //   { id:'14', url: 'https://www.fillmurray.com/640/360' },
    //   { id:'15', url: 'https://www.placecage.com/640/360' },
    //   { id:'16', url: 'http://placeimg.com/640/360/any' }
    // ]
    return (
      // <DragDropContext onDragEnd={this.onDragEnd}>
       <div className='slideContent'>
          {/* <NewMain/> */}
          {/* <h1>Drag , Drop Project</h1>
          <Main/> */}
           {
            this.state.stateData.columnOrder.map((columId) => {
              console.log('map colm id >>', columId); 
              const column = this.state.stateData.columns[columId];
              console.log('column >>', column);
              const tasks = column.taskIds.map(taskId => this.state.stateData.tasks[taskId])
              console.log('Tasks >>', tasks)
              return <Columns key={column.id} column={column} tasks={tasks} />
            })
          }
        </div>
      // </DragDropContext>
      // <div className='slideContent'>
      //   {
      //     imagesArray.map((image,index)=>{
      //       //  console.log('images >>', image.id)
      //       return (
      //         // <Draggable draggableId={image.id.toString()}
      //         //  index={index}
      //         //  key={index}
      //         //  >
      //         //   {(provided, snapshot) => (
      //         //     <div
      //         //       ref={provided.innerRef}
      //         //       {...provided.draggableProps}
      //         //       {...provided.dragHandleProps}
      //         //       className='draggableThumb'
      //         //     >
                    
      //               <img src={image.url} />
      //         //       </div>
      //         //   )}
      //         // </Draggable>
      //       )
      //     })
      //   }
        
      // </div>
    )
  }
}
