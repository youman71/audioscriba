'use client'
import { TextField, Box, Button } from '@mui/material';
import { useState } from 'react';

const TextareaExample = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    alert(`Submitted: ${value}`);
  };

  return (
    <Box sx={{ maxWidth: 1000, margin: 'auto'}}>
      <TextField 
        label="Your Message"
        helperText="type your text"
        multiline
        rows={10}  // Specify the number of rows
        value={value}
        onChange={handleChange}
        fullWidth
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default TextareaExample;
