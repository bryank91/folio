import React from "react";
import { Typography, Grid } from "@mui/material";

function StaticFooter({ commit } : any) {
    
    const versionFooter = (version: string | null) => {
        const versionString = version ? version.slice(-8) : "Loading..."
        
        return (
            <Typography variant="caption">
                {versionString}
            </Typography>
        )
    }

    const footer = () => {
        return(
            <Grid justifyContent='space-between' style={{color: "grey"}}>
                {versionFooter(commit)}
            </Grid>
        )
    }
    
    return (
        footer()
    )
}

export default StaticFooter;
