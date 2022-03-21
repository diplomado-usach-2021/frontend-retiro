import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import { Avatar, Box, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const useStyles = makeStyles({
  paper: {
    marginTop: 8,
    display : "flex",
    flexDirection :"column",
    alignItems : "center"
  },
  form: {
      width : "100%",
      marginTop : 10,
      marginBottom : 20
  },
  avatar: {
      margin : 5,
      background : 'primary.light',
      width : 100,
      height: 100
  },
  title: {
      marginTop : 15,
  },
  avatarIcon: {
      fontSize: '80px'
  }
});

const UserProfile = () => {
  const classes = useStyles();
  
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    username: "",
  });

  const ingresarValoresMemoria = (e) => {
    const { name, value } = e.target;
    setUser((anterior) => ({
      ...anterior,
      [name]: value,
    }));
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Administrator"
        control={<Checkbox/>}
      />
      <FormControlLabel
        label="Reader"
        control={<Checkbox/>}
      />
    </Box>
  );
  
  return (
    <>
    <Container maxWidth="sm">
    <div className={classes.paper}>
       <Avatar className={classes.avatar}>
         <AccountCircleIcon className={classes.avatarIcon}/>
       </Avatar>
        <Typography className={classes.title} component="h1" variant="h5">
          User profile
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <TextField
                              disabled={true}

                name="fullName"
                variant="outlined"
                fullWidth
                label={"Write name and last name"}
                value={user.username}

              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                disabled={true}
                name="username"
                value={user.username}
                onChange={ingresarValoresMemoria}
                variant="outlined"
                fullWidth
                label={"Write username"}

              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                disabled={true}
                name="email"
                value={user.email}
                onChange={ingresarValoresMemoria}
                variant="outlined"
                fullWidth
                label={"Write email"}
              />
            </Grid>
            <Grid item xs={12} md={6}>
            <FormControlLabel
              label="Select all"
              control={
                <Checkbox
                />
              }
            />
            {children}
            </Grid>
          </Grid>
        </form>
      </div>      
    </Container>
  </>
      )
}

export default UserProfile