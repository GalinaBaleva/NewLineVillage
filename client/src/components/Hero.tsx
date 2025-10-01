import BookingForm from './BookingForm'

const Hero = () => {

    return (
        // Hero Section
        <>
            <div className="relative isolate text-xl/8 px-5 pt-9 lg:px-8 bg-cover bg-fixed flex justify-center align-top" style={{ backgroundImage: `url("./public/IMG_0417s-1mbs-light-scaled.jpg")` }}>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 animate-[bounce_5s_ease-in-out_1_forwards]">
                    <div className="text-center">
                        <p className="mb-20 md:mb-0 md:mt-20 font-bold text-pretty text-white sm:text-xl/8 shadow-[0_1em_1em_0_rgba(0,0,0,0.2)]">
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
