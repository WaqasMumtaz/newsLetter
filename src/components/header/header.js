import React from 'react';
import './header.scss';
import menuIcon from '../../images/menu_icon.png';
import { Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSave } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header>
            <img width="60" height="60" className="meniIcon" src={menuIcon} alt="Menu Icon" />
            <div className="headerContent">
                <Form.Control type="text" className="newCanvasTitleField" placeholder="Untitled new..." />
                <Button variant="light" className="saveButton" size="sm"><FontAwesomeIcon icon={faSave} /> Save </Button>
            </div>
        </header>
    )
}

export default Header;
