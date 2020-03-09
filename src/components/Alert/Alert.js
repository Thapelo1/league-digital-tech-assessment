import React from 'react';
import './Alert.css'

const Alert = props => {
    if(props.status == true){
        return (
                <div class="alert alert-dismissible alert-success animated slideInDown">
                    <button type="button" class="close" data-dismiss="alert" onClick={props.closeAlert}>&times;</button>
                    <strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message</a>.
                </div>
        )
    } 

    else {
        return false;
    }
   
}

export default Alert;