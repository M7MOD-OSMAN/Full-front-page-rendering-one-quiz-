import React,{Component} from 'react';
import dataSet from './Dataset';
import ScoreArea from './QuizRendering/ScoreArea';
import QuizArea from './QuizRendering/QuizArea';

class QuizRendering extends Component {
      
    state = {
      current:0, 
      dataSet:dataSet,
       correct:0,
        incorrect:0
      }
    
  
      handleClick= (choice) => {
        var answerString = parseInt(this.state.dataSet[this.state.current].answer,10);
    
        if (choice === answerString) {
          this.setState({correct: this.state.correct + 1})
        } else {
          this.setState({incorrect: this.state.incorrect + 1})
        }
        
        if (this.state.current === 9) {
          this.setState({current: 0})
          this.setState({incorrect: 0})
          this.setState({correct: 0})
        } else {
             this.setState({current: this.state.current + 1}) 
        }
      }

  render() {
    return(
      <div   >

        <div className="App-header">
          
          <h2>Quiz Assignment :</h2>
        </div>
        
        <QuizArea 
                handleClick={this.handleClick} 
                dataSet={this.state.dataSet[this.state.current]}
                questionTotal={dataSet.length}
                currentQuestion={this.state.current + 1}

                /> 
          <div className='text-center'>
            <ScoreArea 
              correct={this.state.correct}
              incorrect={this.state.incorrect} 
            />
          </div>
        
      </div>
    )
  }
}

export default QuizRendering;