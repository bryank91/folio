import { Toolbar, Button, Grid } from "@mui/material";
import React from "react";

export default function Header() {
    const buttonLinks = (name : string, link : string) => {
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
                <div>
                    {buttonLinks("home","/")}
                    {buttonLinks("portfolio","/portfolio")}
                    {buttonLinks("contact","/contact")}
                </div>
            </Grid>
            </Toolbar>
        )
    }

    return (
        display()
    )
}

