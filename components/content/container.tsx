import React from "react";
import Container from '@mui/material/Container';

export default function ContentContainer({content} : any) {
    return (
        <Container >
            {content}
        </Container>
    )
}