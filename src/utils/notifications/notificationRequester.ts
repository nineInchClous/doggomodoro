export function requestNotificationPermission(): void {
  if (!('Notification' in window)) {
    console.log('This browser does not support notifications.');
    return;
  }

  if (Notification.permission === 'granted') {
    console.log('Notification permission already granted.');
    return;
  }

  if (Notification.permission !== 'denied') {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      } else {
        console.log('Notification permission denied.');
      }
    });
  }
}
