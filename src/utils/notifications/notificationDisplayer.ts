export const showWorkTimeNotification = (): void => {
  const title = 'Time to work! 🐕';
  const options: NotificationOptions = { body: getRandomBody(workTimeBodies) };
  showNotification(title, options);
};

export const showBreakTimeNotification = (): void => {
  const title = "It's time to take a break! 🐶";
  const options: NotificationOptions = { body: getRandomBody(pauseTimeBodies) };
  showNotification(title, options);
};

const showNotification = (title: string, options?: NotificationOptions): void => {
  if (!('Notification' in window)) {
    console.log('This browser does not support notifications.');
    return;
  }

  if (Notification.permission === 'granted') {
    new Notification(title, options);
  } else {
    console.log('Notification permission not granted.');
  }
};

const getRandomBody = (bodies: string[]): string => {
  const randomIndex = Math.floor(Math.random() * bodies.length);
  return bodies[randomIndex];
};

const workTimeBodies = [
  'Your hard work and dedication will pay off.',
  'Stay positive and focused on your goals.',
  'You are capable of more than you think.',
  'Keep pushing forward, one step at a time.',
  'Every small step brings you closer to your goals.',
  'You are doing an amazing job. Keep it up!',
  "Keep learning and growing. You're on the right track!",
  'Believe in yourself and all that you are.',
];

const pauseTimeBodies = [
  'Take a moment to breathe and recharge.',
  'You deserve this break. Enjoy it!',
  'A pause can bring new perspectives. Relax and refresh.',
  'Rest is essential for productivity. Take your time.',
  'Use this pause to gather your thoughts and energy.',
  'Allow yourself to unwind and reset.',
  "You've been working hard. Enjoy this moment of rest.",
  'A short break can do wonders for your well-being.',
];
