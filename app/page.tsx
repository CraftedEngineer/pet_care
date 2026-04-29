"use client";

import { useEffect, useRef } from "react";
import { pageMarkup } from "./page-markup";

const environmentSlideSelector = "[data-environment-slide]";
const environmentTabSelector = "[data-environment-tab]";

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    const slides = Array.from(root.querySelectorAll<HTMLElement>(environmentSlideSelector));
    const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>(environmentTabSelector));
    const bookingForm = root.querySelector<HTMLFormElement>("#bookingForm");
    const formStatus = root.querySelector<HTMLElement>("#formStatus");
    let environmentIndex = 0;
    let timer: number | undefined;

    const showEnvironmentSlide = (index: number) => {
      environmentIndex = index;
      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle("is-active", slideIndex === index);
      });
      tabs.forEach((tab, tabIndex) => {
        const isActive = tabIndex === index;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-selected", String(isActive));
      });
    };

    const startEnvironmentCarousel = () => {
      if (timer !== undefined) {
        window.clearInterval(timer);
      }
      timer = window.setInterval(() => {
        showEnvironmentSlide((environmentIndex + 1) % slides.length);
      }, 5200);
    };

    const tabHandlers = tabs.map((tab) => {
      const handler = () => {
        showEnvironmentSlide(Number(tab.dataset.environmentTab));
        startEnvironmentCarousel();
      };
      tab.addEventListener("click", handler);
      return { tab, handler };
    });

    if (slides.length > 0 && tabs.length > 0) {
      showEnvironmentSlide(0);
      startEnvironmentCarousel();
    }

    const handleBookingSubmit = (event: SubmitEvent) => {
      event.preventDefault();
      const formData = bookingForm ? new FormData(bookingForm) : undefined;
      const arrivalTime = formData?.get("arrivalTime");
      if (formStatus) {
        const timeText = typeof arrivalTime === "string" && arrivalTime
          ? `，期望到店时间为 ${arrivalTime.replace("T", " ")}`
          : "";
        formStatus.textContent = `预约信息已记录${timeText}，门店会尽快与您确认。`;
      }
      bookingForm?.reset();
    };

    bookingForm?.addEventListener("submit", handleBookingSubmit);

    return () => {
      if (timer !== undefined) {
        window.clearInterval(timer);
      }
      tabHandlers.forEach(({ tab, handler }) => {
        tab.removeEventListener("click", handler);
      });
      bookingForm?.removeEventListener("submit", handleBookingSubmit);
    };
  }, []);

  return (
    <div ref={rootRef}>
      <div dangerouslySetInnerHTML={{ __html: pageMarkup }} />
    </div>
  );
}
