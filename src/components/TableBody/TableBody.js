import React from 'react';



function TableBody(props) {
    return (
        <tbody>
            <tr>
                <td style={{border:'1px solid black'}}>{props.student.name}</td>
                <td style={{border:'1px solid black'}}>{props.student.age}</td>
                <td style={{border:'1px solid black'}}>{props.student.sex}</td>
                <td style={{border:'1px solid black'}}>{props.student.address}</td>
            </tr>
        </tbody>
    );
}

export default TableBody;
