import { Box, Grid, Typography, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Email';  //phone icon not working why??
const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{
        backgroundColor: '#e8f5e9', // Light green background for a fresh feel
        padding: '40px 20px',
        color: '#4CAF50', // Dark green text
        textAlign: 'center',
        mt: 'auto',
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Location */}
        <Grid item xs={12} md={4}>
          <IconButton>
            <LocationOnIcon fontSize="large" sx={{ color: '#4CAF50' }} />
          </IconButton>
          <Typography variant="h6" gutterBottom>
            Visit our store
          </Typography>
          <Typography variant="body1">
            Ranipur, Mahmoorganj, Varanasi, Uttar Pradesh, 221010
          </Typography>
        </Grid>

        {/* Email */}
        <Grid item xs={12} md={4}>
          <IconButton>
            <EmailIcon fontSize="large" sx={{ color: '#4CAF50' }} />
          </IconButton>
          <Typography variant="h6" gutterBottom>
            Mail us
          </Typography>
          <Typography variant="body1">
            sabzicom2021@gmail.com
          </Typography>
        </Grid>

        {/* Phone */}
        <Grid item xs={12} md={4}>
          <IconButton>
            <PhoneIcon fontSize="large" sx={{ color: '#4CAF50' }} />
          </IconButton>
          <Typography variant="h6" gutterBottom>
            Call us
          </Typography>
          <Typography variant="body1">
            7607268008
          </Typography>
        </Grid>
      </Grid>

     
    </Box>
  );
}

export default Footer;
