import React, { Component } from 'react'
import './content.css';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Tasks from './tasks';



const Container = styled.div`
margin:8px;
border:1px solid lightgray;
border-radius:3px;
width:100%
`;
const Title = styled.h1`
padding:8px;
color:white;

`;
const TasksList = styled.div`
padding:8px;
`;

export default class Columns extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Container>
                {console.log('Props >>', this.props)}
                <Title>
                    {this.props.column.title}
                </Title>
                <Droppable droppableId={this.props.column.id}>
                    {provided => (
                        <TasksList
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {this.props.tasks.map((item,i) => <Tasks key={item.id} task={item} index={i}/>)}
                            {provided.placeholder}
                        </TasksList>
                    )}

                </Droppable>

            </Container>
        )
    }
}



