import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    styled,
    Drawer,
    IconButton,
    Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo5.png';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'center',
});

const NavbarContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    backgroundColor: 'white',
    borderRadius: '30px',
    padding: '6px 10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.down("sm")]: {
        width: '90%',
        padding: '6px 15px'
    }
}));

const Navbar = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <AppBar component="nav" position="sticky" sx={{ backgroundColor: '#D1C4E9', color: '#060f5e' }} elevation={0}>
            <StyledToolbar>
                <NavbarContainer sx={{ width: '80%', background: 'white' }}>
                    {/* Logo */}
                    <Typography
                        variant="h6"
                        component="h2"
                        sx={{
                            textDecoration: 'none',
                            color: '#7E57C2',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            typography: 'h6',
                            transition: 'transform 0.3s ease',
                            '&:hover': { color: '#6A4BA1' },
                        }}
                    >
                        <img src={logo} alt="Trivex Logo" style={{ width: "40px", height: "40px", borderRadius: '50%', marginRight: '10px' }} />
                        Trivex
                    </Typography>

                    {/* Mobile Menu Icon */}
                    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                        <IconButton onClick={() => setOpenDrawer(true)}>
                            <MenuIcon sx={{ color: '#060f5e' }} />
                        </IconButton>
                    </Box>

                    {/* Desktop Links */}
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
                        <Button
                            variant="text"
                            href="https://trivex.gitbook.io/trivex-docs"
                            sx={{
                                color: '#7E57C2',
                                fontWeight: 'bold',
                                textTransform: 'none',
                                typography: 'h6',
                                '&:hover': { color: '#6A4BA1' }
                            }}
                        >
                            Docs
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                backgroundColor: '#7E57C2',
                                color: 'white',
                                fontWeight: 'bold',
                                borderRadius: '30px',
                                ml: 2,
                                textTransform: 'none', 
                                typography: 'h6',
                                '&:hover': { backgroundColor: '#6A4BA1' },
                            }}
                            onClick={() => alert('Coming Soon! Stay tuned.')}
                        >
                            Coming Soon
                        </Button>
                    </Box>
                </NavbarContainer>
            </StyledToolbar>

            {/* Mobile Drawer */}
            <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <Box sx={{ width: 250, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
                    <Button
                        variant="text"
                        href="https://trivex.gitbook.io/trivex-docs"
                        sx={{
                            color: '#7E57C2',
                            fontWeight: 'bold',
                            mb: 2,
                            textTransform: 'none', 
                            '&:hover': { color: '#6A4BA1' }
                        }}
                    >
                        Docs
                    </Button>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#7E57C2',
                            color: 'white',
                            fontWeight: 'bold',
                            borderRadius: '30px',
                            textTransform: 'none', 
                            '&:hover': { backgroundColor: '#6A4BA1' },
                        }}
                        onClick={() => alert('Coming Soon! Stay tuned.')}
                    >
                        Coming Soon
                    </Button>
                </Box>
            </Drawer>
        </AppBar>
    );
};

export default Navbar;