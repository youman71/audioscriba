import React, { useState } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Collapse from "@mui/material/Collapse";

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { label: "audio", href: "/audio" },
   // { label: "test1", href: "/test1" },
    //{ label: "About", href: "/about" },
    { label: "Use Cases", href: "/usecases" },
    //{ label: "Test", href: "/test" },
    { label: "Pricing", href: "/" },
    //{ label: "Users", href: "/users" },
    //{ label: "UserServer", href: "/users-server" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "sign up", href: "/" },
    { label: "login", href: "/sensitive" },
  ];

  return (
    <AppBar position="fixed" color="primary">
      
      <Toolbar sx={{ display: "flex", justifyContent: "space-between",margin:1 }}>
      <Typography 
  variant="h4" 
  gutterBottom 
  sx={{ 
    fontFamily: 'sans-serif', 
    fontWeight: "bold", 
    
    
  }}
>
<Link href="/" style={{ fontSize: "1.5rem" }}>AudioScriba</Link>
  
</Typography>

        <Typography variant="h6" component="div" >
     
        </Typography>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleMenu}
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          {navItems.map((item) => (
            <Button key={item.href} color="inherit" component={Link} href={item.href} 
            sx={{ 
              fontSize: "1.5rem" , textTransform: "capitalize",fontFamily:"Georgia, Serif",
              }}>
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>

      <Collapse
        in={menuOpen}
        sx={{ display: { xs: "block", md: "none" }, backgroundColor: "primary.main" }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
          {navItems.map((item) => (
            <Button
              key={item.href}
              color="inherit"
              component={Link}
              href={item.href}
              onClick={toggleMenu}
              sx={{ justifyContent: "flex-start", fontSize: "1.2rem" }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Collapse>
    </AppBar>
  );
};
