import React,{Component} from 'react';


class Student extends Component{
	constructor(){
		super();
		this.state={
	     users:[
	     { name:"charan", designation:"developer of develop"},
	      { name:"cherry" ,designation:"developer of develop"},
           { name:"malli" ,designation:"developer of develop"}



	     ]}
	 }
	      changeData=()=>{
	     	this.setState(
	     		{
	     users:[
	     { name:"charan", designation:"developer of develop1"},
	      { name:"cherry" ,designation:"developer of develop1"},
           { name:"malli" ,designation:"developer of develop1"}



	     ]})

	     	
	}
	em2={name:"kiran"}
	render(){
		//setTimeout(()=> this.setState({name:"N.Koushik"}),5000)


		return(

			<div>
			<h1>Emplayee Name is:{this.state.users[0].name} designation:{this.state.users[0].designation}</h1>
				<h2>Emplayee Name is:{this.em2.name}</h2>
				<button onClick={this.changeData}>update</button>
			</div>
			)
	}
}
export default Student;