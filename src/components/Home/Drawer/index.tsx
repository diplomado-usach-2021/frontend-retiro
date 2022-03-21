import React from 'react';
import {styled, useTheme, Theme, CSSObject} from '@mui/material/styles';
import {
  Box,
  Drawer as MuiDrawer,
  List,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  ListItem,
} from '@mui/material';

//Icon MUI
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import HomeIcon from '@mui/icons-material/Home';
import {useNavigate} from 'react-router-dom';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));


function MiniDrawer({ open, handleDrawerClose}) { 
  const theme = useTheme();
  const navigate = useNavigate();


  //Obj Data-Menu
  const itemList = [
    {
      text: 'Home',
      icon: <HomeIcon />,
      onClick: () => navigate('/main')
    },
    {
      text: 'Retirar 10%',
      icon: <PriceCheckIcon />,
      onClick: () => navigate('/retire')      
    }
  ];

  return (
    <Box sx={{display: 'flex'}}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {itemList &&
            itemList.map((item, index) => {
              const {text, icon, onClick} = item;
              return (
                <ListItem button key={text} onClick={onClick}>
                  {icon && <ListItemIcon> {icon} </ListItemIcon>}
                  <ListItemText primary={text} />
                </ListItem>
              );
            })}
        </List>
      </Drawer>
      <Box component="main" sx={{flexGrow: 1, p: 3}}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}

export default MiniDrawer;
