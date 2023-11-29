import ContestCard from "../../assets/Shared/ContestCard/ContestCard";

const AllContestCard = ({ contest }) => {
  const { _id, name, image, tag, task } = contest;

  return (
    <div>
      <ContestCard
        contestid={_id}
        name={name}
        image={image}
        tag={tag}
        task={task}
      ></ContestCard>
    </div>
  );
};

export default AllContestCard;
