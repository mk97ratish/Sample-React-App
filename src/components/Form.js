import React from 'react';
class Form extends React.Component {
    constructor(props) {
        super();
        this.state = { username: '', location: '', message: '' }
    }
    setInpVal = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        this.setState({ [field]: value })
    }
    handleLogin = (e) => {
        e.preventDefault();
        if (this.state.username === "" || this.state.location === "") {
            this.setState({ message: 'Both fields are required' })
        } else {
            this.setState({ message: '' })
            this.props.history.replace('product/'+this.state.username)
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <h4>Login Form</h4>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" className="form-control" name="username" placeholder="Enter your username" onChange={this.setInpVal} value={this.state.username} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="location">Location</label>
                                    <input type="text" className="form-control" name="location" placeholder="Enter your location" value={this.state.location} onChange={this.setInpVal} />
             
</div>
                                <button type="submit" className="btn btn-info" onClick={this.handleLogin}>Login</button>
                                {this.state.message !== "" && <div className="text-danger">{this.state.message}</div>}
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Form;