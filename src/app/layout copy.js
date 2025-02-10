'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

import { CssBaseline, Container, Box, AppBar, Toolbar, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Load Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Custom MUI Theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#009688',  // Blue 
    },
    secondary: {
      main: '#616161',  // Pink
    },
    background: {
      default: 'rgb(255, 255, 255)',  // Light gray background
    },
  },
  typography: {
    fontFamily: 'var(--font-geist-sans), sans-serif',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '5',
        },
      },
    },
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider theme={theme}>
          <CssBaseline />


          <AppBar position="static" color="primary">
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                My Next.js App
              </Typography>
              <Navigation />
            </Toolbar>
          </AppBar>

          <Container maxWidth="md" sx={{ marginTop: 4, minHeight: '80vh' }}>
            {children}
          </Container>

          {/* Footer */}
          <Box component="footer" sx={{ backgroundColor: 'primary.main', color: 'white', padding: 2, textAlign: 'center' }}>
            <Footer />
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
} 
