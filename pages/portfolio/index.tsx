import Grid from '@mui/material/Grid';
import ContentContainer from '../../components/content/container';
import { Typography } from '@mui/material';

const content = () => {
    return (     
      <Grid container>
        <Grid item={true} xs={12}>
          <Typography style={{textAlign: "center"}} variant="h4">
              Test
          </Typography>
        </Grid>                 
      </Grid>
    )
}

export default function Home() {
    return (
        <div>
            <ContentContainer content={content()} />
        </div>
      ); 
}