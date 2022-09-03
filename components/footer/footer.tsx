import React, { useState } from "react";
import { Octokit } from "octokit";
import { Typography, Grid } from "@mui/material";

export default function Footer() {

    const [version, setVersion] = useState<string | null>(null);

    const octokit = new Octokit({
        auth: process.env.TOKEN
    })

    octokit.request("GET /repos/{owner}/{repo}/commits", {
        owner: "bryank91",
        repo: "folio",
      }).then((data) => {
        const sha = data.data[0].sha
        setVersion(sha);
      });
    
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
                {versionFooter(version)}
            </Grid>
        )
    }
    
    return (
        footer()
    )
}