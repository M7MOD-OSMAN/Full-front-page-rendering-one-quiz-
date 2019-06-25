import React from 'react';

const Answer = (props) => {
    return (
            
        <li className="answerOption">
            <button id="horizontal-list " onClick={() => props.handleClick(props.choice)}>
                {props.answer} </button>
         </li>
            
    );
}

export default Answer;