import { Grid, Typography, Card} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';
import { styled } from '@mui/material/styles';
import "@fontsource/prompt";

const BigMainImage = styled('img')`
    text-align: center;
    width: 500px;
    height: 500px;
`

const SmallMainImage = styled('img')`
    text-align: center;
    width: 200px;
    height: 200px;
`

const CustomizedTitle = styled(Card) `
    background-color: #141630;
    text-align: center;
    font-size: 200%;
    box-shadow: none;
    color: white;
    padding-top: 25px;
`

const CustomizedContent = styled(Card)`
    background-color: #141630;
    text-align: center;
    font-size: large;
    box-shadow: none;
    color: white;
`

const ImageBox = () => {
    return(
      <div>
        <BigMainImage src="neon_room.jpg" alt="khoocodes" 
          	sx={{ display: { xs: 'none', sm: 'block' } }}
        />
        <SmallMainImage src="neon_room.jpg" alt="khoocodes"             	
            sx={{ display: { xs: 'block', sm: 'none' } }}
        />
      </div>
    );
}

const theme = createTheme({
    typography: {
      fontFamily: 'prompt'
    }    
  })


export default function About() {
    return(
    <Grid container sx={{paddingTop: "35px"}}>
      <Grid item={true} xs={12}>
        <CustomizedTitle>
          <ThemeProvider theme={theme}>
            <Typography variant="h2">khoo.codes</Typography>
          </ThemeProvider>
        </CustomizedTitle>
      </Grid>
      <Grid item={true} xs={12} display="flex" justifyContent="center" alignItems="center">
        <ImageBox />
      </Grid>
      <Grid id="about" item={true} xs={12}>
        <CustomizedContent>
          <Typography variant="h4">Full Stack Developer</Typography>
          <Typography variant="subtitle1">In love with all things cloud and automation</Typography>
        </CustomizedContent>
        <CustomizedContent>
        <Typography variant="subtitle2" sx={{paddingTop: '25px'}}>
            Industry experience in delivering enterprise and start up solutions <br />
            Agile advocate <br />
            Proficient in AWS and Azure <br />
          </Typography>
        </CustomizedContent>
      </Grid>
    </Grid>
    );
  }