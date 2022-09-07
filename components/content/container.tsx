import React from "react";
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";
import Porfolio from "./portfolio";
import { Container } from "@mui/system";
import { styled } from '@mui/material/styles';
import { GithubProject, TypeGithubProjects } from "../../types/project";

export function MainContainer({children} : Record<string, React.ReactNode>) {
    return (
        <Container maxWidth="md">
            {children}
        </Container>   
    )
}

export function ContentContainer({content} : Record<string, React.ReactNode>) {

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

export function PortfolioContainer({GithubProjects} : TypeGithubProjects) {
  
    const GridContainer = styled(Grid)`
        flex-grow: 1;
        padding: 25px
    `

    const portfolio = (item : GithubProject) => {
      return (
        <div style={{paddingTop: "35px"}}>
          <Porfolio data={item} />
        </div>
      )
    }

    const GitHubProjectsSmall = () => {
        return (
            GithubProjects.map((item : GithubProject, index) => {
                return (
                        <Grid item={true} key={'item-' + index} xs={12}
                              sx={{ display: { xs: 'block', sm: 'none' } }}
                        >
                            {portfolio(item)}
                        </Grid>                        
                )
            })
        )};

    const GitHubProjectsBig = () => {
        return (
            GithubProjects.map((item : GithubProject, index) => {
                return (
                        <Grid item={true} key={'item-' + index} xs={4}
                              sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            {portfolio(item)}
                        </Grid>                        
                )
            })
    )};


    return (        
        <GridContainer id="portfolio" container spacing={2}>
            { GitHubProjectsBig() }
            { GitHubProjectsSmall() }
        </GridContainer>
    )
}