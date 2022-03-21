import { Container, Grid, Paper } from '@mui/material'
import React from 'react'
import Welcome from './Welcome'
import Options from './Options'


  
const index = () => {
  return (
    <>
        <Container maxWidth="md">
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            minHeight: "auto",
                        }}
                        >
                        <Welcome />
                    </Paper>
                </Grid>
            </Grid>
            <Options/>
        </Container>
    </>
  )
}

export default index