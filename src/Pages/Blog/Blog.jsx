const Blog = () => {
  return (
    <div>
      {/* <div>
        <section className="bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
              <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
                <h2 className="text-3xl mb-4 text-secondary font-bold leading-tight lg:text-4xl">
                  Contest Payment Form
                </h2>
                
            
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="space-y-5">
                    <div>
                      <label className="text-base font-medium text-gray-900">
                        {" "}
                        Full Name{" "}
                      </label>
                      <div className="mt-2.5">
                        <input
                          defaultValue={user?.displayName}
                          readOnly
                          {...register("name", { required: "Name is required" })}
                          placeholder="Enter your full name"
                          className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        />

                      </div>
                    </div>

                    <div>
                      <label className="text-base font-medium text-gray-900">
                        {" "}
                        Email address{" "}
                      </label>
                      <div className="mt-2.5">
                        <input
                        defaultValue={user?.email}
                        readOnly
                          type="email"
                          {...register("email", { required: "Email is required" })}
                          placeholder="Enter email to get started"
                          className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-base font-medium text-gray-900">
                        {" "}
                       Contest Name{" "}
                      </label>
                      <div className="mt-2.5">
                        <input
                          defaultValue={name}
                          readOnly
                          {...register("contestName", {
                            required: "Contest name is required",
                          })}
                          placeholder="Enter your full name"
                          className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        />

                      </div>
                    </div>
                    <div>
                      <label className="text-base font-medium text-gray-900">
                        {" "}
                        Contest Price{" "}
                      </label>
                      <div className="mt-2.5">
                        <input
                        defaultValue={price}
                        readOnly
                        {...register("price", { required: "Price is required" })}
                          type="number"
                          name=""
                          id=""
                          placeholder="Enter your full name"
                          className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                        />

                      </div>
                    </div>
                    
                    <div className="mb-4">
                    <label className="text-base font-medium text-gray-900">
                        {" "}
                       Did you pay?{" "}
                      </label>
            <select
              {...register("paid")}
              className="form-select block mt-4 w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
                    

                    <div>
                      <button
                        type="submit"
                        className="inline-flex mt-6 items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                      >
                        Get Register To Contest
                      </button>
                    </div>
                  </div>
                </form>

                
              </div>
            </div>

            <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
              <div>
                <img
                  className="w-full mx-auto"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/1/cards.png"
                  alt=""
                />

                <div className="w-full max-w-md mx-auto xl:max-w-xl">
                  <h3 className="text-2xl font-bold text-center text-black">
                    Design your own card
                  </h3>
                  <p className="leading-relaxed text-center text-gray-500 mt-2.5">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis.
                  </p>

                  <div className="flex items-center justify-center mt-10 space-x-3">
                    <div className="bg-orange-500 rounded-full w-20 h-1.5"></div>

                    <div className="bg-gray-200 rounded-full w-12 h-1.5"></div>

                    <div className="bg-gray-200 rounded-full w-12 h-1.5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div> */}
    </div>
  );
};

export default Blog;
