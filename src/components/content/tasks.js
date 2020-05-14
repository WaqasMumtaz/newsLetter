import React, { Component } from 'react';
import styled from 'styled-components';

import { Draggable } from 'react-beautiful-dnd';


const Container = styled.div`
border-radius:3px;
padding:3px;
margin-bottom:8px;
display:flex;
flex-direction:row;
flex-wrap: wrap
`;
const Title = styled.h1`
`;
const TasksList = styled.div`
`;

export default class Tasks extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided,snapshot) => (
                    <Container
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className='draggableThumb'
                    >
                        {/* {console.log('Props >>', this.props)} */}
                        {/* {this.props.task.url} */}
                        <img src={this.props.task.url} />
                    </Container>
                )}

            </Draggable>

        )
    }
}

