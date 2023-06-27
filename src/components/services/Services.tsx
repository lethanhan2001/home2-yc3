import { servicesData } from "../../data/services";
import { Services } from "../../types";
import ServiceItem from "./ServiceItem";
import { Box, styled } from "@mui/system";
import { Typography } from "@mui/material";

const One = styled("div")({
  width: "14.82px",
  height: "3.09px",
  backgroundColor: "#eeeeee",
  borderRadius: "50px",
});
const Two = styled("div")({
  width: "25.31px",
  height: "8.15px",
  backgroundColor: "#414880",
  margin: "0 10px",
  borderRadius: "50px",
});
const Three = styled("div")({
  width: "14.82px",
  height: "3.09px",
  backgroundColor: "#eeeeee",
  borderRadius: "50px",
});

const Title = styled("p")({
  color: "#8B8B8B",
});

const Services = () => {
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <One></One>
        <Two></Two>
        <Three></Three>
      </Box>

      <Box sx={{ textAlign: "center", marginTop: "100px" }}>
        <Typography variant="h6" sx={{ fontSize: "16px", fontWeight: "600" }}>
          Main Services
        </Typography>
        <Typography
          variant="h4"
          sx={{ fontSize: "36px", fontWeight: "600", color: "#091156" }}
        >
          Learn services to focus on your beauty
        </Typography>
        <Title className="text-[#8B8B8B]">
          Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
          Non parturient <br />
          amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
        </Title>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "50px",
            flex: "1",
            flexWrap: "wrap",
            rowGap: "30px",
          }}
        >
          {servicesData.map((item: Services) => (
            <ServiceItem key={item.id} item={item} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Services;
