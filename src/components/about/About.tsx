import PlayBtn from "../../images/Play_button.png";
import HomeBg from "../../images/home.png";
import useSize from "../../hooks/useSize";
import { Box, styled } from "@mui/system";
import { Typography, createTheme, ThemeProvider, Button } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff64ae",
    },
    secondary: {
      main: "#ff4081",
    },
  },
});

const Desc = styled("p")({
  color: "#8b8b8b",
});

const Images = styled("img")({});

const Watch = styled("p")({
  fontSize: "16px",
  fontWeight: "600",
  color: "#8b8b8b",
  marginLeft: "20px",
});

const ImageHome = styled("img")({
  width: "100%",
  height: "100%",
  borderRadius: "50px",
});

const About = () => {
  const width: number = useSize();
  return (
    <>
      <Box
        sx={
          width <= 700
            ? {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }
            : {
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexWrap: "row-wrap",
                marginTop: "80px",
                marginLeft: "3%",
              }
        }
      >
        <Box
          sx={
            width <= 700
              ? {
                  width: "100%",
                  marginTop: "60px",
                  padding: "0 6px",
                }
              : {
                  width: "40%",
                  marginTop: "60px",
                }
          }
        >
          <Typography sx={{ fontSize: "16px", fontWeight: "600" }} variant="h6">
            About Us
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: "36px",
              fontWeight: "600",
              color: "#091156",
              margin: "10px 0",
            }}
          >
            We are the best beauty clinic
          </Typography>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
            suscipit purus donec amet. Egestas volutpat facilisi eu libero.
            Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in
            suspendisse placerat. Id dui erat sed quam tellus in purus.
            Pellentesque congue fringilla cras tellus enim.
          </Desc>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <ThemeProvider theme={theme}>
              <Button
                color="primary"
                sx={{
                  borderRadius: "50px",
                  color: "white",
                  fontWeight: "700",
                }}
                variant="contained"
              >
                More Details
              </Button>
            </ThemeProvider>
            <Box
              sx={{ display: "flex", alignItems: "center", marginLeft: "40px" }}
            >
              <Images src={PlayBtn} alt="" />
              <Watch>Watch Video</Watch>
            </Box>
          </Box>
        </Box>

        <Box
          sx={
            width <= 700
              ? {
                  width: "100%",
                }
              : {
                  width: "476px",
                  height: "350px",
                  borderRadius: "50px",
                  marginTop: "100px",
                }
          }
        >
          <ImageHome src={HomeBg} alt="" />
        </Box>
      </Box>
    </>
  );
};

export default About;
