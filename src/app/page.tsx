import Timer from '@/components/timer/Timer';
import NotificationManager from '@/components/notifications/NotificationManager';

export default function Home() {
  return (
    <div>
      <NotificationManager />
      <Timer />
    </div>
  );
}
