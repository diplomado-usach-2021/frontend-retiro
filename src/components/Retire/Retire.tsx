import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import config from "../../config";

const api_rest = config.api_url;

const Retire = () => {
    const [retire, setRetire] = useState({
        ahorro: '',
        sueldo: ''
    });

    const [dxc, setDxc] = useState({
        ahorro: 0,
        dxc: 0,
        impuesto: 0,
        saldo: 0,
        sueldo: 0
    })

    const [responseDxc, setResponseDxc] = useState(false)
      
    const addDataInMemory = e => {
    const {name, value} = e.target;
        setRetire(prev => ({
          ...prev,
          [name]: value
        }))
    }

    const submitForm = async (e) => {
    e.preventDefault();
    await axios.get(`${api_rest}/rest/msdxc/dxc`, {
        params: {"ahorro":retire.ahorro,"sueldo":retire.sueldo}
        })
        .then(function (response) {
            console.log(response.data);
            setDxc(response.data)
            setResponseDxc(true);
        })
        .catch(function (error) {
            console.log(error);
        })
        .then(function () {
            // setRetire({ahorro:'',sueldo:''})
        });  
    }

  return (
    <>
        <Container maxWidth="sm">
            <Box 
                component="form"
                onSubmit={submitForm}
             >
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: "auto",
                    }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h6" >
                            Ingrese los siguientes datos para calcular su 10%
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField 
                            id="ahorro" 
                            label="Ingrese monto ahorrado" 
                            variant="outlined" 
                            fullWidth
                            required
                            name="ahorro"
                            onChange={addDataInMemory}
                            value={retire.ahorro}
                            type="number"
                        />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <TextField 
                            id="sueldo" 
                            label="Ingrese su sueldo actual" 
                            variant="outlined" 
                            fullWidth
                            required
                            name="sueldo"
                            onChange={addDataInMemory}
                            value={retire.sueldo}
                            type="number"
                        />
                    </Grid>
                </Grid>
                <Grid container sx={{mt:'10px'}} justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Button
                            id="button-calculate"
                            type="submit"
                            fullWidth
                            variant="contained"
                            size='large'
                            color='primary'
                        >
                            Calcular
                        </Button>
                    </Grid>
                </Grid>       
            </Paper>     
            

             </Box>

             <Box>
                <Paper
                    sx={{
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: "auto",
                        mt: 3
                    }}
                >
                    <Box sx={{ width: '100%', maxWidth: 500 }}>
                    <Typography variant="h6" gutterBottom component="div">
                        Detalle de su solicitud:
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        Moto a retirar: <b id='getAmount'> ${dxc.dxc ? new Intl.NumberFormat('de-DE').format(dxc.dxc) : 0 }</b>
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                        Saldo disponible: <b id="getAvailable">${dxc.saldo ? new Intl.NumberFormat('de-DE').format(dxc.saldo) : 0 }</b>
                    </Typography>
                    <Typography  variant="subtitle1" gutterBottom component="div">
                        Impuesto retiro de 10%: <b id="getTax"> ${dxc.impuesto ? new Intl.NumberFormat('de-DE').format(dxc.impuesto) : 0 }</b> 
                    </Typography>
                    {
                        responseDxc && 
                        <Typography id="calculateValues" variant="caption" display="block" gutterBottom>
                            C??lculos hechos en base a un ahorro de: <b id='ahorro'>${new Intl.NumberFormat('de-DE').format(dxc.ahorro)}</b> y sueldo de <b id='ahorro'>${new Intl.NumberFormat('de-DE').format(dxc.sueldo)}</b> 
                        </Typography>
                    }
                    
                    </Box>
                </Paper>     
             </Box>
        </Container>
    </>    )
}

console.log();


export default Retire