import { Typography, Card, CardContent, CardActions, Button, styled} from '@mui/material';
import * as React from 'react'
import { Project } from '../../types/project';

export default function Porfolio({data} : Project) {

    const PortfolioCard = styled(Card)`
        background-color: white;
        min-height: 300px;
    `

    const DescriptionTypography = styled(Typography)`
        height: 100px;
        margin-bottom: 25px;
        text-overflow: ellipsis;
        overflow: hidden;
    `

    const date = new Date(data.updated!)
    const prettyDate = date.toISOString().substring(0, 10)
    
    const portfolio = () => {
        return(
            <PortfolioCard variant="outlined">
                <CardContent>
                    <Typography variant="h5" color="text.secondary" gutterBottom>
                    {data.name}
                    </Typography>
                    <DescriptionTypography variant="body2" color="text.secondary">
                    {data.description}
                    </DescriptionTypography>
                    <Typography variant="caption">
                    {data.language}
                    </Typography>
                    <Typography variant="body2">
                    Last updated: {prettyDate}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button href={data.url!} size="small">Learn More</Button>
                </CardActions>
            </PortfolioCard>
        )
      }

    return portfolio();
}