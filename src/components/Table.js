import React, { Component } from 'react';
import TableBody from './TableBody';

class Table extends Component {
    render() {
        return (
            <div>
                <table border='2.5' cellpadding="5" bgcolor="7F8C8D" align="center" cellspacing="10">
                    <TableBody />
                </table>
            </div>

        )

    }
}

export default Table;