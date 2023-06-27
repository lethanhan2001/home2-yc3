import Chrev from "../../images/chrev.png";
import TotopBtn from "../../images/ToTop Button.png";
import Facebook from "../../images/facebook-f.png";
import Likedin from "../../images/linkedin-in.png";
import Twitter from "../../images/twitterlogo.png";
import Instagram from "../../images/instagramlogo.png";
import Youtube from "../../images/youtube.png";
import useSize from "../../hooks/useSize";
import Footer1 from "../../images/footer1.png";
import Footer2 from "../../images/footer2.png";
import Footer3 from "../../images/footerbottm.png";
import { Box, style, styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";

const One = styled("div")({
  width: "64px",
  height: "64px",
  borderRadius: "50%",
  backgroundColor: "#ff64ae",
});
const Two = styled("div")({
  width: "13px",
  height: "13px",
  borderRadius: "50%",
  backgroundColor: "#fff",
  position: "absolute",
  top: "14px",
  left: "10px",
});
const Three = styled("div")({
  width: "6px",
  height: "6px",
  borderRadius: "50%",
  backgroundColor: "#fff",
  position: "absolute",
  top: "29px",
  left: "22px",
});
const Four = styled("div")({
  width: "40px",
  height: "11px",
  borderRadius: "50px",
  backgroundColor: "#fff",
  position: "absolute",
  top: "28px",
  left: "40px",
});

const Title = styled("p")({
  marginLeft: "30px",
  fontSize: "24px",
  fontWeight: "bold",
  color: "#fff",
});

const Span = styled("span")({
  fontSize: "15px",
  fontWeight: "400",
  color: "#d7dbfe",
});

const Header = styled("p")({
  fontSize: "18px",
  fontWeight: "600",
  color: "white",
});

const Images = styled("img")();

const Item = styled("p")({
  fontSize: "16px",
  fontWeight: "400",
  color: "#d7dbff",
  marginLeft: "10px",
});

const CopyRight = styled("p")({
  fontSize: "14px",
  fontWeight: "400",
  color: "#d7dbff",
  marginTop: "30px",

  width: "350px",
});

const Icons = styled("img")({
  width: "25px",
  height: "27.84px",
  marginRight: "70px",
});

const Footer = () => {
  const width: number = useSize();
  return (
    <>
      {width <= 900 ? (
        <Box
          sx={{
            marginTop: "100px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "800px",
              backgroundImage: `url(${Footer2})`,
              backgroundSize: "cover",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${Footer1})`,
                backgroundSize: "cover",
                width: "100%",
                height: "800px",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",

                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      paddingTop: "120px",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      marginLeft: "20%",
                      marginRight: "32px",
                      paddingBottom: "32px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        position: "relative",
                      }}
                    >
                      <Box>
                        <Box>
                          <One></One>
                          <Two></Two>
                          <Three></Three>
                          <Four></Four>
                        </Box>
                      </Box>
                      <p className="ml-[30px] text-2xl font-bold text-white">
                        Beautice
                      </p>
                    </Box>
                    <Box
                      sx={{
                        width: "100%",
                        marginTop: "16px",
                      }}
                    >
                      <Typography variant="h6" sx={{ color: "#d7dbff" }}>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: "700", display: "inline" }}
                          className="font-bold text-[#d7dbff]"
                        >
                          Beautice
                        </Typography>{" "}
                        <Span>is a Beauty Clinic WordPress Theme</Span>.
                      </Typography>
                      <Span>Baker Steet 101, NY, United States</Span>.
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          color: "#d7dbff",
                          marginTop: "20px",
                        }}
                      >
                        <Typography>+521 569 8966.</Typography>
                        <Typography sx={{ marginLeft: "16px" }}>
                          mail@company.com.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box sx={{ width: "100%" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-start",
                        margin: "0 6%",
                      }}
                    >
                      <Box>
                        <Header>Pages</Header>
                        <Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              margin: "20px 0",
                            }}
                          >
                            <Images src={Chrev} alt="" />
                            <Item>Home</Item>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              margin: "20px 0",
                            }}
                          >
                            <Images src={Chrev} alt="" />
                            <Item>About</Item>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              margin: "20px 0",
                            }}
                          >
                            <Images src={Chrev} alt="" />
                            <Item>Services</Item>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              margin: "20px 0",
                            }}
                          >
                            <Images src={Chrev} alt="" />
                            <Item>Gallery</Item>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              margin: "20px 0",
                            }}
                          >
                            <Images src={Chrev} alt="" />
                            <Item>Team</Item>
                          </Box>
                        </Box>
                      </Box>
                      <Box sx={{ marginLeft: "48px" }}>
                        <Header>Informations</Header>
                        <Box className="box">
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              margin: "20px 0",
                            }}
                          >
                            <Images src={Chrev} alt="" />
                            <Item>Terms & conditions</Item>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              margin: "20px 0",
                            }}
                          >
                            <Images src={Chrev} alt="" />
                            <Item>Privacy policy</Item>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              margin: "20px 0",
                            }}
                          >
                            <Images src={Chrev} alt="" />
                            <Item>Blog</Item>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              margin: "20px 0",
                            }}
                          >
                            <Images src={Chrev} alt="" />
                            <Item>Contact</Item>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    margin: "70px 10%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flex: "1",
                      flexWrap: "wrap",
                      alignItems: "center",
                      marginLeft: "5%",
                    }}
                  >
                    <Grid container rowGap={4} spacing={5}>
                      <Icons src={Facebook} alt="" />
                      <Icons src={Twitter} alt="" />
                      <Icons src={Likedin} alt="" />
                      <Icons src={Youtube} alt="" />
                      <Icons src={Instagram} alt="" />
                    </Grid>
                    <Box>
                      <CopyRight>
                        © AltDesain Studio 2021 - All right reserved.
                      </CopyRight>
                    </Box>
                  </Box>

                  <Box className="absolute bottom-[10%] right-[3%]">
                    <Images src={TotopBtn} alt="" />
                  </Box>
                </Box>
              </Box>

              <Box
                className="absolute bottom-0 z-[-1] w-full h-[300px]"
                style={{
                  backgroundImage: `url(${Footer3})`,
                  backgroundSize: "cover",
                }}
              ></Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            marginTop: "100px",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "800px",
              backgroundImage: `url(${Footer2})`,
              backgroundSize: "cover",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${Footer1})`,
                backgroundSize: "cover",
                width: "100%",
                height: "800px",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <Box
                  sx={
                    width < 900
                      ? {
                          display: "flex",
                          justifyContent: "flex-start",
                          flexDirection: "column",
                        }
                      : {
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          paddingTop: "200px",
                          margin: "0 8%",
                        }
                  }
                >
                  <Box sx={{ width: "100%" }}>
                    <Box
                      sx={{
                        display: "flex",
                        position: "relative",
                        alignItems: "center",
                      }}
                    >
                      <Box>
                        <One></One>
                        <Two></Two>
                        <Three></Three>
                        <Four></Four>
                      </Box>
                      <Title>Beautice</Title>
                    </Box>
                    <Box
                      sx={{
                        width: "50%",
                        marginTop: "16px",
                      }}
                    >
                      <Typography variant="h6" sx={{ color: "#d7dbff" }}>
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: "700", display: "inline" }}
                          className="font-bold text-[#d7dbff]"
                        >
                          Beautice
                        </Typography>{" "}
                        <Span>is a Beauty Clinic WordPress Theme</Span>.
                      </Typography>
                      <Span>Baker Steet 101, NY, United States</Span>.
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          color: "#d7dbff",
                          marginTop: "20px",
                        }}
                      >
                        <Typography>+521 569 8966.</Typography>
                        <Typography sx={{ marginLeft: "16px" }}>
                          mail@company.com.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      width: "50%",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box>
                        <Header className="text-white text-lg font-semibold">
                          Pages
                        </Header>
                        <Box className="box">
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              margin: "20px 0",
                            }}
                          >
                            <Images src={Chrev} alt="" />
                            <Item>Home</Item>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              margin: "20px 0",
                            }}
                          >
                            <Images src={Chrev} alt="" />
                            <Item>About</Item>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              margin: "20px 0",
                            }}
                          >
                            <Images src={Chrev} alt="" />
                            <Item>Services</Item>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              margin: "20px 0",
                            }}
                          >
                            <Images src={Chrev} alt="" />
                            <Item>Gallery</Item>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              margin: "20px 0",
                            }}
                          >
                            <Images src={Chrev} alt="" />
                            <Item>Team</Item>
                          </Box>
                        </Box>
                      </Box>
                      <Box>
                        <Header>Informations</Header>
                        <Box className="box">
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              margin: "20px 0",
                            }}
                          >
                            <Images src={Chrev} alt="" />
                            <Item>Terms & conditions</Item>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              margin: "20px 0",
                            }}
                          >
                            <Images src={Chrev} alt="" />
                            <Item>Privacy policy</Item>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              margin: "20px 0",
                            }}
                          >
                            <Images src={Chrev} alt="" />
                            <Item>Blog</Item>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              margin: "20px 0",
                            }}
                          >
                            <Images src={Chrev} alt="" />
                            <Item>Contact</Item>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    margin: "100px 10% 0 10%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Grid container spacing={5}>
                      <Icons src={Facebook} alt="" />
                      <Icons
                        sx={{
                          marginRight: "70px",
                        }}
                        src={Twitter}
                        alt=""
                      />
                      <Icons src={Likedin} alt="" />
                      <Icons src={Youtube} alt="" />
                      <Icons src={Instagram} alt="" />
                    </Grid>
                    <Box>
                      <CopyRight>
                        © AltDesain Studio 2021 - All right reserved.
                      </CopyRight>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      position: "absolute",
                      bottom: "10%",
                      right: "3%",
                    }}
                  >
                    <Images src={TotopBtn} alt="" />
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  bottom: "0",
                  right: "3%",
                  zIndex: "-1",
                  width: "100%",
                  height: "300px",
                  backgroundImage: `url(${Footer3})`,
                  backgroundSize: "cover",
                }}
              ></Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Footer;
