import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import ContestTab from "./ContestTab";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useContest from "../../Hooks/useContest";

const AllContest = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { user } = useAuth();

  const [approvedContests] = useContest();

  const Business = approvedContests.filter(
    (item) => item.tag === "Business Contest"
  );
  const Medical = approvedContests.filter(
    (item) => item.tag === "Medical Contest"
  );
  const Article = approvedContests.filter(
    (item) => item.tag === "Article Writing Contest"
  );
  const Gaming = approvedContests.filter(
    (item) => item.tag === "Gaming Contest"
  );
  // console.log(Business);

  return (
    <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16">
      <div>
        <section className="bg-gray-50 rounded mt-5 py-12">
          <div className="">
            <div className="text-center">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                WelCome To Biggest Contest Areana{" "}
              </h2>
              {!user && (
                <>
                  <p className="mt-4 text-2xl font-medium">
                    To Join Contest{" "}
                    <Link to={"/register"}>
                      <span className="text-secondary transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">
                        Register Now
                      </span>
                    </Link>
                    !
                  </p>
                  <p className="mt-6 text-base text-black">
                    Already have an account?{" "}
                    <Link to={"/login"}>
                      <span className="text-cyan-400 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">
                        Sign in
                      </span>
                    </Link>
                  </p>
                </>
              )}
            </div>
          </div>
        </section>
      </div>

      <div>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <div className="text-center mt-10">
            <TabList>
              <Tab>Business Contest</Tab>
              <Tab>Medical Contest</Tab>
              <Tab>Article Writing Contest</Tab>
              <Tab>Gaming Contest</Tab>
            </TabList>
          </div>

          <div className="my-20">
            <TabPanel>
              <ContestTab items={Business}></ContestTab>
            </TabPanel>
            <TabPanel>
              <ContestTab items={Medical}></ContestTab>{" "}
            </TabPanel>
            <TabPanel>
              <ContestTab items={Article}></ContestTab>{" "}
            </TabPanel>
            <TabPanel>
              <ContestTab items={Gaming}></ContestTab>{" "}
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default AllContest;
