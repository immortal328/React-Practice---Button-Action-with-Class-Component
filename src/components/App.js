import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
	super(props);
	this.state ={text:false};
	this.txt ="Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy";
    };

    render() {
    	return(
    		<div id="main">
			<button id="click"
			onClick={function(){
				this.state ={text:!text}
			}}></button>
			{this.state.text? (<h1 id="para">{this.txt}</h1>):null}
    		</div>
    	);
    }
}


export default App;

