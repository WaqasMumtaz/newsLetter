import React, { Component } from 'react';
import './closedLeftMenu.scss';
 
class ClosedLeftMenu extends Component {
    constructor(props) {
        super(props);
        this.state ={
            selectMenuItem: ''
        }
    }
    selectMenuItem = (option) => {
        this.setState({
            selectMenuItem: option
        })
        this.props.selectMenuOption(option);
    }
    render() {
        return (
            <div className="closedLeftMenu">
                <div className="menuButton" onClick={() => this.selectMenuItem('file')}>
                    <span className="spanText">File</span>
                </div>
                <div className="menuButton" onClick={() => this.selectMenuItem('photos')}>
                    <span className="spanText">Photos</span>
                </div>
                <div className="menuButton" onClick={() => this.selectMenuItem('text')}>
                    <span className="spanText">Text</span>
                </div>
                <div className="menuButton menuButtonSelected"  onClick={() => this.selectMenuItem('background')}>
                    <span className="spanText">Background</span>
                </div>
                <div className="menuButton" onClick={() => this.selectMenuItem('upload')}>
                    <span className="spanText">Upload</span>
                </div>
            </div>
        )
    }

}
export default ClosedLeftMenu;