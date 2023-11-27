import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate()

  return (
    <section className='bg-white '>
      <div className='container flex items-center min-h-screen px-6 py-12 mx-auto'>
        <div className='flex flex-col items-center max-w-sm lg:max-w-2xl mx-auto text-center'>
          <img className="lg:w-[750px] lg:h-[360px]" src="https://i.ibb.co/gmKsgmQ/Untitled-1080-x-600-px-1.gif" alt="" />
          <p className='mt-4 text-gray-500 '>Here are some helpful links:</p>

          <div className='flex items-center w-full mt-4 gap-x-3 shrink-0 sm:w-auto'>
            <button
              onClick={() => navigate(-1)}
              className='flex items-center justify-center w-1/2 px-5 py-1 text-sm text-gray-700 transition-colors duration-200  border border-secondary rounded-lg gap-x-2 sm:w-auto   bg-gray-50 hover:bg-secondary hover:text-gray-200 '
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='w-5 h-5 rtl:rotate-180 text-secondary'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
                />
              </svg>

              <span>Go back</span>
            </button>
            <button className="flex items-center justify-center w-1/2 px-5 py-1 text-sm text-gray-200 transition-colors duration-200 bg-secondary border rounded-lg gap-x-2 sm:w-auto hover:text-black hover:border-secondary  hover:bg-gray-100 " onClick={() => navigate('/')}>Home</button>
          </div>
        </div>
      </div>
    </section>
  )

};

export default ErrorPage;