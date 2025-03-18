'use client';

import { useEffect } from 'react';
import { requestNotificationPermission } from '@/utils/notifications/notificationRequester';

const NotificationManager = () => {
  useEffect(() => {
    requestNotificationPermission();
  }, []);

  return <></>;
};

export default NotificationManager;
