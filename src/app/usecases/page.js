
"use client";

import { Card, CardContent, CardHeader } from "@mui/material";
import { Grid, Typography, Container } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import BookIcon from "@mui/icons-material/Book";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import ChatIcon from "@mui/icons-material/Chat";
import MicIcon from "@mui/icons-material/Mic";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import CampaignIcon from "@mui/icons-material/Campaign";
import HomeIcon from "@mui/icons-material/Home";

const useCases = [
  { title: "Audiobook & eBook Narration", icon: <BookIcon />, description: "Convert books and blogs into engaging audio content." },
  //{ title: "Accessibility for Visually Impaired", icon: <AccessibilityNewIcon />, description: "Help visually impaired users access digital content." },
  { title: "AI-Powered Customer Support", icon: <ChatIcon />, description: "Automate customer interactions with AI-driven voice assistants." },
  { title: "Language Learning & Pronunciation", icon: <HeadphonesIcon />, description: "Assist users in learning new languages with correct pronunciation." },
  { title: "Podcast & Content Creation", icon: <MicIcon />, description: "Generate high-quality AI voiceovers for podcasts and videos." },
  //{ title: "Corporate Training & eLearning", icon: <SchoolIcon />, description: "Convert training materials into engaging voice-based content." },
  { title: "Hands-Free News & Articles", icon: <NewspaperIcon />, description: "Enable users to listen to news while multitasking." },
  //{ title: "Gaming & Virtual Assistants", icon: <SportsEsportsIcon />, description: "Create realistic AI voices for NPCs in games and virtual assistants." },
  { title: "Personalized Marketing & Ads", icon: <CampaignIcon />, description: "Generate dynamic, customized audio ads." },
  //{ title: "Smart Devices & IoT", icon: <HomeIcon />, description: "Integrate voice technology into smart home devices and wearables." },
];

export default function UseCases() {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" textAlign="center" fontWeight="bold" mb={4}>
        Key Use Cases of Our Text-to-Speech SaaS
      </Typography>
      <Grid container spacing={3}>
        {useCases.map((useCase, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ p: 2, textAlign: "center", borderRadius: 3, boxShadow: 3 }}>
              <CardHeader 
                avatar={<span style={{ fontSize: "2rem", color: "#1976d2" }}>{useCase.icon}</span>}
                title={<Typography fontWeight="bold">{useCase.title}</Typography>}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">{useCase.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
