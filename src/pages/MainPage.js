import React, { useState } from 'react';
import { Grid, Box, Typography, Paper, Container, Stack, Divider, Chip } from '@mui/material';
import Header from '../components/Header';
import limited from "../assets/limited.jpg";
import trade from "../assets/trade.png";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';

const MainPage = () => {
    // Animation for section entry
    const fadeInUp = {
        opacity: 0,
        transform: 'translateY(20px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
        animationFillMode: 'forwards',
    };

    const handleScroll = (e) => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight - 100;
            if (isVisible) {
                el.style.opacity = 1;
                el.style.transform = 'translateY(0)';
            }
        });
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on initial load
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Box sx={{ 
            fontFamily: 'Arial, sans-serif', 
            background: 'linear-gradient(135deg, #120327 0%, #1E0538 50%, #2A0C4E 100%)',
            color: 'white',
            minHeight: '100vh', 
            width: '100%' 
        }}>
            <Header />

            {/* Stats Panel - Commented out for now
            <Container maxWidth="lg" sx={{ mt: -5, mb: 8, position: 'relative', zIndex: 5 }}>
                <Paper elevation={10} sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    borderRadius: '16px',
                    py: 3,
                    px: 2,
                    background: 'rgba(30, 5, 56, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(126, 87, 194, 0.3)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
                }}>
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ color: '#E0D7F6', fontWeight: 'bold' }}>$1.2B+</Typography>
                        <Typography variant="body2" sx={{ color: '#9575cd' }}>Total Volume</Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem sx={{ bgcolor: 'rgba(126, 87, 194, 0.3)' }} />
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ color: '#E0D7F6', fontWeight: 'bold' }}>250K+</Typography>
                        <Typography variant="body2" sx={{ color: '#9575cd' }}>Active Users</Typography>
                    </Box>
                    <Divider orientation="vertical" flexItem sx={{ bgcolor: 'rgba(126, 87, 194, 0.3)' }} />
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h5" sx={{ color: '#E0D7F6', fontWeight: 'bold' }}>12%</Typography>
                        <Typography variant="body2" sx={{ color: '#9575cd' }}>Avg. APY</Typography>
                    </Box>
                </Paper>
            </Container>
            */}

            {/* About Us Section */}
            <Container maxWidth="lg" sx={{ mb: 10 }}>
                <Grid container spacing={6} justifyContent="center" alignItems="center" className="animate-on-scroll" sx={fadeInUp}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{
                            position: 'relative',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: '-15px',
                                left: '-15px',
                                width: '100%',
                                height: '100%',
                                border: '2px solid #9C27B0',
                                borderRadius: '16px',
                                zIndex: 0,
                            }
                        }}>
                            <img 
                                src={limited} 
                                alt="Limitations of Traditional Platforms" 
                                style={{
                                    width: '100%', 
                                    borderRadius: '16px', 
                                    position: 'relative',
                                    zIndex: 1,
                                    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)',
                                    filter: 'brightness(0.85) contrast(1.2)'
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Chip 
                                label="NO LIMITS" 
                                sx={{ 
                                    bgcolor: 'rgba(156, 39, 176, 0.2)', 
                                    color: '#E0D7F6', 
                                    fontWeight: 'bold', 
                                    mb: 2,
                                    border: '1px solid #9C27B0'
                                }} 
                            />
                            <Typography variant="h3" sx={{ 
                                mb: 3, 
                                fontWeight: 'bold', 
                                background: 'linear-gradient(90deg, #FFFFFF 0%, #E0D7F6 100%)',
                                backgroundClip: 'text',
                                textFillColor: 'transparent',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>
                                Feeling Limited?
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 3, color: '#BBA9E1', lineHeight: 1.8 }}>
                                Traditional platforms box you in, limited assets, high fees, slow execution. Trivex breaks the mold. Trade across a wide range of crypto assets with near-zero latency, low costs, and full control.
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 3, color: '#BBA9E1', lineHeight: 1.8 }}>
                                With our unique internal systems, you get smarter, faster, and cheaper trades every time.
                            </Typography>
                            <Typography variant="h6" sx={{ color: '#9C27B0', fontWeight: 'bold' }}>
                                You're not limited. You're just not on Trivex yet.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Trade Strategy Section */}
            <Box sx={{ background: 'linear-gradient(135deg, rgba(126, 87, 194, 0.1) 0%, rgba(156, 39, 176, 0.1) 100%)', py: 10 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} justifyContent="center" alignItems="center" className="animate-on-scroll" sx={fadeInUp}>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Chip 
                                    label="SMART TRADING" 
                                    sx={{ 
                                        bgcolor: 'rgba(156, 39, 176, 0.2)', 
                                        color: '#E0D7F6', 
                                        fontWeight: 'bold', 
                                        mb: 2,
                                        border: '1px solid #9C27B0'
                                    }} 
                                />
                                <Typography variant="h3" sx={{ 
                                    mb: 3, 
                                    fontWeight: 'bold',
                                    background: 'linear-gradient(90deg, #FFFFFF 0%, #E0D7F6 100%)',
                                    backgroundClip: 'text',
                                    textFillColor: 'transparent',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}>
                                    Don't Know What To Trade?
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 3, color: '#BBA9E1', lineHeight: 1.8 }}>
                                    We've got you covered. Trivex isn't just a trading platform, it's your crypto co-pilot. Get real-time market insights, curated asset highlights, and strategy suggestions tailored to your risk profile.
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 3, color: '#BBA9E1', lineHeight: 1.8 }}>
                                    Still unsure? Try our AI-powered strategy to simulate trades, backtest ideas, or copy trending strategies from top users. Trading doesn't have to be overwhelming.
                                </Typography>
                                <Typography variant="h6" sx={{ color: '#9C27B0', fontWeight: 'bold' }}>
                                    Let Trivex guide your next move.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{
                                position: 'relative',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: '-15px',
                                    right: '-15px',
                                    width: '100%',
                                    height: '100%',
                                    border: '2px solid #9C27B0',
                                    borderRadius: '16px',
                                    zIndex: 0,
                                }
                            }}>
                                <img 
                                    src={trade} 
                                    alt="Smart Trading Strategies" 
                                    style={{
                                        width: '100%', 
                                        borderRadius: '16px',
                                        position: 'relative',
                                        zIndex: 1,
                                        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)',
                                        filter: 'brightness(0.85) contrast(1.2)'
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Features Section */}
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Box sx={{ textAlign: 'center', mb: 8 }} className="animate-on-scroll" style={fadeInUp}>
                    <Chip 
                        label="POWERFUL FEATURES" 
                        sx={{ 
                            bgcolor: 'rgba(156, 39, 176, 0.2)', 
                            color: '#E0D7F6', 
                            fontWeight: 'bold', 
                            mb: 2,
                            border: '1px solid #9C27B0'
                        }} 
                    />
                    <Typography variant="h3" sx={{ 
                        mb: 3, 
                        fontWeight: 'bold',
                        background: 'linear-gradient(90deg, #FFFFFF 0%, #E0D7F6 100%)',
                        backgroundClip: 'text',
                        textFillColor: 'transparent',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        Features
                    </Typography>
                </Box>
                
                <Grid container spacing={4} className="animate-on-scroll" style={fadeInUp}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper sx={{
                            padding: '30px',
                            textAlign: 'center',
                            height: '100%',
                            borderRadius: '16px',
                            background: 'rgba(30, 5, 56, 0.6)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(126, 87, 194, 0.3)',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': { 
                                transform: 'translateY(-10px)',
                                boxShadow: '0 20px 30px rgba(0, 0, 0, 0.4)'
                            }
                        }}>
                            <Box sx={{ 
                                bgcolor: 'rgba(126, 87, 194, 0.2)',
                                width: '70px',
                                height: '70px',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 auto 20px',
                                position: 'relative',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '50%',
                                    background: 'rgba(126, 87, 194, 0.2)',
                                    filter: 'blur(10px)',
                                    zIndex: -1
                                }
                            }}>
                                <TrendingUpIcon sx={{ color: '#9C27B0', fontSize: '2rem' }} />
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#E0D7F6' }}>
                                Diverse Crypto Trading
                            </Typography>
                            <Typography sx={{ color: '#BBA9E1' }}>
                                Access a wide range of crypto assets with reduced fees through internal hedging and deep liquidity powered by the IOB system.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper sx={{
                            padding: '30px',
                            textAlign: 'center',
                            height: '100%',
                            borderRadius: '16px',
                            background: 'rgba(30, 5, 56, 0.6)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(126, 87, 194, 0.3)',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': { 
                                transform: 'translateY(-10px)',
                                boxShadow: '0 20px 30px rgba(0, 0, 0, 0.4)'
                            }
                        }}>
                            <Box sx={{ 
                                bgcolor: 'rgba(126, 87, 194, 0.2)',
                                width: '70px',
                                height: '70px',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 auto 20px',
                                position: 'relative',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '50%',
                                    background: 'rgba(126, 87, 194, 0.2)',
                                    filter: 'blur(10px)',
                                    zIndex: -1
                                }
                            }}>
                                <AutoGraphIcon sx={{ color: '#9C27B0', fontSize: '2rem' }} />
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#E0D7F6' }}>
                                Strategy Marketplace
                            </Typography>
                            <Typography sx={{ color: '#BBA9E1' }}>
                                Explore or create strategies in the strategy marketplace to simplify token analysis and enhance trade decision making process.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper sx={{
                            padding: '30px',
                            textAlign: 'center',
                            height: '100%',
                            borderRadius: '16px',
                            background: 'rgba(30, 5, 56, 0.6)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(126, 87, 194, 0.3)',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': { 
                                transform: 'translateY(-10px)',
                                boxShadow: '0 20px 30px rgba(0, 0, 0, 0.4)'
                            }
                        }}>
                            <Box sx={{ 
                                bgcolor: 'rgba(126, 87, 194, 0.2)',
                                width: '70px',
                                height: '70px',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 auto 20px',
                                position: 'relative',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '50%',
                                    background: 'rgba(126, 87, 194, 0.2)',
                                    filter: 'blur(10px)',
                                    zIndex: -1
                                }
                            }}>
                                <AccountBalanceWalletIcon sx={{ color: '#9C27B0', fontSize: '2rem' }} />
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#E0D7F6' }}>
                                Dynamic Yield Staking
                            </Typography>
                            <Typography sx={{ color: '#BBA9E1' }}>
                                Lend USDC to earn APY from trading interest, dynamically adjusted by the AMB system so you can earn more.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>

                {/* Additional Features */}
                <Grid container spacing={4} sx={{ mt: 3 }} className="animate-on-scroll" style={fadeInUp}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper sx={{
                            padding: '30px',
                            textAlign: 'center',
                            height: '100%',
                            borderRadius: '16px',
                            background: 'rgba(30, 5, 56, 0.6)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(126, 87, 194, 0.3)',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': { 
                                transform: 'translateY(-10px)',
                                boxShadow: '0 20px 30px rgba(0, 0, 0, 0.4)'
                            }
                        }}>
                            <Box sx={{ 
                                bgcolor: 'rgba(126, 87, 194, 0.2)',
                                width: '70px',
                                height: '70px',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 auto 20px',
                                position: 'relative',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '50%',
                                    background: 'rgba(126, 87, 194, 0.2)',
                                    filter: 'blur(10px)',
                                    zIndex: -1
                                }
                            }}>
                                <SpeedIcon sx={{ color: '#9C27B0', fontSize: '2rem' }} />
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#E0D7F6' }}>
                                Lightning Fast Execution
                            </Typography>
                            <Typography sx={{ color: '#BBA9E1' }}>
                                Trade with sub-second confirmation times on Starknet's powerful ZK-rollup infrastructure.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper sx={{
                            padding: '30px',
                            textAlign: 'center',
                            height: '100%',
                            borderRadius: '16px',
                            background: 'rgba(30, 5, 56, 0.6)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(126, 87, 194, 0.3)',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': { 
                                transform: 'translateY(-10px)',
                                boxShadow: '0 20px 30px rgba(0, 0, 0, 0.4)'
                            }
                        }}>
                            <Box sx={{ 
                                bgcolor: 'rgba(126, 87, 194, 0.2)',
                                width: '70px',
                                height: '70px',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 auto 20px',
                                position: 'relative',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '50%',
                                    background: 'rgba(126, 87, 194, 0.2)',
                                    filter: 'blur(10px)',
                                    zIndex: -1
                                }
                            }}>
                                <SecurityIcon sx={{ color: '#9C27B0', fontSize: '2rem' }} />
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#E0D7F6' }}>
                                Enhanced Security
                            </Typography>
                            <Typography sx={{ color: '#BBA9E1' }}>
                                Your assets are protected by Starknet's battle-tested security and Trivex's multi-layered protection systems.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Paper sx={{
                            padding: '30px',
                            textAlign: 'center',
                            height: '100%',
                            borderRadius: '16px',
                            background: 'rgba(30, 5, 56, 0.6)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(126, 87, 194, 0.3)',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': { 
                                transform: 'translateY(-10px)',
                                boxShadow: '0 20px 30px rgba(0, 0, 0, 0.4)'
                            }
                        }}>
                            <Box sx={{ 
                                bgcolor: 'rgba(126, 87, 194, 0.2)',
                                width: '70px',
                                height: '70px',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 auto 20px',
                                position: 'relative',
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '50%',
                                    background: 'rgba(126, 87, 194, 0.2)',
                                    filter: 'blur(10px)',
                                    zIndex: -1
                                }
                            }}>
                                <ShowChartIcon sx={{ color: '#9C27B0', fontSize: '2rem' }} />
                            </Box>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, color: '#E0D7F6' }}>
                                Advanced Analytics
                            </Typography>
                            <Typography sx={{ color: '#BBA9E1' }}>
                                Make informed decisions with real-time charts, market insights, and personalized trading recommendations.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default MainPage;
