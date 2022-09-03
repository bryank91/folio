import { Typography, Card, CardContent, CardActions, Button} from '@mui/material';
import * as React from 'react'
import { Project } from '../../types/project';

export default function Porfolio({data} : Project) {

    const portfolio = () => {
        return(
            <Card variant="outlined">
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {data.name}
                </Typography>
                <Typography variant="h5" component="div">
                {data.shorthand}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {data.url}
                </Typography>
                <Typography variant="body2">
                {data.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
            </Card>
        )
      }

    return portfolio();
}