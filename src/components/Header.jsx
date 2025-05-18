import React from 'react';
import { Box, Typography, Button, Container, styled } from "@mui/material";
import layer from '../assets/layers_removed.png';

const Header = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        minHeight: '85vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #1E0538 0%, #3A1464 50%, #7E57C2 100%)',
        padding: theme.spacing(5),
        position: 'relative',
        overflow: 'hidden',
        flexDirection: 'row',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            textAlign: 'center',
        }
    }));

    const GlowingCircle = styled(Box)({
        position: 'absolute',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(126, 87, 194, 0.3) 0%, rgba(126, 87, 194, 0.1) 50%, rgba(126, 87, 194, 0) 70%)',
        filter: 'blur(40px)',
        opacity: 0.8,
        animation: 'pulse 8s infinite alternate',
        '@keyframes pulse': {
            '0%': { transform: 'scale(1)', opacity: 0.5 },
            '100%': { transform: 'scale(1.2)', opacity: 0.8 },
        },
    });

    const ContentBox = styled(Box)(({ theme }) => ({
        zIndex: 2,
        color: 'white',
        maxWidth: '50%',
        [theme.breakpoints.down('md')]: {
            maxWidth: '90%',
        }
    }));

    const ImageBox = styled(Box)(({ theme }) => ({
        maxWidth: '40%',
        zIndex: 2,
        animation: 'float 6s ease-in-out infinite',
        '@keyframes float': {
            '0%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
            '100%': { transform: 'translateY(0px)' },
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: '70%',
            marginTop: theme.spacing(3),
        }
    }));

    const ActionButton = styled(Button)({
        background: 'linear-gradient(90deg, #9C27B0 0%, #7E57C2 100%)',
        borderRadius: '30px',
        padding: '12px 30px',
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'none',
        fontSize: '1rem',
        boxShadow: '0 4px 20px rgba(158, 87, 194, 0.4)',
        marginTop: '2rem',
        transition: 'all 0.3s ease',
        '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 7px 30px rgba(158, 87, 194, 0.6)',
        }
    });

    return (
        <CustomBox component='header'>
            {/* Animated background elements */}
            <GlowingCircle sx={{ top: '-10%', left: '10%' }} />
            <GlowingCircle sx={{ bottom: '-5%', right: '15%' }} />
            <GlowingCircle sx={{ top: '30%', right: '-10%', width: '200px', height: '200px' }} />
            
            {/* Content Section */}
            <ContentBox>
                <Typography 
                    variant="h2" 
                    sx={{ 
                        margin: 0, 
                        fontWeight: 'bold',
                        background: 'linear-gradient(90deg, #FFFFFF 0%, #E0D7F6 100%)',
                        backgroundClip: 'text',
                        textFillColor: 'transparent',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 2
                    }}
                >
                    Welcome to Trivex
                </Typography>
                <Typography 
                    variant="h5" 
                    sx={{ 
                        color: '#E0D7F6',
                        mb: 3,
                        fontWeight: 300,
                        lineHeight: 1.5
                    }}
                >
                    The ultimate DApp empowering every trade on Starknet
                </Typography>
                <Typography 
                    variant="body1" 
                    sx={{ 
                        color: '#BBA9E1',
                        mb: 4,
                        opacity: 0.9
                    }}
                >
                    Trade, earn, and build with unmatched speed and security on Starknet's leading DeFi platform
                </Typography>
                <ActionButton 
                    href="https://app.official-trivex.xyz/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Launch App
                </ActionButton>
            </ContentBox>
            
            {/* Image Section */}
            <ImageBox>
                <img
                    src={layer}
                    alt="Trivex Logo"
                    style={{
                        width: '90%',
                        height: 'auto',
                        filter: 'drop-shadow(0 0 20px rgba(126, 87, 194, 0.7))',
                        transition: 'all 0.3s ease',
                    }}
                    onMouseOver={(e) => {
                        e.target.style.transform = 'scale(1.05) rotate(5deg)';
                        e.target.style.filter = 'drop-shadow(0 0 30px rgba(126, 87, 194, 0.9))';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.transform = 'scale(1) rotate(0deg)';
                        e.target.style.filter = 'drop-shadow(0 0 20px rgba(126, 87, 194, 0.7))';
                    }}
                />
            </ImageBox>
        </CustomBox>
    );
}

export default Header;
