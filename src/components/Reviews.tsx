
import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const reviews = [
  {/*{
    name: "Michael Johnson",
    rating: 5,
    date: "October 2023",
    text: "Excellent emergency service! The plumber arrived within 30 minutes and fixed our burst pipe quickly. Very professional and reasonably priced."
  },
  {
    name: "Sarah Williams",
    rating: 5,
    date: "November 2023",
    text: "I had several taps that needed replacing. The work was done efficiently and to a high standard. I will definitely use them again."
  },
  {
    name: "David Thompson",
    rating: 4,
    date: "September 2023",
    text: "Called for a blocked toilet emergency and they were at my house within the hour. Great service and friendly staff."
  },
  {
    name: "Emma Roberts",
    rating: 5,
    date: "December 2023",
    text: "Had my radiators serviced and one replaced. Very knowledgeable team and excellent work. Highly recommend."
  },*/}
  {
    name: "NA",
    rating: 5,
    date: "NA",
    text: "No reviews but we still deliver top notch service!"
  }
];

const Reviews = () => {
  return (
    <div id="reviews" className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-plumbing-darkgray">Customer Reviews</h2>
          <div className="h-1 w-20 bg-plumbing-blue mx-auto mt-4 mb-6"></div>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} fill="#FFD700" color="#FFD700" size={24} />
              ))}
            </div>
            <span className="text-xl font-bold">4.9</span>
            <span className="text-gray-600">on Google Reviews</span>
          </div>
        </div>
        
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={18} 
                          fill={i < review.rating ? "#FFD700" : "#e5e7eb"} 
                          color={i < review.rating ? "#FFD700" : "#e5e7eb"} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">{review.name}</span>
                      <span className="text-gray-500 text-sm">{review.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        
        <div className="mt-8 text-center">
          <a 
            href="https://www.google.com/business/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-plumbing-blue hover:text-plumbing-skyblue underline"
          >
            See all reviews on Google
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
