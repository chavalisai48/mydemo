import React,{Component} from 'react';


class Kannada extends Component{
	render(props){ 
   return(<div>
	  <h4>This is {this.props.bankname} which is located in {this.props.location}</h4>
	  </div>);
}
}

export default Kannada;