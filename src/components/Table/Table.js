import React from 'react';
import './Table.css';
import TableHeader from './TableHeader'
import TableBody from './TableBody'


class Table extends React.Component {
    render() {
      return (
        <table className="table table-bordered">
            <TableHeader/>
            <TableBody userData={this.props.userData} removeUser={this.props.removeUser}/>
        </table> 
      )
    }
  }
  
  export default Table;