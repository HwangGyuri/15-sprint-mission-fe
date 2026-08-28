import { useState, useEffect } from 'react';

const BREAKPOINTS = {
  tablet: 744,
  desktop: 1200,
};

function getDeviceType(width) {
  if (width >= BREAKPOINTS.desktop) return 'desktop';
  if (width >= BREAKPOINTS.tablet) return 'tablet';
  return 'mobile';
}

export function useDeviceType() {
  // 현재 기기 종류 저장
  const [deviceType, setDeviceType] = useState(() =>
    typeof window !== 'undefined'
      ? getDeviceType(window.innerWidth)
      : 'desktop',
  );
  console.log(deviceType);

  useEffect(() => {
    function handleResize() {
      setDeviceType(getDeviceType(window.innerWidth));
    }

    handleResize();
    // 사용자가 창 크기 바꾸면 handleResize함수 실행
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceType;
}
