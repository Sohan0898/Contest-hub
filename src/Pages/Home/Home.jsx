import { Helmet } from "react-helmet-async";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Contest Hub | Home </title>
            </Helmet>
            <h1 className="text-5xl">This is home</h1>
        </div>
    );
};

export default Home;