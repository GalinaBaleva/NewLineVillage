import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const BarSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const images = containerRef.current.querySelectorAll("img");
    const [first, second, third, forth, sixth] = images;

    // Set initial position (off-screen right, invisible)
    gsap.set(images, { x: "100%", opacity: 0 });

    // Create observer for triggering when 50% visible
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        let tl = gsap.timeline();

        if (entry.isIntersecting) {
          // Animation starts here
          tl.to(first, {
            x: "-50%", // move across to the left
            opacity: 1,
            duration: 1,
            ease: "linear",
          })
          tl.to(second, {
            x: "-40%", // move across to the left
            opacity: 1,
            duration: 1,
            ease: "linear",
          }, "-=0.1")
          tl.to(third, {
            x: "-50%",
            opacity: 1,
            duration: 1,
            ease: "liner,"
          }, "+=1"),
            tl.to(forth, {
              x: "-20%",
              opacity: 1,
              duration: 1,
              ease: "liner,"
            }, "+=1"),
            tl.to(sixth, {
              x: "-10%",
              opacity: 1,
              duration: 1,
              ease: "liner,"
            }, "+=1");


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
      className="relative w-full py-8 px-20 lg:px-40 h-[50vh] overflow-hidden bg-[#eceeee] shadow-[1em_1em_2em_1em_rgba(0,0,0,0.2)]"
    >
      <h2 className="text-center text-3xl md:text-6xl text-orange-400 font-dancing font-[Dancing_Script]">LOUNGE & BAR</h2>

      <div className="flex">
        <div
          ref={containerRef}
          className=""
        >
          <img
            id="first-image"
            className="w-18 h-18 md:w-30 md:h-30 object-cover rounded-lg absolute left-25 bottom-55 z-1"
            src="/allison-griffith-VCXk_bO97VQ-unsplash.jpg"
            alt="cocktail"
          />
          <img
            id="second-image"
            className="w-18 h-18 md:w-30 md:h-30 object-cover rounded-lg absolute left-50 bottom-45 z-0"
            src="/hush-naidoo-jade-photography-J0xPO-aokcs-unsplash.jpg"
            alt="cocktail"
          />
          <img
            id="third-image"
            className="w-18 h-18 md:w-30 md:h-30 object-cover rounded-lg absolute left-30 bottom-35 z-2"
            src="/jake-charles-O9Whoh12czM-unsplash.jpg"
            alt="cocktail"
          />
          <img
            id="third-forth"
            className="w-18 h-18 md:w-30 md:h-30 object-cover rounded-lg absolute left-50 bottom-20 z-3"
            src="/Bar_1024_600_new-edited-e1732740839839.jpg"
            alt="cocktail"
          />
          <img
            id="third-sixth"
            className="w-18 h-18 md:w-30 md:h-30 object-cover rounded-lg absolute left-35 bottom-5 z-4"
            src="/image.jpeg"
            alt="cocktail"
          />
        </div>
        <table>
          <tr>
            <td>Espresso</td>
            <td>5 EUR</td>
          </tr>
          <tr>
            <td>Americano</td>
            <td>5 EUR</td>
          </tr>
          <tr>
            <td>Cappuccino</td>
            <td>5 EUR</td>
          </tr>
          <tr>
            <td>Caffe Mocha</td>
            <td>5 EUR</td>
          </tr>
          <tr>
            <td>Caffe Latte</td>
            <td>5 EUR</td>
          </tr>
        </table>
        <table>
          <tr>
            <td>Espresso</td>
            <td>5 EUR</td>
          </tr>
          <tr>
            <td>Americano</td>
            <td>5 EUR</td>
          </tr>
          <tr>
            <td>Cappuccino</td>
            <td>5 EUR</td>
          </tr>
          <tr>
            <td>Caffe Mocha</td>
            <td>5 EUR</td>
          </tr>
          <tr>
            <td>Caffe Latte</td>
            <td>5 EUR</td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default BarSection;
