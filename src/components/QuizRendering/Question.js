import React from 'react';

const Question = (props) => {
    return (
         <div >
              <div className="questionCount">
            Question <span> {props.currentQuestion} </span> of <span> {props.questionTotal} </span>
            </div>

        <h1 className='question'>{props.dataSet.question}</h1>

         </div>
       
    );
}

export default Question;