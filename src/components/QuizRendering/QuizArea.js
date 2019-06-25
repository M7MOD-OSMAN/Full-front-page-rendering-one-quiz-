import React from 'react';
import Question from './Question';
import AnswerList from './AnswerList';

const QuizArea = (props) => {
    return(
        <div className="quiz-story">
          
          <Question dataSet={props.dataSet}
                questionTotal={props.questionTotal}
                currentQuestion={props.currentQuestion}
                />

          <AnswerList 
           dataSet={props.dataSet}
           handleClick={props.handleClick} 
           />
        </div>
      );
}

export default QuizArea;