"use client";

import { useEffect, useRef } from "react";
import { pageMarkup } from "./page-markup";

const environmentSlideSelector = "[data-environment-slide]";
const environmentTabSelector = "[data-environment-tab]";
const reviewSlideSelector = "[data-review-slide]";
const reviewDotSelector = "[data-review-dot]";

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    const slides = Array.from(root.querySelectorAll<HTMLElement>(environmentSlideSelector));
    const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>(environmentTabSelector));
    const reviewSlides = Array.from(root.querySelectorAll<HTMLElement>(reviewSlideSelector));
    const reviewDots = Array.from(root.querySelectorAll<HTMLButtonElement>(reviewDotSelector));
    const bookingForm = root.querySelector<HTMLFormElement>("#bookingForm");
    const formStatus = root.querySelector<HTMLElement>("#formStatus");
    let environmentIndex = 0;
    let reviewIndex = 0;
    let environmentTimer: number | undefined;
    let reviewTimer: number | undefined;

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
      if (environmentTimer !== undefined) {
        window.clearInterval(environmentTimer);
      }
      environmentTimer = window.setInterval(() => {
        showEnvironmentSlide((environmentIndex + 1) % slides.length);
      }, 5200);
    };

    const showReviewSlide = (index: number) => {
      reviewIndex = index;
      reviewSlides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === index;
        slide.classList.toggle("is-active", isActive);
        slide.setAttribute("aria-hidden", String(!isActive));
      });
      reviewDots.forEach((dot, dotIndex) => {
        const isActive = dotIndex === index;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-label", `查看第 ${dotIndex + 1} 条客户评价`);
      });
    };

    const startReviewCarousel = () => {
      if (reviewTimer !== undefined) {
        window.clearInterval(reviewTimer);
      }
      reviewTimer = window.setInterval(() => {
        showReviewSlide((reviewIndex + 1) % reviewSlides.length);
      }, 4600);
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

    const reviewHandlers = reviewDots.map((dot) => {
      const handler = () => {
        showReviewSlide(Number(dot.dataset.reviewDot));
        startReviewCarousel();
      };
      dot.addEventListener("click", handler);
      return { dot, handler };
    });

    if (reviewSlides.length > 0 && reviewDots.length > 0) {
      showReviewSlide(0);
      startReviewCarousel();
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
      if (environmentTimer !== undefined) {
        window.clearInterval(environmentTimer);
      }
      if (reviewTimer !== undefined) {
        window.clearInterval(reviewTimer);
      }
      tabHandlers.forEach(({ tab, handler }) => {
        tab.removeEventListener("click", handler);
      });
      reviewHandlers.forEach(({ dot, handler }) => {
        dot.removeEventListener("click", handler);
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
