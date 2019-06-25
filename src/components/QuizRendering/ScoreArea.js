import React,{Component} from 'react';
import TotalCorrect from './TotalCorrect';
import TotalIncorrect from './TotalIncorrect';

class ScoreArea  extends Component  {
  render (){
    return(

    <ul className="list-inline pt-2">
      <li className="list-inline-item"><TotalCorrect correct={this.props.correct} />
      </li>
      <li className="list-inline-item"><TotalIncorrect incorrect={this.props.incorrect} /></li>
    </ul>
  )
}
    
}

export default ScoreArea;
