import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import ContentContainer from '../../components/content/container';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const content = () => {
    return (     
      <Grid container>
        <Grid xs={12}>  
          <Item>
              Item 1
          </Item>   
        </Grid>
        <Grid xs={12}>  
          <Item>
              Item 2
          </Item>       
        </Grid>
        <Grid xs={12}>  
          <Item>
              Item 3
          </Item>       
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