import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const BarSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const images = containerRef.current.querySelectorAll("img");

    // Set initial position (off-screen right, invisible)
    gsap.set(images, { x: "100%", opacity: 0 });

    // Create observer for triggering when 50% visible
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Animation starts here
          gsap.to(images, {
            x: "-50%", // move across to the left
            opacity: 1,
            duration: 1,
            ease: "linear",
            stagger: 0.5, // delay each image by 2 seconds
          });

          observer.disconnect(); // stop observing once triggered
        }
      },
      { threshold: 0.5 } // trigger when 50% of section visible
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-black"
    >
      <div
        ref={containerRef}
        className="absolute flex flex-col gap-20 items-center w-full h-full"
      >
        <img
          className="w-30 h-30 object-cover rounded-lg absolute left-25 top-20 z-1"
          src="/allison-griffith-VCXk_bO97VQ-unsplash.jpg"
          alt="cocktail"
        />
        <img
          className="w-30 h-30 object-cover rounded-lg absolute left-50 bottom-40 z-0"
          src="/hush-naidoo-jade-photography-J0xPO-aokcs-unsplash.jpg"
          alt="cocktail"
        />
        <img
          className="w-30 h-30 object-cover rounded-lg absolute left-30 bottom-20 z-2"
          src="/jake-charles-O9Whoh12czM-unsplash.jpg"
          alt="cocktail"
        />
      </div>
    </section>
  );
};

export default BarSection;
