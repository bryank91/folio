import React from "react";
import Box from '@mui/material/Box';
import Header from "../header/header";
import Footer from "../footer/footer";

export default function ContentContainer({content} : any) {
    return (
        <Box sx={{  
            backgroundColor: 'white', 
            height: '100vh', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px solid grey'        
        }}>
            <Header />
            {content}
            <Footer />
        </Box>
    )
}