import React from "react";
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";
import Porfolio from "./portfolio";
import { Container } from "@mui/system";
import { styled } from '@mui/material/styles';
import { GithubProject, TypeGithubProjects } from "../../types/project";

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

export function SplitContentContainer({GithubProjects} : TypeGithubProjects) {
  
    const GridContainer = styled(Grid)`
        flex-grow: 1;
        padding-left: 25px;
        padding-right: 25px;
    `

    const portfolio = (item : GithubProject) => {
      return (
        <div style={{paddingTop: "35px"}}>
          <Porfolio data={item} />
        </div>
      )
    }

    return (        
        <GridContainer container spacing={2}>
            {
                GithubProjects.map((item : GithubProject, index) => {
                    return (
                        <Grid item={true} key={'item-' + index} xs={4}>
                            {portfolio(item)}
                        </Grid>
                    )
                })
            }
        </GridContainer>
    )
}