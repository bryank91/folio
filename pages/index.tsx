import * as React from 'react'
import Header from '../components/header/header'
import ContentContainer from '../components/content/container';
import { Grid, Box, Paper} from '@mui/material';
import { styled } from '@mui/material/styles';

export default function Home() {
  const CustomizedTitle = styled(Paper) `
    background-color: #fff;
    text-align: center;
    font-size: 200%
  `

  const CustomizedContent = styled(Paper)`
    background-color: #fff;
    text-align: center;
    font-size: large;
  `

  const content = () => {
    return(
    <Box sx={{ flexGrow: 1 , height: '200vh', bgcolor: '#fff', paddingTop: "5em"}}>
      <Grid container>
        <Grid xs={12}>
          <CustomizedTitle>Khoo.dev</CustomizedTitle>
        </Grid>
        <Grid xs={12} paddingTop='150px'>
        <CustomizedContent>
          <p>Experience Full Stack Developer</p>
          <p>In love with all things cloud and automation</p>
        </CustomizedContent>
        </Grid>
      </Grid>
    </Box>
    );
  }

  const portfolio = () => {
    return(
    <Box sx={{ flexGrow: 1 , height: '200vh', bgcolor: '#fff', paddingTop: "5em"}}>
      <Grid container>
        <Grid xs={12}>
          <CustomizedTitle>Khoo.dev</CustomizedTitle>
        </Grid>
        <Grid xs={12} paddingTop='150px'>
        <CustomizedContent>
          <p>Experience Full Stack Developer</p>
          <p>In love with all things cloud and automation</p>
        </CustomizedContent>
        </Grid>
      </Grid>
    </Box>
    );
  }

  return (
    <div>
      <Header />
      <ContentContainer content={content()}/>
    </div>
  )
}
