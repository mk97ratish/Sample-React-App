/*
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './components/Product';
import Form from './components/Form';
import Cart from './components/Cart';
import Header from './components/Header';

class App extends React.Component {
  constructor() {
    super();
    this.state = { apptitle: 'App', users: [] }
  }
  render() {
    return (
      <React.Fragment>
        <Header/>
      </React.Fragment>
    )
  }
}
export default App;
*/

import React from 'react';
import Navbar from './components/Navbar';
import CourseList from './components/CourseList';
function App(props) {
  return (
    <div className="App">
        <Navbar />
        <CourseList />
    </div>
  );
}
export default App;

