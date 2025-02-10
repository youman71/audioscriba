'use client'
import { useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const UnsplashImageCard = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?client_id=r9GnqOulwCy1qu1v1OoOqw7FTVDYRnZpTaVW5MgMje4`
      );
      const data = await response.json();
      setImage(data.urls.regular);
    };

    fetchImage();
  }, []);

  return (
    <Card sx={{ height : 500 ,maxWidth: 700, margin: 'auto', mt: 5, borderRadius: 3, boxShadow: 3 }}>
      {image ? (
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt="Random Unsplash"
        />
      ) : (
        <CardContent>
          <Typography variant="h6" color="text.secondary" align="center">
            Loading...
          </Typography>
        </CardContent>
      )}
      {image && (
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Random Unsplash Image
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default UnsplashImageCard;
