import React, { useState } from 'react';
import { Grid, Box, Typography, Paper } from '@mui/material';
import Header from '../components/Header';
import Gallery from '../components/Gallery';
import prototype1 from "../assets/prototype1.png";
import prototype2 from "../assets/prototype2.png";

const MainPage = () => {

    return (
        <Box sx={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#D1C4E9', minHeight: '100vh', width: '100%' }}>
            <Header />

            {/* About Us Section */}
            <section style={{
                padding: '30px 30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                marginBottom: '30px',
                width: '90%', // Adjusted width to 90%
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
                <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ width: '100%' }}>
                    <Grid item xs={12} sm={6} md={6}>
                        <img 
                            src={prototype1} 
                            alt="Prototype 1" 
                            style={{
                                width: '100%', 
                                borderRadius: '8px', 
                                border: '3px solid #7E57C2',
                                height: '100%', // Set height to 100% of the container
                                objectFit: 'cover' // Ensure the image fits within its container without distortion
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Paper sx={{
                            padding: '30px',
                            textAlign: 'center',
                            backgroundColor: '#fff',
                            borderRadius: '12px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.3s',
                            height: '100%', // Set the height of Paper to be the same as the image
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            '&:hover': { transform: 'translateY(-10px)' }
                        }}>
                            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '30px', color: '#000' }}>
                                About Us
                            </Typography>
                            <Typography sx={{ color: '#000', textAlign: 'center', marginBottom: '40px' }}>
                                Trivex is an all-in-one RWA trading platform that connects crypto and stock markets, offering seamless trades between real-world assets. We bridge the gap between traditional financial markets and blockchain technology, empowering users to trade with confidence and transparency. Our platform supports all companies listed in the S&P 500 and TSX, as well as a variety of cryptocurrencies.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </section>

            {/* Vision Section */}
            <section style={{
                padding: '30px 30px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                marginBottom: '30px',
                width: '90%', // Adjusted width to 90%
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
                <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ width: '100%' }}>
                    <Grid item xs={12} sm={6} md={6}>
                        <Paper sx={{
                            padding: '30px',
                            textAlign: 'center',
                            backgroundColor: '#fff',
                            borderRadius: '12px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.3s',
                            height: '100%', // Set the height of Paper to be the same as the image
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            '&:hover': { transform: 'translateY(-10px)' }
                        }}>
                            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '30px', color: '#000' }}>
                                Our Vision
                            </Typography>
                            <Typography sx={{ color: '#000', textAlign: 'center', marginBottom: '40px' }}>
                                Trivex aims to address the growing gap in the cryptocurrency space where investors face limited opportunities to invest in real value-driven projects. As the hype around speculative projects rises, long-term, impactful ventures are often overlooked. Trivex seeks to revitalize value investing by introducing real-world asset (RWA) trading within the crypto ecosystem, allowing users to invest in tangible, sustainable projects with long-term growth potential.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <img 
                            src={prototype2} 
                            alt="Prototype 2" 
                            style={{
                                width: '100%', 
                                borderRadius: '8px', 
                                border: '3px solid #7E57C2',
                                height: '100%', // Set height to 100% of the container
                                objectFit: 'cover' // Ensure the image fits within its container without distortion
                            }}
                        />
                    </Grid>
                </Grid>
            </section>

            {/* Features Section */}
            <section style={{
                padding: '30px 30px',
                width: '90%', // Adjusted width to 90%
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                margin: '0 auto',
                paddingBottom: '50px'
            }}>
                <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '30px', color: 'black' }}>
                    Features
                </Typography>
                <Grid container spacing={4} justifyContent="center" alignItems="center" sx={{ paddingBottom: '30px' }}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper sx={{
                            padding: '30px',
                            textAlign: 'center',
                            backgroundColor: '#fff',
                            borderRadius: '12px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.3s',
                            '&:hover': { transform: 'translateY(-10px)' }
                        }}>
                            <i className="fas fa-cogs" style={{ fontSize: '3em', color: '#F39C12', marginBottom: '20px' }}></i>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>All-in-One Platform</Typography>
                            <Typography sx={{ color: '#555' }}>
                                A comprehensive solution for crypto and stock trading, offering seamless integration with real-world assets.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper sx={{
                            padding: '30px',
                            textAlign: 'center',
                            backgroundColor: '#fff',
                            borderRadius: '12px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.3s',
                            '&:hover': { transform: 'translateY(-10px)' }
                        }}>
                            <i className="fas fa-chart-line" style={{ fontSize: '3em', color: '#2980B9', marginBottom: '20px' }}></i>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>Strategy Analysis</Typography>
                            <Typography sx={{ color: '#555' }}>
                                Run real-time algo/AI powered strategies and generate comprehensive reports for crypto and stocks.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper sx={{
                            padding: '30px',
                            textAlign: 'center',
                            backgroundColor: '#fff',
                            borderRadius: '12px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.3s',
                            '&:hover': { transform: 'translateY(-10px)' }
                        }}>
                            <i className="fas fa-exchange-alt" style={{ fontSize: '3em', color: '#27AE60', marginBottom: '20px' }}></i>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                                Low-Fee Trading
                            </Typography>
                            <Typography sx={{ color: '#555' }}>
                                Enjoy minimal trading fees for maximum profits, with seamless trades between crypto and real-world assets.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </section>

            <Gallery/>
        </Box>
    );
};

export default MainPage;
