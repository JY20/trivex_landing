import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Box,
    Typography,
    styled,
    Drawer,
    IconButton,
    Button,
    Container
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/Trivex1.png';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'center',
    padding: '12px 0',
});

const NavbarContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    background: 'rgba(30, 5, 56, 0.6)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(126, 87, 194, 0.3)',
    padding: '8px 20px',
    [theme.breakpoints.down("sm")]: {
        padding: '8px 15px'
    }
}));

const LogoContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    '&::after': {
        content: '""',
        position: 'absolute',
        width: '30px',
        height: '2px',
        background: 'linear-gradient(90deg, #9C27B0, transparent)',
        bottom: '-5px',
        left: '0',
        transition: 'width 0.3s ease',
    },
    '&:hover::after': {
        width: '100%',
    }
});

const StyledButton = styled(Button)({
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '-100%',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
        transition: 'left 0.5s ease',
    },
    '&:hover::before': {
        left: '100%',
    }
});

const Navbar = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <AppBar component="nav" position="sticky" sx={{ 
            background: 'linear-gradient(135deg, #120327 0%, #1E0538 100%)', 
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
            borderBottom: '1px solid rgba(126, 87, 194, 0.3)'
        }} elevation={0}>
            <Container maxWidth="lg">
                <StyledToolbar>
                    <NavbarContainer>
                        {/* Logo */}
                        <LogoContainer>
                            <Typography
                                variant="h6"
                                component="h2"
                                sx={{
                                    textDecoration: 'none',
                                    color: '#E0D7F6',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center',
                                    typography: 'h6',
                                    transition: 'transform 0.3s ease, color 0.3s ease',
                                    '&:hover': { 
                                        color: '#9C27B0',
                                        transform: 'translateY(-2px)'
                                    },
                                }}
                            >
                                <Box sx={{
                                    width: "44px", 
                                    height: "44px", 
                                    borderRadius: '50%', 
                                    marginRight: '15px',
                                    background: 'rgba(126, 87, 194, 0.2)',
                                    padding: '2px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    boxShadow: '0 0 15px rgba(126, 87, 194, 0.5)',
                                }}>
                                    <img 
                                        src={logo} 
                                        alt="Trivex Logo" 
                                        style={{ 
                                            width: "40px", 
                                            height: "40px", 
                                            borderRadius: '50%',
                                            filter: 'drop-shadow(0 0 5px rgba(126, 87, 194, 0.7))'
                                        }} 
                                    />
                                </Box>
                                Trivex
                            </Typography>
                        </LogoContainer>

                        {/* Mobile Menu Icon */}
                        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                            <IconButton onClick={() => setOpenDrawer(true)}>
                                <MenuIcon sx={{ color: '#E0D7F6' }} />
                            </IconButton>
                        </Box>

                        {/* Desktop Links */}
                        <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
                            <StyledButton
                                variant="text"
                                href="https://trivex.gitbook.io/trivex-docs"
                                sx={{
                                    color: '#E0D7F6',
                                    fontWeight: 'bold',
                                    textTransform: 'none',
                                    typography: 'body1',
                                    letterSpacing: '0.5px',
                                    mr: 3,
                                    '&:hover': { color: '#9C27B0' }
                                }}
                            >
                                Docs
                            </StyledButton>
                            <StyledButton
                                variant="contained"
                                sx={{
                                    background: 'linear-gradient(90deg, #9C27B0 0%, #7E57C2 100%)',
                                    color: 'white',
                                    fontWeight: 'bold',
                                    borderRadius: '30px',
                                    textTransform: 'none', 
                                    typography: 'body1',
                                    letterSpacing: '0.5px',
                                    padding: '8px 24px',
                                    boxShadow: '0 4px 15px rgba(126, 87, 194, 0.4)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': { 
                                        boxShadow: '0 6px 20px rgba(126, 87, 194, 0.6)',
                                        transform: 'translateY(-2px)'
                                    },
                                }}
                                href="https://app.official-trivex.xyz/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Launch App
                            </StyledButton>
                        </Box>
                    </NavbarContainer>
                </StyledToolbar>
            </Container>

            {/* Mobile Drawer */}
            <Drawer 
                anchor="right" 
                open={openDrawer} 
                onClose={() => setOpenDrawer(false)}
                PaperProps={{
                    sx: {
                        background: 'linear-gradient(135deg, #120327 0%, #1E0538 100%)',
                        color: 'white',
                        borderLeft: '1px solid rgba(126, 87, 194, 0.3)'
                    }
                }}
            >
                <Box sx={{ width: 250, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 4 }}>
                    <LogoContainer sx={{ mb: 5, '&:hover::after': { width: '70px' } }}>
                        <Typography
                            variant="h6"
                            component="h2"
                            sx={{
                                textDecoration: 'none',
                                color: '#E0D7F6',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                typography: 'h6',
                                mb: 2
                            }}
                        >
                            <img src={logo} alt="Trivex Logo" style={{ width: "40px", height: "40px", borderRadius: '50%', marginRight: '10px' }} />
                            Trivex
                        </Typography>
                    </LogoContainer>
                    <StyledButton
                        variant="text"
                        href="https://trivex.gitbook.io/trivex-docs"
                        sx={{
                            color: '#E0D7F6',
                            fontWeight: 'bold',
                            mb: 3,
                            width: '80%',
                            textTransform: 'none', 
                            '&:hover': { color: '#9C27B0' }
                        }}
                    >
                        Docs
                    </StyledButton>
                    <StyledButton
                        variant="contained"
                        sx={{
                            background: 'linear-gradient(90deg, #9C27B0 0%, #7E57C2 100%)',
                            color: 'white',
                            fontWeight: 'bold',
                            borderRadius: '30px',
                            textTransform: 'none', 
                            width: '80%',
                            padding: '10px 20px',
                            boxShadow: '0 4px 15px rgba(126, 87, 194, 0.4)',
                            '&:hover': { boxShadow: '0 6px 20px rgba(126, 87, 194, 0.6)' },
                        }}
                        href="https://app.official-trivex.xyz/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Launch App
                    </StyledButton>
                </Box>
            </Drawer>
        </AppBar>
    );
};

export default Navbar;