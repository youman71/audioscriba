"use client";

import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  CssBaseline,
  Container,
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// Load Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Function to create themes
const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "light" ? "#009688" : "#80cbc4",
      },
      secondary: {
        main: mode === "light" ? "#616161" : "#bdbdbd",
      },
      background: {
        default: mode === "light" ? "#ffffff" : "#121212",
        paper: mode === "light" ? "#f5f5f5" : "#1e1e1e",
      },
      text: {
        primary: mode === "light" ? "#000000" : "#ffffff",
      },
    },
    typography: {
      fontFamily: "var(--font-geist-sans), sans-serif",
    },
  });

export default function RootLayout({ children }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // State to manage theme mode
  const [themeMode, setThemeMode] = useState(prefersDarkMode ? "dark" : "light");

  // Update theme when system preference changes
  useEffect(() => {
    setThemeMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode]);

  // Toggle theme mode
  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = getTheme(themeMode);

  return (
    <html lang="en">
    <head><link
  rel="icon"
  href="/icon?<generated>"
  type="image/<generated>"
  sizes="<generated>"
/></head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          {/* AppBar with Theme Toggle Button */}
          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                My Next.js App
              </Typography>

             
              
              <Navigation />
              <Box ><IconButton onClick={toggleTheme} color="inherit" >
               {themeMode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
             </IconButton></Box>
            </Toolbar>
          </AppBar>

          {/* Main Content */}
          <Container maxWidth="md" sx={{ marginTop: 4, minHeight: "80vh" }}>
            {children}
          </Container>

          {/* Footer */}
          <Box
            component="footer"
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              padding: 2,
              textAlign: "center",
            }}
          > 
            <Footer />
             {/* Theme Toggle Button */}
             
          </Box>
          <Box ><IconButton onClick={toggleTheme} color="inherit" >
               {themeMode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
             </IconButton></Box>
          
        </ThemeProvider>
      </body>
    </html>
  );
}
