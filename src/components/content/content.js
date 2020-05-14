import React, { Component } from 'react'
import './content.css'
import SlidingPane from './slidingPane'
import ClosedLeftMenu from './closedLeftMenu'
import DrawingCanvas from './drawingCanvas'
import SlideContent from './slideContent'
import BackgroundImages from './backgroundImages'
import { DragDropContext,Droppable } from 'react-beautiful-dnd';
import UploadFile from './uploadFile';
import Photos from './photos';
import imagesArray from './initial-data';
import Column from './columns';
import DroppableSection from './droppableSection';

class Content extends Component {
  state = {
    isModalOpen: false,
    selectedMenuOption: '',
    draggingRowId: null,
    starredProjects: imagesArray

  }

  toggleState = e => {
    this.setState({
      isModalOpen: false
    })
  }
  selectMenuOption = menuItem => {
    console.log('selectMenuOption', menuItem)
    this.setState({
      selectedMenuOption: menuItem,
      isModalOpen: true
    })
  }

  onDragEnd = (result) => {
    // the only one that is required
    const { destination, source, reason } = result;
    console.log('source >>', source);
    console.log('Destination >>', destination);
    //  console.log('Droppable item ID>>',destination.droppableId === source.droppableId);
    // console.log('Index >>',destination.index === source.index);
    // Not a thing to do...
  }


  render() {
    const selectedOptionContent =
      {
        background: <BackgroundImages />,
        file: <UploadFile />,
        photos: <Photos />
      }
      [this.state.selectedMenuOption]
    // console.log('selected content background>>', selectedOptionContent)
     console.log('menu option array >>',[this.state.selectedMenuOption]);
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
      <section className='mainSection'>
          <div className='menuSection'>
            <ClosedLeftMenu selectMenuOption={this.selectMenuOption} />
          </div>
          {this.state.isModalOpen ? (
            <SlidingPane
              id='modal'
              isOpen={this.state.isModalOpen}
              onClose={this.toggleState}
            >
              <SlideContent content={selectedOptionContent} />
            </SlidingPane>
          ):
          null
          }
      </section>
      </DragDropContext>
    )
  }
}

export default Content
