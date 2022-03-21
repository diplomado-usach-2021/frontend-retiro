import React, { useState } from 'react';
import NavBar from 'components/Home/NavBar';
import Drawer from 'components/Home/Drawer';

const Index = () => {  
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <NavBar open={open} handleDrawerOpen={handleDrawerOpen} />
      <Drawer open={open} handleDrawerClose={handleDrawerClose} />
    </>
  );
};

export default Index;
