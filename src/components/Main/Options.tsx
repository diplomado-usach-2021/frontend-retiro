import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import logo1 from '../../images/logo.png'
import logo2 from '../../images/logo2.png'

import {useNavigate} from 'react-router-dom';

export default function Options() {
  const navigate = useNavigate();

  const goToRetire = () => {
    navigate('/retire');
  };

  return (
    <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          p: 1,
          m: 1,
          borderRadius: 1,
        }}
      >
        <Card sx={{ maxWidth: 345, mt: '20px' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={logo1}
              alt="retire"
              onClick={goToRetire}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Retirar 10%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                En esta opción usted podrá retirar el 10% de sus fondos previsionales 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        {/* <Card sx={{ maxWidth: 345, mt: '20px' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={logo2}
              alt="retire"
              onClick={e => e.preventDefault()}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Simular 10%
              </Typography>
              <Typography variant="body2" color="text.secondary">
                En esta opción usted podrá simular el 10% de sus fondos previsionales 
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card> */}
      </Box>
  );
}
