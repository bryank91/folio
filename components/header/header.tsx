import { AppBar, Toolbar, Typography, Button, Grid } from "@mui/material";
import React from "react";

export default function Header() {
    const buttonLinks = (name : any, link : any) => {
        return(
            <Button color="inherit" href={link}>
                {name}
            </Button>
        )
    }

    const display = () => {
        return (    
            <Toolbar>
            <Grid justifyContent='space-between' container>
            <Grid>
                <Typography>
                    Khooo.dev
                </Typography>
            </Grid>
            <Grid>
                {buttonLinks("home","/")}
                {buttonLinks("portfolio","/portfolio")}
                {buttonLinks("contact","/contact")}        
            </Grid>
            </Grid>
            </Toolbar>
        )
    }

    return (
        <header>
            <AppBar>{display()}</AppBar>
        </header>
    )
}


