"use client";

import { useInView } from "@/hooks/useInView";
import { useState, useEffect, useCallback, useRef } from "react";
import { Button } from "./ui/button";
import { APP_NAME } from "@/lib/constants";

const testimonials = [
  {
    id: 1,
    content: "We highly satisfied with their focused and talented healthcare team.",
    author: "John Doe",
    position: "CEO, Healthcare Solutions"
  },
  {
    id: 2,
    content: `We have partnered with ${APP_NAME} since July 2014, We have found them to be very proactive, reliable and consistent services provider's. Always ready to take on more work and go out of their way to deliver great service. They have helped us contain our administrative and operation cost considerably thereby helping improve our bottom line through the years.`,
    author: "Jane Smith",
    position: "Director of Operations, Medical Group"
  },
  {
    id: 3,
    content: "Their expertise in healthcare solutions has transformed our operations significantly.",
    author: "Robert Wilson",
    position: "CTO, Healthcare Tech"
  }
];

export function AnimatedTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [ref, isInView] = useInView();
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('next');
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 1000); // Match transition duration
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('prev');
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 1000); // Match transition duration
  }, [isAnimating]);

  const startSlideTimer = useCallback(() => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
    slideInterval.current = setInterval(() => {
      if (!isPaused && !isAnimating) {
        nextSlide();
      }
    }, 2000); // Change slide every 5 seconds
  }, [isPaused, isAnimating, nextSlide]);

  useEffect(() => {
    if (isInView) {
      startSlideTimer();
    }
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [isInView, startSlideTimer]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <section 
      ref={ref}
      data-animate={isInView}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-primary/80 text-lg font-medium mb-2">Testimonial</h2>
          <h3 className="text-4xl sm:text-5xl font-light text-gray-900">
            What Our Clients Think
          </h3>
        </div>

        <div className="relative mt-16">
          {/* Quote Icon */}
          <div className="absolute right-0 -top-12">
            <svg
              className="w-24 h-24 text-primary/10"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          {/* Testimonial Content */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ minHeight: '300px' }}
          >
            <div 
              key={currentSlide}
              className={`absolute w-full transition-all duration-900 transform ${
                isAnimating 
                  ? direction === 'next'
                    ? 'animate-[slideNext_0.9s_ease-in-out_forwards]'
                    : 'animate-[slidePrev_0.9s_ease-in-out_forwards]'
                  : ''
              }`}
              style={{ 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                opacity: isPaused ? 1 : 0.95,
                left: 0,
                right: 0
              }}
            >
              <div className="px-4">
                <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto text-center leading-relaxed">
                  {testimonials[currentSlide].content}
                </p>
                <div className="mt-8 text-center">
                  <p className="font-medium text-gray-900 text-center">{testimonials[currentSlide].author}</p>
                  <p className="text-gray-500 text-center">{testimonials[currentSlide].position}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full w-10 h-10 border-primary/20 text-primary hover:bg-primary/5 hover:text-primary/80"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full w-10 h-10 border-primary/20 text-primary hover:bg-primary/5 hover:text-primary/80"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
