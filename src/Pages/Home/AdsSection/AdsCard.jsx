/* eslint-disable react/no-unescaped-entities */


const AdsCard = ({win}) => {

    const {participateIamge, participateName, contestName, contestImage, prize} =win;

    return (
        <div>
            <div
  className="relative grid  h-[40rem] w-full  flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
  <div
    className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none" style={{ backgroundImage: `url(${contestImage})` }}>
    <div className="absolute inset-0 w-full h-full  hero-overlay bg-opacity-70 bg-gradient-to-t from-[#000000] to-[#12121200]"></div>
  </div>
  <div className="relative p-6 px-6 py-14 md:px-12">

        <h1 className=" block font-sans text-5xl font-bold leading-[1.5] tracking-normal text-white antialiased">Triumphs and Victories: A Year of Success</h1>
            <h1 className=" block font-sans text-3xl font-bold leading-[1.5] tracking-normal text-white antialiased">Earn {prize}$ Prize money</h1>
            <p className="mb-16 max-w-2xl mx-auto block font-sans font-medium leading-[1.5] tracking-normal text-gray-400 antialiased">
"Thanks to our incredible winners, whose determination and excellence defined this year's success. Your achievements inspire and elevate us all. Cheers to your remarkable contributions!"</p>
    <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
      {contestName}
    </h2>
    <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
      {participateName}
    </h5>
    <img alt="Tania Andrew"
      src={participateIamge}
      className="relative inline-block h-40 w-40 !rounded-full border-2 border-white object-cover object-center" />
  </div>
</div>
        </div>
    );
};

export default AdsCard;