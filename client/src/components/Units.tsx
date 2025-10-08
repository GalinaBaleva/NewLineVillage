import Item from "./Item";


interface Apartments {
    [name: string]: Apartment;
}

interface Apartment {
    image: string;
    name: string;
    guests: number;
    numberOfBeds: number;
    typeOfBed: [string, string?, string?];
    rating: number;
}


const typeApartments: Apartments = {
    cozyStudio: {
        name: "Cozy Studio",
        image: './public/IMG_0417s-1mbs-light-scaled.jpg',
        guests: 2,
        numberOfBeds: 1,
        typeOfBed: ['double bed'],
        rating: 4
    },
    charmingStudio: {
        image: './public/IMG_0417s-1mbs-light-scaled.jpg',
        name: "Charming Studio",
        guests: 2,
        numberOfBeds: 1,
        typeOfBed: ['single bed'],
        rating: 4
    },
    cozyOneBedroom: {
        image: './public/IMG_0417s-1mbs-light-scaled.jpg',
        name: "Cozy One Bedroom Apartment",
        guests: 3,
        numberOfBeds: 2,
        typeOfBed: ['single bed', 'sofa'],
        rating: 4
    },
    // charmingOneBedroom: {
    //     image: './public/IMG_0417s-1mbs-light-scaled.jpg',
    //     name: "Charming Studio",
    //     guests: 4,
    //     numberOfBeds: 2,
    //     typeOfBed: ['single bed', 'sofa'],
    //     rating: 4
    // },
    // cozyTwoBedroom: {
    //     image: './public/IMG_0417s-1mbs-light-scaled.jpg',
    //     name: "Cozy One Bedroom Apartment",
    //     guests: 5,
    //     numberOfBeds: 3,
    //     typeOfBed: ['single bed', 'double bed', 'sofa'],
    //     rating: 4
    // },
    // charmingTowBedroom: {
    //     image: './public/IMG_0417s-1mbs-light-scaled.jpg',
    //     name: "Charming Studio",
    //     guests: 6,
    //     numberOfBeds: 3,
    //     typeOfBed: ['single bed', 'double bed', 'sofa'],
    //     rating: 4
    // },
}

const Units = () => {

    return (
        <section className="w-full py-8 px-20 lg:px-40 flex flex-col gap-6 m-auto">
            <h2 className="text-center text-3xl md:text-6xl text-orange-400 font-dancing font-[Dancing_Script]">Available Apartments</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.values(typeApartments).map((apartment: Apartment) => <Item key={apartment.name} {...apartment} />)}
            </div>
        </section>
    )
}

export default Units;
