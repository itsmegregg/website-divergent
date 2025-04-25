import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function FoodConnectClient() {

    const clients = [
      {
          title: "Agave",
          image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9mY6jCQs5ceFZTyea9gVMFJUdVUjXrp04KQ&s"
      },
      {
          title: "Aristocrat",
          image_link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB4hW6pMv22oCBcp423K4_j_VWCeBKO1H76Q&s"
      },
      {
          title: "Bizu",
          image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFOb0UNKg57hNgdujHkDvD_V1EO6DHTgb97w&s"
      },
      {
          title: "Cafe Agapita",
          image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd1jmT0gNlgJdlmYyC177mT_1nWjQHQ-fEUg&s"
      },
      {
          title: "Ramen Kuruda",
          image_link: "https://static.wixstatic.com/media/06d23c_f162c60a97de4b6dab0ee2094b7562e2~mv2.png/v1/fit/w_2500,h_1330,al_c/06d23c_f162c60a97de4b6dab0ee2094b7562e2~mv2.png"
      },{
          title: "Lingnam",
          image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDpaF-8ih3sTQTioFSTTZbifU_H6QECT_9vA&s"
      },
      {
          title: "Gino's Pizza",
          image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOr1p9r598SFaKU-8eRHymvWQKq44YXkrtw&s"
      },
      {   
          title: "Kanin Club",
          image_link: "https://errantdiner.com/wp-content/uploads/2013/12/ctc-3938-image8.jpg"
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
                <div className="flex w-36 h-48 bg-gray-300 items-center justify-center rounded-md">
                    <img 
                    src={client.image_link}
                    alt={client.title}
                    className="w-28 h-28 rounded-md object-contain"
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