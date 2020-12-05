import React,{Component} from 'react';
import data from './data.json'
import imga from './imga.png'
import './bootstrap/css/bootstrap.min.css';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import resume from './Resume.js'
class Main extends Component{

render(){
	return(
		   <BrowserRouter>
		     <Route exact path="/" component={Main1}/>
		      <Route exact path="/resume" component={resume}/>


		     </BrowserRouter>

		)
}
}
function Main1(){
           return(  <div className="row">
		   <div className="card col-md-4 offset-4 mt-4 " 
		   style={{width:"18rem",textAlign:"center"}}>
		   <img src={imga} className="card-img-top"/>
		   <h2>{data.name}</h2>
		   <h4>{data.email}</h4>
		   <Link to="/resume" className="btn btn-primary">Click</Link>
		   </div>
		   </div>)
}
function About(){
	return(
	<div>
	<h1>about class </h1>
	</div>

	)
}
function Help(){
	return(
	<div>
	<h1>Help</h1>
	</div>

	)
}



export default Main;