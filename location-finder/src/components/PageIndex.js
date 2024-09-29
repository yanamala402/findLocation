import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';
import LoginIcon from '@mui/icons-material/Login';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Style } from "@mui/icons-material";
import LoginSideBar from "./Login/LoginSideBar";

export default function PageIndex(){
    const navigate = useNavigate();
    const paths = ['/', '/AddImagesIndex', '/ViewAllLocations', '/Login'];
    const [loginStatus, setLiginStatus] = useState({});
    const [login, setLogin] = useState({});
    return(
        <>
        <Box sx={{ width: 500 }}>
            <BottomNavigation
            showLabels
            onChange={(event, newValue) => {
                if(paths[newValue] === '/Login' ){
                    setLogin(true)
                    return setLiginStatus({side:'right', status :true});
                }
                navigate(paths[newValue]);
                console.log(newValue,paths[newValue]);
            }}
            >
                <BottomNavigationAction label="Home" icon={<RestoreIcon />} />
                <BottomNavigationAction label="view All location" icon={<LocationOnIcon />} />
                <BottomNavigationAction label="Add New Images" icon={<AddPhotoAlternateIcon />} />
                <BottomNavigationAction label="Login" icon={<LoginIcon /> } />
            </BottomNavigation>
      </Box>
      <LoginSideBar loginStatus={loginStatus} login={login} />
        </>
    )
}