import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListStudentComponent from './components/ListStudentComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateStudentComponent from './components/CreateStudentComponent';
import ViewStudentComponent from './components/ViewStudentComponent';
function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch>
                          <Route path = "/" exact component = {ListStudentComponent}></Route>
                          <Route path = "/student" component = {ListStudentComponent}></Route>
                          <Route path = "/add-student/:sid" component = {CreateStudentComponent}></Route>
                          <Route path = "/view-student/:sid" component = {ViewStudentComponent}></Route>
                          {/* <Route path = "/update-student/:sid" component = {UpdateStudentComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
   
  );
}
export default App;