'use client'
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Collapse, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function ResponsiveAppBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">MyApp</Typography>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleMenu} sx={{ display: { xs: 'block', md: 'none' } }}>
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {navItems.map((item) => (
            <Button key={item} color="inherit">
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>

      <Collapse in={menuOpen} sx={{ display: { xs: 'block', md: 'none' }, backgroundColor: 'primary.main' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
          {navItems.map((item) => (
            <Button key={item} color="inherit" onClick={toggleMenu} sx={{ justifyContent: 'flex-start' }}>
              {item}
            </Button>
          ))}
        </Box>
      </Collapse>
    </AppBar>
  );
} 