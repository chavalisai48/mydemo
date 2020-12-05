import Andhra from './Andhra.js';
import Kannada from './Kannada.js';

function Union(){
	return (<div>
	  <h1> Union bank </h1>
	  <Andhra bankname="andhrabank" location="vijaya"/>
	  <Kannada bankname="kannadabank" location="kadapa"/>
	  </div>)
}

export default Union;