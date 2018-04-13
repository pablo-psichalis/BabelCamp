import React from 'react';
import propTypes from 'prop-types';

import Input from './components/Input';
import Radio from './components/Radio';

const WonderForm = props => {

    return (
        <div className="wonder-form">
            <div className="inputs">
                <p>Username:</p>
                <Input type="text" id="username" onChange={props.onInputChange}></Input>
                <p>Age:</p>
                <Input type="number" id="age" onChange={props.onInputChange}></Input>
                <p>Surname:</p>
                <Input type="text" id="surname" onChange={props.onInputChange}></Input>
            </div>
            <div className="radio-buttons">
                <Radio
                    name="gender"
                    values={['male', 'female', 'attack helicopter']}
                    defaultValue="other"
                    onChange={props.onInputChange}
                />
            </div>
        </div>
    )
}

export default WonderForm;

WonderForm.propTypes = {
    onInputChange: propTypes.func.isRequired,
}