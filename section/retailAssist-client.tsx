import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function RetailAssistClients() {

  const clients = [
    {
        title: "Suki",
        image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROrBNjS6hpxdkZ7KvDhpjYxnFc8QS-2nV4Rg&s"
    },
    {
        title: "Kipling",
        image_link:"https://upload.wikimedia.org/wikipedia/commons/b/b9/Kipling_wordmark.svg"
    },
    {
        title: "Dogs in the City",
        image_link: "https://dogsandthecityph.com/cdn/shop/files/dogs_and_the_city1-03_2300x.png?v=1614282103"
    },
    {
        title: "Bike Plus",
        image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAN53PvNe_UtHG3I29qUqJNGtbzfsOaBvFVQ&s"
    },
      {
          title: "Spyder",
          image_link: "https://icon2.cleanpng.com/20180616/xrk/aa62uj9jg.webp"
      },{
          title: "Shoe Salon",
          image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0aMINiUe5Vkh1ZirEwa7bOPz552TvKkLjfw&s"
      },
      {
          title: "Gamot ni Juan",
          image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx8VwoVzHPI5S1J8PaTzp-Hwi5bYxlCVcOyg&s"
      },
      {   
          title: "Chris Sports",
          image_link: "https://portal.gifted.ph/storage/images/medium/b1e1abb587f039fdd3a5ae791c7c2402.jpg"
      }
    ]
  
    return (
      <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl md:text-5xl font-regular tracking-tighter mb-10" > Clients </h1>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {clients.map((client, index) => (
            <TooltipProvider key={index}>
            <Tooltip>
                <TooltipTrigger asChild>
                <div className="flex w-48 h-48 bg-gray-300 items-center justify-center rounded-md">
                    <img 
                    src={client.image_link}
                    alt={client.title}
                    className="w-32 h-32 rounded-md object-contain"
                    />
                </div>
                </TooltipTrigger>
                <TooltipContent>
                <p>{client.title}</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
        ))}
        </div>
      </div>
    )
  }