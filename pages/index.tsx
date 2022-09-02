import * as React from 'react'
import { ContentContainer, SplitContentContainer, MainContainer } from '../components/content/container';
import { Grid, Typography, Card} from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image'
import PixelArt from "../public/images/neon_room.jpg"
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import { GithubProjects } from '../types/project';

export default function Home() {

  const CustomizedTitle = styled(Card) `
    background-color: #141630;
    text-align: center;
    font-size: 200%;
    box-shadow: none;
    color: white;
    padding-top: 25px;
  `

  const CustomizedContent = styled(Card)`
    background-color: #141630;
    text-align: center;
    font-size: large;
    box-shadow: none;
    color: white;
  `

  const ImageBox = () => {
    return(
      <Image layout="intrinsic" style={{ textAlign: 'center' }}
        src={PixelArt} width={500} height={500}
      />
    );
  }

  const about = () => {
    return(
    <Grid container sx={{paddingTop: "35px"}}>
      <Grid item={true} xs={12}>
        <CustomizedTitle>
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
        <Typography variant="subtitle2" sx={{paddingTop: '25px'}}>
            Industry experience in delivering enterprise and start up solutions <br />
            Agile advocate <br />
            Proficient in AWS and Azure <br />
          </Typography>
        </CustomizedContent>
      </Grid>
    </Grid>
    );
  }

  const currentPorfolio : GithubProjects = [{
    "name": "flippy",
    "shorthand": "flip",
    "description": "flippy is about a bird game",
    "url": "https://flippy.com"
  },
  {
    "name": "flippy",
    "shorthand": "flip",
    "description": "flippy is about a bird game",
    "url": "https://flippy.com" 
  }];

  return (
    <MainContainer>
      <Header />
      <ContentContainer content={about()} />
      <ContentContainer content={<SplitContentContainer GithubProjects={currentPorfolio}/>}/>
      <ContentContainer content={<Footer />}/>
    </MainContainer>
  )
}
