import { Box, styled } from "@mui/system";
import { professData } from "../../data/profess";
import { Profess } from "../../types";
import ProfessItem from "./ProfessItem";
import { Typography } from "@mui/material";

const Title = styled("p")({
  color: "#8b8b8b",
});
const Profess: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        <Typography sx={{ fontSize: "16px", fontWeight: "600" }} variant="h6">
          Professional Teams
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontSize: "36px",
            fontWeight: "600",
            color: "#091156",
          }}
        >
          The Professional expert
        </Typography>
        <Title>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </Title>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "50px",
            flex: "1",
            flexWrap: "wrap",
            rowGap: "50px",
          }}
        >
          {professData.map((item: Profess) => (
            <ProfessItem key={item.id} item={item} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Profess;
