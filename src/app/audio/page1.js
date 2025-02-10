"use client";
import { useState } from "react";
import { TextField, Button, ButtonGroup, CircularProgress, Typography, Box } from "@mui/material";

const voices = ["michael", "george", "lewis", "bella", "emma", "nicole", "sarah", "isabella", "sky", "adam"];

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [inputText, setInputText] = useState("");
  const [selectedVoice, setSelectedVoice] = useState("sarah");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleVoiceChange = (voice: string) => {
    setSelectedVoice(voice);
  };

  const generateAudio = async () => {
    if (!inputText.trim()) {
      setError("Please enter some text.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api.lemonfox.ai/v1/audio/speech", {
        method: "POST",
        headers: {
          "Authorization": "Bearer Dz0IFPHdVJ2R16m0ol6Vo28Rp0Qi5Cic", // Replace with your API key
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: inputText,
          voice: selectedVoice,
          response_format: "mp3",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate audio.");
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);

      const link = document.createElement("a");
      link.href = audioUrl;
      link.download = "speech.mp3";
      link.click();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: "auto", mt: 5, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Text-to-Speech Audio Generator
      </Typography>

      <TextField
        label="Enter text"
        fullWidth
        multiline
        rows={4}
        value={inputText}
        onChange={handleInputChange}
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <Typography variant="h6">Select a Voice</Typography>
      <ButtonGroup variant="outlined" sx={{ mb: 2 }}>
        {voices.map((voice) => (
          <Button
            key={voice}
            onClick={() => handleVoiceChange(voice)}
            variant={selectedVoice === voice ? "contained" : "outlined"}
          >
            {voice}
          </Button>
        ))}
      </ButtonGroup>

      <Box>
        <Button
          variant="contained"
          color="primary"
          onClick={generateAudio}
          disabled={loading}
          sx={{ mt: 2 }}
        >
          {loading ? <CircularProgress size={24} /> : "Generate Audio"}
        </Button>
      </Box>

      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}
    </Box>
  );
}
