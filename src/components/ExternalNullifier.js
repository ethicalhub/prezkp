import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ExternalNullifier = () => {
    return (

            <div className="data-card">
                <div className="mainTitle" > Select an external nullifier </div>
                <p className="description " style={{width:'70%'}}>Add a new external nullifier (the last 29 bytes of the Keccak256 hash of what you type will be used): </p>
                <TextField style={{margin:'1rem 0 0.8rem 0'}} id="outlined-basic" fullWidth variant="outlined" />
                <Button variant="contained">Hash Plaintext</Button>
                {/* <p className="description my-15" >You must first register to broadcast a signal.</p> */}
           </div>

    )
}

export default ExternalNullifier
