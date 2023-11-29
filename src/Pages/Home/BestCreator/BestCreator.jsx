/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./index.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import BestCreatorCard from "./BestCreatorCard";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const BestCreator = () => {
  const axiosPublic = useAxiosPublic();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/users");
      return res.data;
    },
  });

  // Filter users with role "creator" , slice and suffle index
  const creatorUsers = users
    .filter((user) => user.role === "creator")
    .slice(-3);
  const bestCreators = [...creatorUsers].sort(() => Math.random() - 0.5);

  console.log("bestCreators:", bestCreators);

  return (
    <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-5 my-10">
      <div>
        <h1 className="text-2xl leading-relaxed uppercase  text-center mt-16 font-semibold">
          <span className="text-5xl font-bold text-secondary  ">
            Mastermind Maven
          </span>{" "}
          <br /> Contest Hub's Best Creator
        </h1>

        <p className="max-w-3xl text-sm text-gray-500 mt-7 mx-auto text-center">
          Dive into the extraordinary world of creativity and competition with
          our Contest Hub Best Creator. This visionary maestro crafts
          unparalleled experiences, pushing the boundaries of innovation.{" "}
        </p>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 70,
          modifier: 3,
          slideShadows: true,
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        initialSlide={1}
      >
        {bestCreators?.map((creator) => (
          <SwiperSlide key={creator._id}>
            <BestCreatorCard creator={creator}></BestCreatorCard>
          </SwiperSlide>
        ))}
      </Swiper>

      <div></div>
    </div>
  );
};

export default BestCreator;
