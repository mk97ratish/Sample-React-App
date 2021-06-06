import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: "Product", users: [] }
        console.log(this.props);
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((result) => { this.setState({ users: result.data }) }).catch((err) => { console.log(err) })
    }
    addingPerson=(e)=>{
      this.props.addPerson(e.target.value);
    }

    render() {
      return (
          <React.Fragment>
              <div className="container">
                <h4>Hi! {this.props.match.params.uname}</h4>
                <input type="text" onClick={this.addingPerson}></input>
                  <div className="row">
                      {this.state.users.map((user) => {
                          return (
                              <div className="col-md-4">
                                  <div className="card">
                                      <div className="card-body">
                                          <h5>{user.username}</h5>
                                          <h6>{user.email}</h6>
                                          <p>{user.street}</p>
                                          <p>{user.phone}</p>
                                      </div>
                                  </div>
                              </div>)
                      })}
                  </div>
              </div>
          </React.Fragment>
      )
  }
}

const dispatchFn = (dispatch) =>{
  return {
    addPerson : (data)=> {return dispatch ({type : 'ADD_PERSON', data})},
   // removePerson : (data)=> {return dispatch ({type : 'ADD_PERSON', data})}
  }
}



export default connect(null,dispatchFn)(Product);