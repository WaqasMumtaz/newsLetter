// SlideContent
import React, { Component } from 'react'
import './slideContent.scss';

export default class SlideContent extends Component {
    render() {
        const {
            content
        } = this.props;
        console.log('slide content >>', content);
        return (
            <React.Fragment> { content } </React.Fragment>
        )
    }
}