import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/custom-bootstrap/bootstrap.min.css'
import * as serviceWorker from './serviceWorker';
import './assets/animate.css'
import NavBar from './components/Navigation/Nav'
import Table from './components/Table/Table'
import Alert from './components/Alert/Alert'
import Form from './components/Form/Form'

class App extends React.Component {

    constructor(props){
        super(props)

        // State is managed here
        this.state = {
            alert: false,
            users: []
        }

        //Functions binded in the constructor
        this.closeAlert = this.closeAlert.bind(this);
        this.removerUser = this.removerUser.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // Defined functions
    closeAlert(){
        this.setState({
            alert: false
        })
    }

    removerUser = index => {
        this.setState({
          users: this.state.users.filter((user, i) => {
            return i !== index;
          }),
        })
      }

      handleSubmit = user => {
        this.setState({ 
            users: [...this.state.users, user],
            alert: true

        })
      }
    

    render(){

        return (
            <div className="App">
                <NavBar/>
                <Alert status={this.state.alert} closeAlert={this.closeAlert}/>
                <div className="container">
                    <div className="row pt-5">
                         <div className="col-6">
                            <Form handleSubmit={this.handleSubmit}/>
                         </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Table userData={this.state.users} removeUser={this.removerUser}/>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}



ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
