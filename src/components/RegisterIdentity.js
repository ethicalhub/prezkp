import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';

const RegisterIdentity = () => {

    
    const demoValue = '["65d3598fcc88a6d06224644de610a343f60013d4cb0d368e4b7a15129e93e406","9467092f1028637c212c0eb2c8800d83b605fab59b001cf14485b322e19565","50cc2c2d6d18d2acd28d233ececc6ed00babe2f8f5b5b621f3d3725012f38e"]'
    localStorage.setItem('secretHasH', demoValue)

    const [value, setValue] = React.useState(demoValue);

    const handleChange = (event) => {
      setValue(event.target.value);
    };

    return (
        <>
        <h1 className="mainHeading"> Title <span style={{color: '#FFDFBD'}}> goes here.</span> </h1>
        <div className="main">
            
            <div className="main-card">
                 <p className="description">Using zero-knowledge proofs, Panther allows you to broadcast an arbitary string without revealing your identity, but only the fact that you are part of the set of registered identities. You may only broadcast once per external nullifier.</p>
            </div>

            <div className="data-card">
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

                <Button variant="contained">Register</Button>

            </div>

        
        </div>
        </>
    )
}

export default RegisterIdentity
