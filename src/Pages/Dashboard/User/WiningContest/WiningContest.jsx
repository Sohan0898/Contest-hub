import { Helmet } from "react-helmet-async";
import useAuth from "../../../../Hooks/useAuth";
import useParticipateContest from "../../../../Hooks/useParticipateContest";
import { PulseLoader } from "react-spinners";

const WiningContest = () => {

    const {user, loading} = useAuth();
    const [items ] = useParticipateContest(); 

    if(loading){
        return <div className="flex items-center justify-center h-screen">
        <PulseLoader color="#1786F9" loading={loading} size={30} />
      </div>
    }

   const winners= items.filter((contest) => contest.role === "winner")

    return (

        <div>
            <Helmet>
        <title>Contest Hub | Dashboard| Wining Contest </title>
      </Helmet>
            <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div className="max-w-screen-2xl mx-auto ">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl mb-2 font-bold leading-tight text-gray-800 sm:text-4xl">Innovate & Elevate: {user?.displayName} Winning Submission</h2>
            <p>
            Congratulations! Your groundbreaking Contest-Hub has soared above the rest in the contests! 
            </p>
        </div>

        <div className=" grid grid-cols-1 justify-center items-center mt-12 lg:mt-24 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {
                winners?.map((winner) => (<div key={winner._id}  className="md:px-4 lg:px-10">
                <img className="-rotate-1" src={winner.contestImage} alt="" />
                <h3 className="mt-8 text-xl font-semibold leading-tight text-black">Winner of {winner.contestName}</h3>
                <p className="mt-4 text-base text-gray-600">Prize Money : {winner.prize} $</p>
            </div>))
            }

            
        </div>
    </div>
</section>

        </div>
    );
};

export default WiningContest;