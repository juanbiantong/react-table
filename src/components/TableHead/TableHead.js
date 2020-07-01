import React from 'react';

function TableHead() {
    return (
        <thead>
            <tr>
                <th style={{border:'1px solid black'}}>Nama</th>
                <th style={{border:'1px solid black'}}>Umur</th>
                <th style={{border:'1px solid black'}}>Jenis Kelamin</th>
                <th style={{border:'1px solid black'}}> Alamat</th>
            </tr>
        </thead>
    );
}

export default TableHead;
