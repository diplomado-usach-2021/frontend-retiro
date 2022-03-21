import * as React from 'react';
import Typography from '@mui/material/Typography';
import Title from './Title';


export default function Welcome() {
  return (
    <React.Fragment>
      <Title>Bienvenidos al portal RetiroAFP</Title>
      <Typography component="p" variant="h5">
            En el portal ud. podrá realizar o simular el retiro del 10% de su AFP.
      </Typography>
    </React.Fragment>
  );
}