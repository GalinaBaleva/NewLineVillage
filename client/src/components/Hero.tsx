import BookingForm from './BookingForm'

const Hero = () => {

    return (
        // Hero Section
        <>
            <div className="relative isolate px-6 pt-9 lg:px-8 bg-cover" style={{ backgroundImage: `url("./public/IMG_0417s-1mbs-light-scaled.jpg")` }}>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
                            More than a holidy place... an experience
                        </p>
                    </div>
                </div>
            <BookingForm />
            </div>
        </>
    )
}

export default Hero;
