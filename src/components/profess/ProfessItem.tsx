import { Profess } from "../../types";
import Facebook from "../../images/Facebook.png";
import Twitter from "../../images/Twitter (1).png";
import Instagram from "../../images/Instagram.png";
import { styled, Box } from "@mui/system";
import { Typography } from "@mui/material";

interface ProfessItems {
  item: Profess;
}

const ProfessBox = styled("div")({
  width: "343px",
  height: "428px",
  backgroundColor: "white",

  boxShadow: "1px 0 6px 0 rgba(0,0,0,0.2)",
  padding: "25px 20px",
  borderRadius: "42px",
});

const Desc = styled("span")({
  fontSize: "14px",
  fontWeight: "400",
  marginTop: "40px",
  color: "#8b8b8b",
});

const Images = styled("img")();

const ProfessItem: React.FC<ProfessItems> = ({ item }) => {
  return (
    <>
      <ProfessBox>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Images src={item.image} alt="" />
        </Box>
        <Typography
          variant="h6"
          sx={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#ff64ae",
            marginTop: "32px",
          }}
        >
          {item.name}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#091156",
          }}
        >
          {item.username}
        </Typography>
        <Desc className="text-sm mt-8 font-normal text-[#8b8b8b]">
          Lorem ipsum dolor sit amet, consectetur <br />
          adipiscing elit ut aliquam.
        </Desc>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "32px",
          }}
          className="flex justify-evenly items-center mt-8"
        >
          <Images src={Twitter} alt="" />
          <Images src={Facebook} alt="" />
          <Images src={Instagram} alt="" />
        </Box>
      </ProfessBox>
    </>
  );
};

export default ProfessItem;
