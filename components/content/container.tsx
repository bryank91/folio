import React from "react";
import Box from '@mui/material/Box';
import Header from "../header/header";
import Footer from "../footer/footer";

export default function ContentContainer({content} : any) {
    return (
        <Box sx={{  
            backgroundColor: 'white', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',                                      
        }}>
            {content}  
        </Box>
    )
}