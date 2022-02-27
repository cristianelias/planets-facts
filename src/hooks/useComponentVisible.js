// Dependencies
import { useRef, useEffect, useState } from "react";

const useComponentVisible = (initialIsVisible) => {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);

  const refComponent = useRef(null);
  const refTrigger = useRef(null);

  const toggleVisibility = () => {
    setTimeout(() => setIsComponentVisible(!isComponentVisible), 50);
  };

  const handleClickOutside = (event) => {
    if (
      refComponent.current &&
      !refComponent.current.contains(event.target) &&
      !refTrigger.current.contains(event.target)
    ) {
      setIsComponentVisible(false);
    }
  };

  const handleTriggerClick = (event) => {
    if (refTrigger.current && refTrigger.current.contains(event.target)) {
      toggleVisibility();
    }
  };

  const handleContentClick = (event) => {
    if (refComponent.current && refComponent.current.contains(event.target)) {
      toggleVisibility();
    }
  };

  useEffect(() => {
    const triggerCurrentRef = refTrigger.current;
    const contentCurrentRef = refComponent.current;

    if (triggerCurrentRef) {
      triggerCurrentRef.addEventListener("click", handleTriggerClick, true);
    }

    if (contentCurrentRef) {
      contentCurrentRef.addEventListener("click", handleContentClick, true);
    }

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      if (triggerCurrentRef) {
        triggerCurrentRef.removeEventListener(
          "click",
          handleTriggerClick,
          true
        );
      }

      if (contentCurrentRef) {
        contentCurrentRef.removeEventListener(
          "click",
          handleContentClick,
          true
        );
      }

      document.removeEventListener("click", handleClickOutside, true);
    };
  });

  return {
    refComponent,
    refTrigger,
    isComponentVisible,
    setIsComponentVisible,
  };
};

export default useComponentVisible;
