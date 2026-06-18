import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Alert, CircularProgress, Card, CardContent } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

export default function AttendanceEntrance({ onAction, loading, error, successMessage, resetStates }) {
  const [tz, setTz] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tz.trim()) return;
    onAction(tz); // מפעיל את ה-Hook
  };

  return (
    <Card sx={{ maxWidth: 500, margin: '40px auto', boxShadow: 3, borderRadius: 2 }}>
      <CardContent sx={{ p: 4 }}>
        <Box 
          component="form" 
          onSubmit={handleSubmit} 
          sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center' }}
        >
          <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold', mb: 1 }}>
            דיווח כניסה לעבודה
          </Typography>
          
          <TextField
            label="תעודת זהות"
            variant="outlined"
            fullWidth
            value={tz}
            onChange={(e) => {
              resetStates(); // מאפס הודעות קודמות בזמן הקלדה חדשה
              setTz(e.target.value.replace(/\D/g, '')); // מאפשר רק ספרות
            }}
            disabled={loading}
            //inputProps={{ maxLength: 9 }}
            slotProps={{ htmlInput: { maxLength: 9 } }}
            placeholder="הקש 9 ספרות"
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary" // משתמש אוטומטית ב-BtnPrimaryColor מהתמה שלך
            fullWidth
            size="large"
            disabled={loading || tz.length < 9}
            startIcon={loading ? <CircularProgress size={24} color="inherit" /> : <LoginIcon />}
            sx={{ py: 1.5, fontSize: '1.2rem', fontWeight: 'bold' }}
          >
            {loading ? 'רושם כניסה...' : 'אישור כניסה'}
          </Button>

          {/* הצגת הודעות מהשרת */}
          {error && <Alert severity="error" sx={{ width: '100%' }}>{error}</Alert>}
          {successMessage && <Alert severity="success" sx={{ width: '100%' }}>{successMessage}</Alert>}
        </Box>
      </CardContent>
    </Card>
  );
}