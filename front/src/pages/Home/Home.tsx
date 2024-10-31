import React, { Fragment } from 'react';
import "./index.css";
import { Box, CardContent, CardMedia, Container, Grid2, Typography } from '@mui/material';
import StyledCard from '../../custom-components/StyledCard';
import michelinPic from '../../assets/images/michelinLinkPic.jpg';
import cafePic from '../../assets/images/cafeLinkPic.jpg';
import eateryPic from '../../assets/images/eateryLinkPic.jpg';
import dessertPic from '../../assets/images/dessertLinkPic.jpg';

const CardInfoMichelin = (
    <>
        <CardMedia
            sx={{ height: '200px' }}
            image={michelinPic}
            title="Michelin"
        />

        <CardContent>
            <Typography variant="h4" sx={{ textAlign: 'center' }}>Michelin</Typography>
        </CardContent>

    </>
);

const CardInfoCafe = (
    <>
        <CardMedia
            sx={{ height: '200px' }}
            image={cafePic}
            title="Café"
        />

        <CardContent>
            <Typography variant="h4" sx={{ textAlign: 'center' }}>Café</Typography>
        </CardContent>

    </>
);

const CardInfoEatery = (
    <>
        <CardMedia
            sx={{ height: '200px' }}
            image={eateryPic}
            title="Eatery"
        />

        <CardContent>
            <Typography variant="h4" sx={{ textAlign: 'center' }}>Eatery</Typography>
        </CardContent>

    </>
);

const CardInfoDessert = (
    <>
        <CardMedia
            sx={{ height: '200px' }}
            image={dessertPic}
            title="Dessert"
        />

        <CardContent >
            <Typography variant="h4" sx={{ textAlign: 'center' }}>Dessert</Typography>
        </CardContent>

    </>
);

function Home() {

    return (
        <>
            <Box className="upperHomeText">
                <Typography variant="h1">Welcome to Diverse Degustations</Typography>
            </Box>
            <Box className="subHomeText">
                <Typography variant="h6"> I am honored that you are joining me on my foray into reviewing cuisines</Typography>
            </Box>
            <hr color="#CBA55B"></hr>

            <Box>
                <Grid2 container rowSpacing={8} columnSpacing={4} className="cardContainer">
                    <Grid2 size={6}>
                        <StyledCard >
                            {CardInfoMichelin}
                        </StyledCard>
                    </Grid2>
                    <Grid2 size={6}>
                        <StyledCard >
                            {CardInfoCafe}
                        </StyledCard>
                    </Grid2>
                    <Grid2 size={6}>
                        <StyledCard >
                            {CardInfoEatery}
                        </StyledCard>
                    </Grid2>
                    <Grid2 size={6}>
                        <StyledCard >
                            {CardInfoDessert}
                        </StyledCard>
                    </Grid2>
                </Grid2>


            </Box>
        </>
    )
}

export default Home;