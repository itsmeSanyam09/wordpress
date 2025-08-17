import React, { useEffect, useState } from "react";

const SplashScreen = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide splash screen after 2 seconds
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // If the splash is not visible, render null -> nothing.
  if (!visible) return null;

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black">
      <img src="/images/LOGO.png" alt="Your Logo" className="w-60 h-20 rotate-animation" />
    </div>
  );
};

export default SplashScreen;
