import React, { useState, useEffect } from 'react';
import { Box, Card, CardContent, TextField, Button, Typography, MenuItem, CircularProgress, Alert } from '@mui/material';
import AssessmentIcon from '@mui/icons-material/Assessment';
import { useReports } from './apiHookReports';
import AttendanceList from './AttendanceList';

export default function AttendanceReports() {
  const { reports, loading, error, getReports, clearReports } = useReports();
  
  const [tz, setTz] = useState('');
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    return () => clearReports();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tz.trim()) return;
    getReports(tz, month, year);
  };

  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const years = [2024, 2025, 2026];

  return (
    <Box sx={{ maxWidth: 900, margin: '0 auto', p: 2 }}>
      <Card sx={{ boxShadow: 3, borderRadius: 2, mb: 4 }}>
        <CardContent sx={{ p: 3 }}>
          <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center' }}>
            דוחות נוכחות שעות
          </Typography>

          <Box component="form" onSubmit={handleSubmit}>
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' }, 
                gap: 2, 
                alignItems: 'center',
                width: '100%'
              }}
            >
              <Box sx={{ flex: { xs: '100%', sm: 4 }, width: '100%' }}>
                <TextField
                  label="תעודת זהות עובד"
                  variant="outlined"
                  fullWidth
                  value={tz}
                  onChange={(e) => setTz(e.target.value.replace(/\D/g, ''))}
                  slotProps={{ htmlInput: { maxLength: 9 } }} // תואם ל-React החדש
                  required
                />
              </Box>
              
              <Box sx={{ flex: { xs: '100%', sm: 3 }, width: '100%' }}>
                <TextField
                  select
                  label="חודש"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  fullWidth
                >
                  {months.map((m) => (
                    <MenuItem key={m} value={m}>{m}</MenuItem>
                  ))}
                </TextField>
              </Box>

              <Box sx={{ flex: { xs: '100%', sm: 3 }, width: '100%' }}>
                <TextField
                  select
                  label="שנה"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  fullWidth
                >
                  {years.map((y) => (
                    <MenuItem key={y} value={y}>{y}</MenuItem>
                  ))}
                </TextField>
              </Box>

              <Box sx={{ flex: { xs: '100%', sm: 2 }, width: '100%' }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  disabled={loading || tz.length < 9}
                  startIcon={<AssessmentIcon />}
                  sx={{ height: 56, fontWeight: 'bold' }}
                >
                  הפקה
                </Button>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {error && <Alert severity="error" sx={{ mt: 2 }}>{error}</Alert>}

      {!loading && !error && <AttendanceList reports={reports} />}
    </Box>
  );
}