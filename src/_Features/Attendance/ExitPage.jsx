import React, { useEffect } from 'react';
import { useAttendance } from './apiHookAttendance';
import AttendanceExit from './AttendanceExit';

export default function ExitPage() {
  const { handleExit, loading, error, successMessage, resetStates } = useAttendance();

  useEffect(() => {
    return () => resetStates();
  }, []);

  return (
    <AttendanceExit 
      onAction={handleExit}
      loading={loading}
      error={error}
      successMessage={successMessage}
      resetStates={resetStates}
    />
  );
}