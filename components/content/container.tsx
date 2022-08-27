import React from "react";
import Box from '@mui/material/Box';
import Header from "../header/header";

export default function ContentContainer({content} : any) {
    return (
        <Box sx={{ border: '1px grey', 
        backgroundColor: 'white', 
        height: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
        }}>
            <Header />
            {content}
        </Box>
    )
}