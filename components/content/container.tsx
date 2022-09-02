import React from "react";
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";
import Porfolio from "./portfolio";
import { Container } from "@mui/system";
import { styled } from '@mui/material/styles';

export function MainContainer({children} : any) {
    return (
        <Container maxWidth="md">
            {children}
        </Container>   
    )
}

export function ContentContainer({content} : any) {

    const BoxContent = styled(Box)`
        background-color: #141630; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `

    return (
        <BoxContent>
            {content}  
        </BoxContent>
    )
}

export function SplitContentContainer() {

    const flippy = {
        name: "Flippy",
        description: "Flippy",
        shorthand: "Flippy",
        url: "Flippy"
    }
  
    const portfolio = () => {
      return (
        <div style={{paddingTop: "35px"}}>
          <Porfolio data={flippy} />
        </div>
      )
    }

    return (        
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={4}>
                {portfolio()}
            </Grid>
            <Grid item xs={4}>
                {portfolio()}
            </Grid>
            <Grid item xs={4}>
                {portfolio()}
            </Grid>
            <Grid item xs={4}>
                {portfolio()}
            </Grid>
            <Grid item xs={4}>
                {portfolio()}
            </Grid>
            <Grid item xs={4}>
                {portfolio()}
            </Grid>
        </Grid>
    )
}