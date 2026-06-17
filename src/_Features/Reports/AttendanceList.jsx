import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from '@mui/material';

export default function AttendanceList({ reports }) {
  if (reports.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', mt: 4, p: 3, bgcolor: '#f5f5f5', borderRadius: 2 }}>
        <Typography variant="body1" color="textSecondary">
          לא נמצאו נתוני נוכחות עבור הבחירה הנוכחית.
        </Typography>
      </Box>
    );
  }

  return (
    <TableContainer component={Paper} sx={{ mt: 3, boxShadow: 2, borderRadius: 2, overflow: 'hidden' }}>
      <Table aria-label="טבלת שעות נוכחות">
        <TableHead sx={{ bgcolor: 'primary.main' }}>
          <TableRow>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>תאריך</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>שעת כניסה</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>שעת יציאה</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>סך הכל שעות</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reports.map((row, index) => (
            <TableRow 
              key={row.id || index} 
              sx={{ '&:nth-of-type(odd)': { bgcolor: 'action.hover' } }}
            >
              <TableCell>{row.date}</TableCell>
              <TableCell color="success.main">{row.entrance_time || '--:--'}</TableCell>
              <TableCell color="error.main">{row.exit_time || '--:--'}</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>{row.total_hours || '0'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}