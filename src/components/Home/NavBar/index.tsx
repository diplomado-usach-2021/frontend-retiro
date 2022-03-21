import React from 'react';
import { styled } from '@mui/material/styles';
import { 
    AppBar as MuiAppBar, 
    AppBarProps as MuiAppBarProps, 
    Box, 
    Toolbar, 
    CssBaseline, 
    Typography, 
    IconButton } from '@mui/material';

//Icon MUI
import MenuIcon from '@mui/icons-material/Menu';
import NavAvatar from '../NavBar/navAvatar';

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));


function NavBar({ open, handleDrawerOpen}) { 
    


    return (
    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                    marginRight: 5,
                    ...(open && { display: 'none' }),
                }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>RetiroAFP</Typography>
            <NavAvatar/>    
            <p>user@domain.cl</p>
          </Toolbar>
        </AppBar>
    </Box>
    );
}

export default NavBar;