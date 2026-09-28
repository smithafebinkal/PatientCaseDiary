import { useEffect, useState } from 'react';
import DashboardSm from './DashboardSm/DashboardSm';
import DashboardLarge from './DashboardLarge/DashboardLarg';

const MOBILE_BREAKPOINT = 768;

export default function Dashboard() {
  const [isSmallScreen, setIsSmallScreen] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth <= MOBILE_BREAKPOINT : false,
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isSmallScreen ? <DashboardSm /> : <DashboardLarge />;
}
