import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import initialData from './initial-data';
import { DragDropContext } from 'react-beautiful-dnd';
import Columns from './columns';


import './droppable.scss';

export default class DroppableSection extends Component {
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
      }
    


    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div
                    className='droppableSection'
                >
                    <div className='canvasSection'>
                        <div className='drawingCanvas'>
                            <h1>Hello To The world</h1>
                        </div>

                    </div>
                </div>
            </DragDropContext>
        )

    }

}

