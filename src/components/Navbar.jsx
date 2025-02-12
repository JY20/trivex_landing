import React from 'react';
import { AppBar, Toolbar, Typography, CssBaseline, ThemeProvider, createTheme, Button, Box } from '@mui/material';
import logo from '../assets/logo5.png';

const theme = createTheme({
    palette: {
        primary: {
            main: '#D1C4E9', 
        },
        background: {
            default: '#D1C4E9',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h6: {
            fontWeight: 600,
        },
    },
});

const Navbar = () => {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="static" color="white" sx={{ boxShadow: 0, padding: '10px 0' }}>
                <Toolbar sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '80%', 
                            backgroundColor: 'white',
                            borderRadius: '30px',
                            padding: '8px 20px',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                            alignItems: 'center', 
                        }}
                    >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                        }}
                    >
                        <Typography
                            variant="h6"
                            to="/"
                            sx={{
                                textDecoration: 'none',
                                color: '#7E57C2',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                transition: 'transform 0.3s ease',
                                '&:hover': { color: '#6A4BA1' },
                            }}
                        >
                            <img
                                src={logo}
                                alt="Trivex Logo"
                                style={{
                                    width: '30px',
                                    height: '30px',
                                    borderRadius: '50%',
                                    marginRight: '10px',
                                }}
                            />
                            Trivex 
                        </Typography>
                    </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '16px',
                            }}
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#7E57C2',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    borderRadius: '30px',
                                    padding: '10px 20px',
                                    '&:hover': { backgroundColor: '#6A4BA1' },
                                }}
                            >
                                Coming Soon
                            </Button>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};

export default Navbar;
