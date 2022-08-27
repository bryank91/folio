import { Button, Grid, Typography, AppBar } from "@mui/material";
import React from "react";

export default function Header() {
    const buttonLinks = (name : string, link : string) => {
        return(
            <Button color="inherit" href={link}>
                <Typography variant="subtitle2">{name}</Typography>
            </Button>
        )
    }

    const display = () => {
        return (    
            <AppBar>
                <Grid justifyContent='space-between' container >    
                    <div style={{width: "100vw", textAlign: "center"}}>
                        {buttonLinks("home","/")}
                        {buttonLinks("portfolio","/portfolio")}
                        {buttonLinks("contact","/contact")}
                    </div>
                </Grid>
            </AppBar>
        )
    }

    return (
        display()
    )
}


