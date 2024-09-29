import Drawer from '@mui/material/Drawer';
import { Box, Button, createTheme, TextField, ThemeProvider } from '@mui/material';
import Login from './Login';
import './../../css-styling/LoginSideBar.css';
import Register from './Register';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function LoginSideBar({ loginStatus, login }) {
    const theme = createTheme({
        components: {
          MuiOutlinedInput: {
            styleOverrides: {
              root: {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white', // Border color
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white', // Border color on hover
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white', // Border color when focused
                },
                '& .MuiInputBase-input': {
                  color: 'white', // Text color
                },
              },
            },
          },
          MuiInputLabel: {
            styleOverrides: {
              root: {
                color: 'white', // Label color
                '&.Mui-focused': {
                  color: 'white', // Label color when focused
                },
              },
            },
          },
        },
      });
    const [isLogin, setLogin] = useState(true)
    const [state, setState] = useState({
        right: false,
    });

    useEffect(() => {
        toggleDrawer(loginStatus.side, loginStatus.status)({});
        setLogin(login);
    }, [loginStatus])

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
        <div>
            <>
                <ThemeProvider theme={theme}>
                    <Drawer
                        anchor={'right'}
                        open={state['right']}
                        onClose={toggleDrawer('right', false)}
                        className={'loginDrawer'}
                    >
                        {
                            isLogin ? <Login setLogin={setLogin} /> : <Register setLogin={setLogin} />
                        }                    
                    </Drawer>
                </ThemeProvider>
            </>
        </div>
    );
}
