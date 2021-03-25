import React from "react";
import ReactDOM from "react-dom";
import { Game, newGame } from "./images";

class App extends React.Component{
  constructor(props){
      super(props);
      this.state = {...this.state,
        image: newGame()
    }
  }

  handleClick = (correct) => {
    if(correct){
        alert("Tebrikler kazandınız");
        this.setState({
            quiz:newGame()
        });
    }else{
        alert("Kaybettiniz");
    }

   }

  renderAnswerTag(correct) {
    return <div className="main-content" onClick={()=>this.handleClick(correct)}></div>
  }

  render() {
    const img = this.state.image;
    return(
        <>
        <div>
            
        </div>
    </>)
}


}

ReactDOM.render(<App/>,document.getElementById("root"));