import React from 'react';
import './Form.css'

class Form extends React.Component {

    constructor(props){


        super(props);

        this.initialState = {

        }

        this.state = {
            name: '',
            email: '',
            contact: '',
            days: ''
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeContact = this.handleChangeContact.bind(this);
        this.handleChangeDays = this.handleChangeDays.bind(this);
        this.submitForm = this.submitForm.bind(this);

        
    }

    handleChangeName(e){
        this.setState({
            name: e.target.value
        })
    }

    handleChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    handleChangeContact(e){
        this.setState({
            contact: e.target.value
        })
    }

    handleChangeDays(e){
        this.setState({
            days: e.target.value
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState({
            name: '',
            email: '',
            contact: '',
            days:''
        })

    }
    

    render(){
       
        const { name, email, contact, days } = this.state;

        return (
            <form>
                <div class="form-group">
                    <label for="Name">Full name:</label>
                    <input type="text" class="form-control" id="txtName" placeholder="" value={name} onChange={this.handleChangeName} required/>
                     <small id="textHelp" class="form-text text-muted">{name}</small>
                </div>
                 <div class="form-group">
                    <label for="Name">Email address:</label>
                    <input type="text" class="form-control" id="txtName" placeholder="" value={email} onChange={this.handleChangeEmail} required/>
                    <small id="textHelp" class="form-text text-muted">{email}</small>
                </div>
                <div class="form-group">
                    <label for="Name">Contact details:</label>
                    <input type="text" class="form-control" id="txtName" placeholder="" value={contact} onChange={this.handleChangeContact} required/>
                    <small id="textHelp" class="form-text text-muted">{contact}</small>
                </div>
                <div class="form-group">
                    <label for="Name">Days</label>
                    <input type="text" class="form-control" id="txtName" placeholder="" value={days} onChange={this.handleChangeDays} required/>
                    <small id="textHelp" class="form-text text-muted">{days}</small>
                </div>
                <button type="button" class="btn btn-success" onClick={this.submitForm}>Submit</button>
            </form>
        )
    }
    
}

export default Form;