import { Button } from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Link } from "react-router-dom";

const GoHome = () => {
    return (
        <div>
            <div className="">
        <Link to={"/"}>
          <Button
            fullWidth
            variant="contained"
            sx={{ background: "#0d1a33", fontWeight: 700 }}
            endIcon={<KeyboardReturnIcon />}
          >
            Back Home
          </Button>
        </Link>
      </div>
        </div>
    );
};

export default GoHome;