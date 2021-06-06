import React, { useState, useEffect } from "react";
import {connect} from 'react-redux';

function Cart(props) {
    const [name, setName] = useState('Jack');
    const [place, setPlace] = useState('Bangalore');
    useEffect(() => {
        console.log('In use effect')
    }, [name])
    return (
        <React.Fragment>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h3>From Cart Component</h3>
                        <h2>The state from store is {props.addPerson}</h2>
                        <h4>Your name is {name}</h4>
                        <h4>My place is {place}</h4>
                        <button className="btn btn-warning" onClick={() => { setName(name === 'Ratish' ? 'Mishra' : 'Ratish') }}>Change Name</button>
                        <button className="btn btn-danger" onClick={() => { setPlace(place ==='Kolkata'? 'Bangalore' : 'Kolkata') }}>Change Place</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const subscriptionFn = (state)=>{
    return{
        addPerson : state.addPerson
    }
}

export default connect(subscriptionFn) (Cart);