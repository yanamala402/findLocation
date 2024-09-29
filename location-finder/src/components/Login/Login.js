import { Box, Button, TextField } from "@mui/material";
import '../../css-styling/LoginSideBar.css';
import { useState } from "react";

export default function Login({ setLogin }) {
    const [loginDetails, setLiginStatus] = useState({email: '', password: ''});
    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            className="login"
        >
            <div className="details">
                Dear User please enter your credentials :
            </div>
            <div>
                <TextField
                    error={false}
                    id="outlined-error"
                    label="Enter Your Email"
                    value={loginDetails.email}
                    onChange={(e) => setLiginStatus({...loginDetails, email : e.target.value }) }
                />
            </div>
            <div>
                <TextField
                    errorerror={false}
                    id="outlined-error"
                    label="Enter Your Password"
                    value={loginDetails.password}
                    onChange={(e) => setLiginStatus({...loginDetails, password : e.target.value }) }
                />
            </div>
            <div style={{ textAlign: 'center' }}>
                <Button variant="outlined" onClick={()=> console.log("s0",loginDetails)} >Login</Button>
            </div>
            <div className="details" >
                For register the link for <Button color="secondary" onClick={() => setLogin(false)} >{'signup'}</Button>
            </div>
        </Box>
    )
}