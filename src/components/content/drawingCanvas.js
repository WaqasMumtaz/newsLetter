// DrawingCanvas
import React, { Component } from 'react'
import './drawingCanvas.scss'
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';


class DrawingCanvas extends Component {
  render () {
    return (
      <div
        className='droppableSection'
        style={{
          backgroundColor: '#ececec'
        }}
      >
        <div className='drawingCanvas' >
          <h1>Hello DrawingCanvas</h1>
        </div>
      </div>
    )
  }
}

export default DrawingCanvas
