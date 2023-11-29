import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Popular from "./PopularSection/Popular";
import BestCreator from "./BestCreator/BestCreator";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Contest Hub | Home </title>
      </Helmet>
      <Banner></Banner>
      <Popular></Popular>
      {/* result */}
      <BestCreator></BestCreator>
    </div>
  );
};

export default Home;
