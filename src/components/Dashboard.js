
import React from 'react';
import './FullCss.css';
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom'
import ListCustomer from './ListCustomer';
import CreateCustomer from './CreateCustomer';
import ViewCustomer from './ViewCustomer';
import three from './images/three.gif'
function Dashboard() {
 
  
 
  return (
  
      
      <Router>
            <div
        class="bg_image"
        style={{
          backgroundImage: 'url('+three+')',
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5"
        }}
      >

              
                <div className="container">


                <nav>
<ul>
<li><Link to={'/'} > Click Here </Link></li>

</ul>
</nav>

                    <Switch> 
                          <Route path = "/" exact component = {ListCustomer}></Route>
                          <Route path = "/customers" component = {ListCustomer}></Route>
                          <Route path = "/add-customer/:id" component = {CreateCustomer}></Route>
                          <Route path = "/view-customer/:id" component = {ViewCustomer}></Route>
                          {/* <Route path = "/update-customer/:id" component = {UpdateCustomerComponent}></Route> */}
                    </Switch>
                    
                 </div>  
                 </div>            
        </Router>

        
    
  );
}
 
export default Dashboard;