import React, { useState } from 'react';
import { Grid, Box, Typography, Paper } from '@mui/material';
import Header from '../components/Header';
import Gallery from '../components/Gallery';
import limited from "../assets/limited.jpg";
import trade from "../assets/trade.png";

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
                            src={limited} 
                            alt="limited" 
                            style={{
                                width: '100%', 
                                borderRadius: '8px', 
                                // border: '3px solid #7E57C2',
                                height: '100%', 
                                objectFit: 'cover' 
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
                            height: '100%', 
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            '&:hover': { transform: 'translateY(-10px)' }
                        }}>
                            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '30px', color: '#000', font: '' }}>
                                Feeling Limited?
                            </Typography>
                            <Typography sx={{ color: '#000', textAlign: 'center', marginBottom: '40px' }}>
                                Traditional platforms box you in, limited assets, high fees, slow execution. Trivex breaks the mold. Trade across a wide range of crypto assets with near-zero latency, low costs, and full control.
                                With our unique interal systems, you get smarter, faster, and cheaper trades every time. 
                                <br/>
                                <br/>
                                You’re not limited. You’re just not on Trivex yet.
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
                                Don't Know What To Trade?
                            </Typography>
                            <Typography sx={{ color: '#000', textAlign: 'center', marginBottom: '40px' }}>
                                We’ve got you covered. Trivex isn’t just a trading platform, it’s your crypto co-pilot. Get real-time market insights, curated asset highlights, and strategy suggestions tailored to your risk profile. Whether you're exploring altcoins or looking for momentum plays, Trivex helps you discover high potential opportunities without the noise.
                                <br/>
                                <br/>
                                Still unsure? Try our algorithm/AI powered strategy to simulate trades, backtest ideas, or copy trending strategies from top users. Trading doesn’t have to be overwhelming. Let Trivex guide your next move.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <img 
                            src={trade} 
                            alt="trade" 
                            style={{
                                width: '100%', 
                                borderRadius: '8px', 
                                // border: '3px solid #7E57C2',
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
                            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>Diverse Crypto Trading</Typography>
                            <Typography sx={{ color: '#555' }}>
                                Access a wide range of crypto assets with reduced fees through internal hedging and deep liquidity powered by the IOB system.
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
                            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>Strategy Marketplace</Typography>
                            <Typography sx={{ color: '#555' }}>
                                Explore or create strategies in the strategy marketplace to simplify token analysis and enhance trade decision making process.
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
                                Dynamic Yield Staking
                            </Typography>
                            <Typography sx={{ color: '#555' }}>
                                Lend USDC to earn APY from trading interest, dynamically adjusted by the AMB system so you can earn more.
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
