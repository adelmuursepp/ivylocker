import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import Products from './Products';
import Services from './Services';
import Solutions from './Solutions';
import ContactUs from './ContactUs';
import HomeThree from './HomeThree';
import Login from './Login';
import SignUp from './SignUp';
import PasswordForget from './PasswordForget';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Root extends React.Component {
  render() {
  	return(
  		<BrowserRouter basename={'/'} >
		  	<Switch>
			  <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomeThree}/>
			  <Route path={`${process.env.PUBLIC_URL}/about`} component={About}/> 
			  <Route path={`${process.env.PUBLIC_URL}/products`} component={Products}/> 
			  <Route path={`${process.env.PUBLIC_URL}/services`} component={Services}/> 
			  <Route path={`${process.env.PUBLIC_URL}/solutions`} component={Solutions}/> 
			  <Route path={`${process.env.PUBLIC_URL}/contact`} component={ContactUs}/> 
			  <Route path={`${process.env.PUBLIC_URL}/login`} component={Login}/>    
			  <Route path={`${process.env.PUBLIC_URL}/password-forget`} component={PasswordForget}/>  
			  <Route path={`${process.env.PUBLIC_URL}/sign-up`} component={SignUp}/>  
			</Switch>
		</BrowserRouter>
  	);
  }
 }

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
