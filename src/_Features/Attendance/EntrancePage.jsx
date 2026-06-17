import React, { useEffect } from 'react';
import { useAttendance } from './apiHookAttendance';
import AttendanceEntrance from './AttendanceEntrance';

export default function EntrancePage() {
  const { handleEntrance, loading, error, successMessage, resetStates } = useAttendance();

  // מנקה שגיאות או הודעות ישנות כשהקומפוננטה נסגרת/משתנה
  useEffect(() => {
    return () => resetStates();
  }, []);

  return (
    <AttendanceEntrance 
      onAction={handleEntrance}
      loading={loading}
      error={error}
      successMessage={successMessage}
      resetStates={resetStates}
    />
  );
}