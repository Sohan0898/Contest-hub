import ContestCard from "../../../assets/Shared/ContestCard/ContestCard";

const PopularCard = ({ contest, count, approvedContestId }) => {
  const { contestName, contestImage, tag, task } = contest;

  return (
    <div>
      <ContestCard
        name={contestName}
        image={contestImage}
        tag={tag}
        task={task}
        join={count}
        contestid={approvedContestId}
      ></ContestCard>
    </div>
  );
};

export default PopularCard;
