import React, {useState} from 'react'
import { Avatar, Menu, MenuItem, Button, Divider, ListItemIcon, ListItemText } from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { Logout } from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const NavAvatar = () => {
    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openMenu = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    function stringAvatar(name: string) {
      return {
        sx: {
          bgcolor: 'primary.light',
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
      };
    }

    const StyledBadge = styled(Badge)(({ theme }) => ({
      '& .MuiBadge-badge': {  
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      },
    }));

    const logoutButton = () => {
      navigate('/');
    };

    const goToProfile = () => {
      navigate('/user/profile');
    };
    
  return (
    <div style={{marginLeft:"auto"}}>
            <Button
              id="basic-button"
              aria-controls={openMenu ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openMenu ? 'true' : undefined}
              onClick={handleClick}
              >
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                <Avatar {...stringAvatar('Hector Catalan')} />
                </StyledBadge>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
              MenuListProps={{
                  'aria-labelledby': 'basic-button',
              }}
              >
              <MenuItem onClick={() => { goToProfile(); handleClose();}}>
                <ListItemIcon>
                  <PersonIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>Mi perfil</ListItemText>
              </MenuItem>
              <Divider />
              <MenuItem onClick={() => { logoutButton(); handleClose();}}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cerrar sesión</ListItemText>
              </MenuItem>
            </Menu>
    </div>  
    )
}

export default NavAvatar