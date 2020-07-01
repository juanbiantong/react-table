import React, { Component } from 'react';

import TableHead from '../TableHead/TableHead';
import TableBody from '../TableBody/TableBody';

class Table extends Component {
    render() {
        let insertData = this.props.students.map((students, index) => (
            <TableBody key={index} student ={students}/>
           
        ));
        return (
            <div >
                <table >
                    <TableHead />
                    {insertData}
                </table>
            </div>
        );
    }
}

export default Table;
