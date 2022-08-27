import React, { useState } from "react";
import { Octokit } from "octokit";
import { Typography } from "@mui/material";

export default function Footer() {

    const [version, setVersion] = useState<string | null>(null);

    const octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN
    })

    octokit.request("GET /repos/{owner}/{repo}/commits", {
        owner: "bryank91",
        repo: "folio",
      }).then((data) => {
        const sha = data.data[0].sha
        setVersion(sha);
      });
    
    const versionFooter = (version: string | null) => {
        const versionString = version ? version : "Loading..."
        
        return (
            <Typography variant="caption">
                {versionString}
            </Typography>
        )
    }

    const footer = () => {
        return(
            <div>
                {versionFooter(version)}
            </div>
        )
    }
    
    return (
        footer()
    )
}