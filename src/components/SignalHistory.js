import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const SignalHistory = () => {

    const createData = (nullifier, signal) => {
        return { nullifier,signal };
      }

    const rows = [
        createData('Nullifier Demo', 'Signal Demo'),
   
    ];
      
    return (

          <div className="data-card">
           <div className="mainTitle" > Signal history </div>
           <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>External nullifier</TableCell>
            <TableCell >Signal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.nullifier}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {row.nullifier}
              </TableCell>
              <TableCell>{row.signal}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    )
}

export default SignalHistory
