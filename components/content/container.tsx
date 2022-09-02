import React from "react";
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";
import Porfolio from "./portfolio";
import { Container } from "@mui/system";
import { styled } from '@mui/material/styles';
import { GithubProject, GithubProjects, TypeGithubProjects } from "../../types/project";

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
  
    const portfolio = (item : GithubProject) => {
      return (
        <div style={{paddingTop: "35px"}}>
          <Porfolio data={item} />
        </div>
      )
    }

    return (        
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            {
                GithubProjects.map((item : GithubProject) => {
                    return (
                        <Grid item xs={4}>
                            {portfolio(item)}
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}