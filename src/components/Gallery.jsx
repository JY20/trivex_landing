import React,{ useState } from 'react'
// mui
import { 
    Typography,
    Box,
    Stack,
} from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import prototype1 from "../assets/prototype1.png";
import prototype2 from "../assets/prototype2.png";
import prototype3 from "../assets/prototype3.png";
import prototype4 from "../assets/prototype4.png";
import prototype5 from "../assets/prototype5.png";

const Gallery = () => {
    
    const [currentIndex, setCurrentIndex] = useState();

    const imageData = [
        {
            alt: 'image1',
            url: prototype1
        },
        {
            alt: 'image2',
            url: prototype3
        },
        {
            alt: "image3",
            url: prototype2
        },
        {
            alt: "image4",
            url: prototype4
        },
        {
            alt: "image5",
            url: prototype5
        },
    ];
  
    const renderSlides = imageData.map((image) => (
    <div key={image.alt} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={image.url} alt={image.alt} 
        style={{borderRadius: '8px', border: '3px solid #7E57C2', maxWidth: '100%', height: 'auto' }}/>
    </div>
    ));

    const handleChange = (index) => {
        setCurrentIndex(index);
    }

    return (
        <Stack
        direction='column'
        justifyContent= 'center'
        alignItems= 'center'
        sx={{
            py: 8,
            px: 2,
            display: { xs: 'flex'},
        }}
        >
            <Box
            component='section'
            sx={{
                paddingBottom: 3,
            }}
            >
                <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '30px', color: '#000' }}>
                    App Preview
                </Typography>
            </Box>
            
            <Box sx={{ 
                width: '80%',
            }}>
                <Carousel
                centerSlidePercentage={40}
                thumbWidth={180}
                dynamicHeight={false}
                centerMode={false}
                showArrows={false}
                autoPlay={false}
                infiniteLoop={true}
                selectedItem={imageData[currentIndex]}
                onChange={handleChange}
                className="carousel-container"
                >
                {renderSlides}
                </Carousel>
            </Box>
        </Stack>
    )
}

export default Gallery
