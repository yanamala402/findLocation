import { Box, Button, createTheme, TextField, ThemeProvider } from "@mui/material";
import '../../css-styling/LoginSideBar.css';
import { useEffect, useState } from "react";

export default function Register({setLogin}){
    const [registerDetails, setRegisterDetails] = useState({
        email:'',
        name:'',
        phoneNumber:'',      
        password: ''  
    });
    const [errReg, setErrReg] = useState({
        email:false,
        name:false,
        phoneNumber:false,      
        password: false,
        cnfPhoneNumber: false 
    });
    const [pwdCheck, setPwdCheck] = useState('');
   
    return(
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            className="Register"
        >
            <div className="details" >
                Enter Details : 
            </div>
            <div>
                <TextField
                    error={errReg.name}
                    id="outlined-error"
                    label="Enter Your Name"
                    value={registerDetails.name}
                    onChange={(e) => {
                        setRegisterDetails({...registerDetails,name : e.target.value });
                        if(registerDetails.name === ''){
                            return setErrReg({...errReg,name : true});
                        }
                        setErrReg({...errReg,name : false});                        
                    }}
                />
            </div>
            <div>
                <TextField
                    error={errReg.email}
                    id="outlined-error"
                    label="Enter Your Email"
                    value={registerDetails.email}
                    onChange={(e) => {
                        setRegisterDetails({...registerDetails,email : e.target.value });
                        if(registerDetails.email === ''){
                            return setErrReg({...errReg,email : true});
                        }
                        setErrReg({...errReg,email : false});
                    }}
                />
            </div>
            <div>
            <TextField
                error={errReg.phoneNumber}
                label="Enter a number"
                variant="outlined"
                type="number"
                fullWidth
                value={registerDetails.phoneNumber}
                onChange={(e) => {
                    setRegisterDetails({...registerDetails,phoneNumber : e.target.value });
                    if(registerDetails.phoneNumber === ''){
                        return setErrReg({...errReg,phoneNumber : true});
                    }
                    setErrReg({...errReg,phoneNumber : false});
                }}
            />
            </div>
            <div>
                <TextField
                    error={errReg.password}
                    id="outlined-error"
                    label="Enter Your Password"
                    onChange={(e) => {
                        setPwdCheck(e.target.value);
                        if(registerDetails.password === ''){
                            return setErrReg({...errReg,password : true});
                        }
                        setErrReg({...errReg,phoneNumber : false});
                    } }
                />
            </div>
            <div>
                <TextField
                    error={errReg.cnfPhoneNumber}
                    id="outlined-error"
                    label="Conform Password"
                    value={registerDetails.password}
                    onChange={(e) => {
                        if(e.target.value === pwdCheck){
                            setRegisterDetails({...registerDetails,email : e.target.value });
                        }
                        if(registerDetails.cnfPhoneNumber === ''){
                            return setErrReg({...errReg,cnfPhoneNumber : true});
                        }
                        setErrReg({...errReg,cnfPhoneNumber : false});
                    }}
                />
            </div>
            <div style={{textAlign: 'center'}}>
                <Button variant="outlined" onClick={()=>{
                    setErrReg({...errReg,email : false});
                    if(registerDetails.email === ''){
                        console.log("ihg",registerDetails.email === '')
                        setErrReg({...errReg,email : true});
                    }
                    setErrReg({...errReg,cnfPhoneNumber : false});
                    if( pwdCheck === ''){
                        setErrReg({...errReg,cnfPhoneNumber : true});
                    }
                    setErrReg({...errReg,password : false});
                    if(registerDetails.password === ''){
                        setErrReg({...errReg,password : true});
                    }
                    setErrReg({...errReg,phoneNumber : false});
                    if(registerDetails.phoneNumber === ''){
                        setErrReg({...errReg,phoneNumber : true});
                    }
                    setErrReg({...errReg,name : false});
                    if(registerDetails.name === ''){
                        setErrReg({...errReg,name : true});  
                    }
                    console.log(errReg,{...registerDetails})  

                }} >signup</Button>
            </div>
            <div className="details" >
                Back to login <Button color="secondary" onClick={()=> setLogin(true)} >{'login page'}</Button>
            </div>

        </Box>
    )
}