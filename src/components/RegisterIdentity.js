import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const RegisterIdentity = () => {
    
    const demoValue = '["65d3598fcc88a6d06224644de610a343f60013d4cb0d368e4b7a15129e93e406","9467092f1028637c212c0eb2c8800d83b605fab59b001cf14485b322e19565","50cc2c2d6d18d2acd28d233ececc6ed00babe2f8f5b5b621f3d3725012f38e"]'
    localStorage.setItem('secretHashKey','["65d3598fcc88a6d06224644de610a343f60013d4cb0d368e4b7a15129e93e406","9467092f1028637c212c0eb2c8800d83b605fab59b001cf14485b322e19565","50cc2c2d6d18d2acd28d233ececc6ed00babe2f8f5b5b621f3d3725012f38e"]' )
    const [value, setValue] = React.useState(demoValue);

    const handleChange = (event) => {
      setValue(event.target.value);
      console.log(event.target.value)
    };

    return (
        <div className="main">

            <p className="description">Using zero-knowledge proofs, Panther Protocol allows you to broadcast an arbitary string without revealing your identity, but only the fact that you are part of the set of registered identities. You may only broadcast once per external nullifier. To broadcast more than once, you must either select (or add) a new external nullifier, or register a new identity. In real-world use, a Panther Protocol client should use a relayer to pay the gas on behalf of the signaller to further preserve their anonymity.
            </p>

            <div className="mainTitle"> Register your identity </div>

            <div  className="description" >Your identity (saved in localStorage): </div>

            <div style={{margin:'1rem 0 0.8rem 0'}}>
                    <TextField
                    id="outlined-multiline-flexible"
                    multiline
                    minRows={3}
                    maxRows={6}
                    fullWidth
                    value={value}
                    onChange={handleChange}
                    />
  </div>

  <Button variant="contained"> Register </Button>
        </div>
    )
}

export default RegisterIdentity
