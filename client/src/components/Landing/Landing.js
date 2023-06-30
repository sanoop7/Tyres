import "./Landing.css";
import land from "../../asset/brand/landing-img-2.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Landing = () => {
  return (
    <div className="landing__container">
      <div className="landing__header__container">
        <div className="landing__header">
          <h3 className="landing__header__discount">UP TO 15% DISCOUNT</h3>
          <h1 className="landing__header__main">
            How Can I Help With Your Car Today
          </h1>
          <Link to="#form_sec">
            <Button
              variant="outlined"
              sx={[
                {
                  width: "190px",
                  height: "50px",
                  borderRadius: "20px",
                  fontWeight: "700",
                  backgroundColor: "none",
                  borderColor: "black",
                  color: "black",
                },
                {
                  "&:hover": {
                    backgroundColor: "black",
                    color: "#FFE26E",
                    borderColor: "black",
                  },
                },
              ]}
            >
              REQUEST QUOTE NOW
            </Button>
          </Link>
        </div>
      </div>
      <div className="landing__image__container">
        
      </div>
    </div>
  );
};

export default Landing;
