import React from 'react';
import propTypes from 'prop-types';

import Input from './components/Input'

const WonderForm = props => {

    return (
       <div className="wonder-form">
            <p>Username:</p>
            <Input type="text" id="username" onChange={props.onInputChange}></Input>
            <p>Age:</p>
            <Input type="number" id="age" onChange={props.onInputChange}></Input>
            <p>Surname:</p>
            <Input type="text" id="surname" onChange={props.onInputChange}></Input>
       </div> 
    )
}

export default WonderForm;

WonderForm.propTypes = {
    onInputChange: propTypes.func.isRequired,
}