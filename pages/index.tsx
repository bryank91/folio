import * as React from 'react'
import ContentContainer from '../components/content/container';
import Porfolio from '../components/content/portfolio';
import { Grid, Typography, Card} from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image'
import PixelArt from "../public/images/pixelart.png"
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

export default function Home() {

  const CustomizedTitle = styled(Card) `
    background-color: #fff;
    text-align: center;
    font-size: 200%;
    box-shadow: none;
  `

  const CustomizedContent = styled(Card)`
    background-color: #fff;
    text-align: center;
    font-size: large;
    box-shadow: none;
  `

  const ImageBox = () => {
    return(
      <Image layout="intrinsic" style={{ textAlign: 'center' }}
        src={PixelArt}
      />
    );
  }

  const about = () => {
    return(
    <Grid container sx={{paddingTop: "35px"}}>
      <Grid item={true} xs={12}>
        <CustomizedTitle style={{border: "1px solid lightGrey"}}>
          <Typography variant="h2">KHOO.dev</Typography>
        </CustomizedTitle>
      </Grid>
      <Grid item={true} xs={12} display="flex" justifyContent="center" alignItems="center">
        <ImageBox />
      </Grid>
      <Grid item={true} xs={12}>
        <CustomizedContent>
          <Typography variant="h4">Full Stack Developer</Typography>
          <Typography variant="subtitle1">In love with all things cloud and automation</Typography>
        </CustomizedContent>
        <CustomizedContent>
        <Typography variant="subtitle2" style={{border: "1px solid lightGrey"}}>
            Industry experience in delivering enterprise and start up solutions <br />
            Agile advocate <br />
            Proficient in AWS and Azure <br />
          </Typography>
        </CustomizedContent>
      </Grid>
    </Grid>
    );
  }

  const portfolio = {
      name: "Flippy",
      description: "Flippy",
      shorthand: "Flippy",
      url: "Flippy"
  }

  const portfolio1 = () => {
    return (
      <div>
        <Porfolio data={portfolio} />
        <Porfolio data={portfolio} />
        <Porfolio data={portfolio} />
      </div>
    )
  }

  return (
    <div>
      <Header />
      <ContentContainer content={about()} />
      <ContentContainer content={portfolio1()} />  
      <ContentContainer content={<Footer />}/>
    </div>
  )
}
