import { useGSAP } from '@gsap/react';
import BookingForm from './BookingForm'
import { SplitText } from 'gsap/all';
import gsap from 'gsap';

const Hero = () => {
    useGSAP(() => {
        const pSplit = SplitText.create('.hero p', { type: 'words' });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero',
                start: 'top center',
            },
            ease: 'power1.inOut'
        })

        timeline
            .from(pSplit.words, {
                opacity: 0, yPercent: 100, duration: 1, stagger: 0.2,
            })
            .from('.hero form', {
                opacity: 0, yPercent: 100, duration: 1, stagger: 0.2,
            })

    });


    return (
        // Hero Section
        <>
            <div className="hero relative isolate max-w-full text-xl/8 px-5 pt-9 lg:px-8 bg-cover bg-fixed flex justify-center align-top" style={{ backgroundImage: `url("./public/IMG_0417s-1mbs-light-scaled.jpg")` }}>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <p className="mb-20 md:mb-0 font-bold text-pretty md:text-4xl text-3xl text-white sm:text-xl/8 shadow-[0_1em_1em_0_rgba(0,0,0,0.2)]">
                            THE BEST PLACE FOR YOUR VACATION
                        </p>
                    </div>
                </div>
                <BookingForm />
            </div>
        </>
    )
}

export default Hero;
