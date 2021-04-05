import React, { Component } from 'react'
import './FullCss.css';
import ListEmployee from './ListEmployee';
import CreateEmployee from './CreateEmployee';
import ViewEmployee from './ViewEmployee';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';


class FirstPage extends Component {
    render() {
        return (
            <div>
                <Router>
              
              <div className="container">
                  <Switch> 
                        <Route path = "/" exact component = {ListEmployee}></Route>
                        <Route path = "/employees" component = {ListEmployee}></Route>
                        <Route path = "/add-employee/:id" component = {CreateEmployee}></Route>
                        <Route path = "/view-employee/:id" component = {ViewEmployee}></Route>
                        {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                  </Switch>
               </div>              
      </Router>
            </div>

        )

    }
}


export default FirstPage;
