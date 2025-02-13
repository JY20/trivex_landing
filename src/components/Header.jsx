import React from 'react';
import { Box, Typography, styled } from "@mui/material";
import layer from '../assets/layers_removed.png';

const Header = () => {

    const CustomBox = styled(Box)(({ theme }) => ({
        minHeight: '85vh', 
        display: 'flex',
        justifyContent: 'space-around', // Ensures space between text and image
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#D1C4E9',
        padding: theme.spacing(5),
        position: 'relative',
        flexDirection: 'row',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            textAlign: 'center',
        }
    }));

    const ContentBox = styled(Box)(({ theme }) => ({
        zIndex: 2,
        color: 'black',
        maxWidth: '50%',
        [theme.breakpoints.down('md')]: {
            maxWidth: '90%',
        }
    }));

    const ImageBox = styled(Box)(({ theme }) => ({
        maxWidth: '40%',
        [theme.breakpoints.down('md')]: {
            maxWidth: '70%',
            marginTop: theme.spacing(3),
        }
    }));

    return (
        <CustomBox component='header'>
            {/* Content Section */}
            <ContentBox>
                <Typography variant="h2" sx={{ margin: 0, fontWeight: 'bold' }}>
                    Welcome to Trivex
                </Typography>
                <Typography variant="h6" sx={{ color: 'black' }}>
                    The one-stop platform for seamless trading of crypto and real-world assets with real-time insights
                </Typography>
            </ContentBox>
            
            {/* Image Section */}
            <ImageBox>
                <img
                    src={layer}
                    alt="Trivex Logo"
                    style={{
                        width: '100%',
                        height: 'auto',
                        transition: 'transform 0.3s ease',
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
            </ImageBox>
        </CustomBox>
    );
}

export default Header;
