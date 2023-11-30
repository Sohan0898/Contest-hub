import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import AdsCard from "./AdsCard";
import Marquee from "react-fast-marquee";






const AdsSection = () => {

    const axiosPublic = useAxiosPublic();

    const { data: items = [] } = useQuery({
        queryKey: ["participates"],
        queryFn: async () => {
          const res = await axiosPublic.get(`/participates`);
          console.log(res.data);

        },

      });

      const winners = items.filter(item => item.role === 'winner').slice(0, 4);
          console.log(winners)

  return (
    <div className="px-6  py-10 my-10">
      
      <div><h1 className="text-3xl mt-4 mb-12 font-semibold text-center "><span className="text-5xl font-bold uppercase text-secondary leading-relaxed">Celebrating Victory: </span> <br />Meet the Contest Conquerors</h1></div>
        
    
    <div className="flex gap-20">
    <Marquee direction="left">{
            winners?.map((win) => <AdsCard key={win._id} win={win}></AdsCard>)
        }</Marquee>
   
    </div>
    

    </div>
  );
};

export default AdsSection;
