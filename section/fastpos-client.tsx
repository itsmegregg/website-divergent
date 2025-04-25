import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function FastPOSClient() {

  const clients = [
    {
        title: "Sisig Hooray",
        image_link: "https://contents.smsupermalls.com/data/uploads/2020/07/SISIG_HOORAY.jpg"
    },
    {
        title: "Wit Lover",
        image_link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyfC1Fa2YIxToiuEITHoPZhBfjs_lBNd8gHQ&s"
    },
    {
        title: "Bibingkinitan",
        image_link: "https://contents.smsupermalls.com/data/uploads/2020/07/BIBINGKINITAN.jpg"
    },
    {
        title: "Vito's BBQ",
        image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSaW9qBlp5WxOM3X1mA_zxmUm-ojg4v9Jm5g&s"
    },
    {
        title: "Chapter Coffee",
        image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRysm6OqGfz0jc4FL8FFkBMg4POm6liBKGvQ&s"
    },{
        title: "Potato Corner",
        image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQz4wOwWeFUp4g3VTVxUWGg3az4Fzbe4bReg&s"
    },
    {
        title: "Bistro Deli",
        image_link: "https://contents.smsupermalls.com/data/uploads/2020/07/NEW_BISTRO_DELI.jpg"
    },
    {   
        title: "Buddy's",
        image_link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwUeBm0FTAAW9-FsyM2hEmimW70tXGmMDaA&s"
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