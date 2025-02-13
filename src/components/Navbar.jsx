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
    padding: '8px 20px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.down("sm")]: {
        width: '90%', // Slightly smaller on mobile for better spacing
        padding: '6px 15px'
    }
}));

const Navbar = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <AppBar component="nav" position="sticky" sx={{ backgroundColor: '#D1C4E9', color: '#060f5e' }} elevation={0}>
            <StyledToolbar>
                <NavbarContainer sx={{width: '80%', background: 'white'}}>
                    {/* Logo */}
                    <Typography variant="h6" component="h2" sx={{ display: 'flex', alignItems: 'center' }}>
                        <img src={logo} alt="Trivex Logo" style={{ width: "30px", height: "30px", borderRadius: '50%', marginRight: '10px' }} />
                        Trivex
                    </Typography>

                    {/* Mobile Menu Icon */}
                    <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                        <IconButton onClick={() => setOpenDrawer(true)}>
                            <MenuIcon sx={{ color: '#060f5e' }} />
                        </IconButton>
                    </Box>

                    {/* Desktop "Coming Soon" Button */}
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
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
                        variant="contained"
                        sx={{
                            backgroundColor: '#7E57C2',
                            color: 'white',
                            fontWeight: 'bold',
                            borderRadius: '30px',
                            padding: '10px 20px',
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
