import TripCard from "../Ui/TripCard";

const trips = [
  {
    id: 1,
    title: "Magical Kashmir",
    duration: "7 days",
    capacity: 20,
    price: "₹35,000",
    image:
      "https://media.istockphoto.com/id/1082292294/photo/multi-color-lake-in-western-china.jpg?s=2048x2048&w=is&k=20&c=cYGKomaJG5VXKogVCnITHR2NhERm7GW4u329Rs879vs=",
  },
  {
    id: 2,
    title: "Royal Rajasthan",
    duration: "6 days",
    capacity: 25,
    price: "₹30,000",
    image:
      "https://cdn.pixabay.com/photo/2021/04/06/11/22/hawa-mahal-6156123_1280.jpg",
  },
  {
    id: 3,
    title: "Spiritual Varanasi",
    duration: "4 days",
    capacity: 15,
    price: "₹20,000",
    image:
      "https://media.istockphoto.com/id/537988165/photo/varanasi.jpg?s=2048x2048&w=is&k=20&c=kTj8njrwskmoiIzifXa71ch8uZjn2gbAe_RrVxRVwDE=",
  },
];

export default function FeaturedTrips() {
  return (
    <section id="featured-trips" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-yellow-500 font-mono font-bold text-center mb-12">
          Featured Trips
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {trips.map((trip, index) => (
            <div className="w-full sm:w-1/2 lg:w-1/3" key={trip.id}>
              <TripCard
                index={index}
                id={trip.id}
                availableSeats={trip.capacity}
                title={trip.title}
                duration={trip.duration}
                price={trip.price}
                image={trip.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
