import { Button, Grid, Typography, AppBar } from "@mui/material";
import React from "react";
import { styled } from "@mui/material";

export default function Header() {

    const HeaderDiv = styled('div')`
        width: 100vw;
        text-align: center;
    `
    const HeaderContainer = styled(AppBar)`
        position: sticky;
        background-color: #141630;
    `

    const buttonLinks = (name : string, link : string) => {
        return(
            <Button color="inherit" href={link}>
                <Typography variant="subtitle2">{name}</Typography>
            </Button>
        )
    }

    const display = () => {
        return (    
            <HeaderContainer>
                <Grid justifyContent='space-between' container >    
                    <HeaderDiv>
                        {buttonLinks("home","/")}
                        {buttonLinks("portfolio","/portfolio")}
                        {buttonLinks("contact","/contact")}
                    </HeaderDiv>
                </Grid>
            </HeaderContainer>
        )
    }

    return (
        display()
    )
}


