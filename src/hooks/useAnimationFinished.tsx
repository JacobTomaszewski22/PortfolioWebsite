import { useState, useEffect, RefObject } from "react";

export const useAnimationFinished = (className: string) => {
  const [animationFinished, setAnimationFinished] = useState(false);

  function animationListenerApplyOnEnd(event) {
    switch (event.type) {
      case "animationend":
        setAnimationFinished(true);
    }
  }
  // Usage
  waitForElement(className).then((element) => {
    console.log("Element exists:", element);
    // Perform actions on the element
    const naviagtionElement = Array.from(
      document.getElementsByClassName(
        className,
      ) as HTMLCollectionOf<HTMLElement>,
    )[0];
    if (naviagtionElement) {
      naviagtionElement.addEventListener(
        "animationend",
        animationListenerApplyOnEnd,
      );
    }
  });

  return animationFinished;
};

function waitForElement(selector: string) {
  return new Promise((resolve) => {
    const observer = new MutationObserver((mutations, observer) => {
      // const element = document.querySelector(selector);
      const element = Array.from(
        document.getElementsByClassName(
          selector,
        ) as HTMLCollectionOf<HTMLElement>,
      )[0];
      if (element) {
        observer.disconnect();
        resolve(element);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}
