import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * ScrollToTop component - Automatically scrolls to top when route changes
 * Ensures that when navigating between pages, the user starts at the top of the new page
 */
export function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top with smooth behavior when location changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, [location]);

  return null; // This component doesn't render anything
}