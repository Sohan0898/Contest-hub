import AllContestCard from "./AllContestCard";

const ContestTab = ({ items }) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10">
      {items.map((contest) => (
        <AllContestCard key={contest._id} contest={contest}></AllContestCard>
      ))}
    </div>
  );
};

export default ContestTab;
