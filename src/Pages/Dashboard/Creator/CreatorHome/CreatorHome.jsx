import useAuth from "../../../../Hooks/useAuth";


const CreatorHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2 className="text-3xl mt-8">
                <span> Hi, Welcome</span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
        </div>
    );
};

export default CreatorHome;