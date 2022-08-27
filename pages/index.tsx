import * as React from 'react'
import ContentContainer from '../components/content/container';
import { Grid, Paper, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image'
import PixelArt from "../public/images/pixelart.png"

export default function Home() {

  const CustomizedTitle = styled(Paper) `
    background-color: #fff;
    text-align: center;
    font-size: 200%;
    box-shadow: none;
  `

  const CustomizedContent = styled(Paper)`
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

  const content = () => {
    return(
    <Grid container>
      <Grid xs={12}>
        <CustomizedTitle>
          <Typography variant="h2">KHOO.dev</Typography>
        </CustomizedTitle>
      </Grid>
      <Grid xs={12} display="flex" justifyContent="center" alignItems="center">
        <ImageBox />
      </Grid>
      <Grid xs={12}>
        <CustomizedContent>
          <Typography variant="h4">Experience Full Stack Developer</Typography>
          <Typography variant="subtitle1">In love with all things cloud and automation</Typography>
        </CustomizedContent>
      </Grid>
    </Grid>
    );
  }

  return (
    <div>
      <ContentContainer content={content()}/>
    </div>
  )
}
