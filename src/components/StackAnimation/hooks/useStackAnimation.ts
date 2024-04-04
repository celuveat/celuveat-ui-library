import { useState, useRef, useEffect } from "react";

export const useStackAnimation = (showDuration: number) => {
  const [isAdded, setIsAdded] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  const showAnimationRef = useRef<NodeJS.Timeout>();
  const hideAnimationRef = useRef<NodeJS.Timeout>();

  const handleHideAnimation = () => {
    hideAnimationRef.current = setTimeout(() => {
      setIsAdded(false);
      clearTimeout(showAnimationRef.current);
    }, showDuration);
  };

  useEffect(() => {
    showAnimationRef.current = setTimeout(() => {
      setIsVisible(false);
      handleHideAnimation();
    }, showDuration);

    return () => clearTimeout(hideAnimationRef.current);
  }, [showDuration, isVisible]);

  return { isAdded, isVisible };
};
