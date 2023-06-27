import ContactBg from "../../images/Contact Animations.png";
import MainBgContact from "../../images/bgbubble.png";
import useSize from "../../hooks/useSize";
import { Box, styled } from "@mui/system";
import {
  TextField,
  Typography,
  createTheme,
  ThemeProvider,
  Button,
} from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff64ae",
    },
    secondary: {
      main: "#D9DDFE",
    },
  },
});

const Images = styled("img")();

const Title = styled("p")({
  color: "#8b8b8b",
  marginTop: "10px",
});

const Contact = () => {
  const width: number = useSize();
  return (
    <>
      {width <= 880 ? (
        <Box
          sx={{
            backgroundImage: `url(${MainBgContact})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100%",
            marginTop: "100px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "0 auto",
                width: "75%",
              }}
            >
              <Images src={ContactBg} alt="" />
            </Box>
            <Box
              sx={{
                width: "100%",
                padding: "0 32px",
              }}
            >
              <Typography variant="h6">Contact Us</Typography>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "36px",
                  fontWeight: "600",
                  color: "#091156",
                }}
              >
                Send your inquiry to our expert team
              </Typography>
              <Title>Lorem ipsum dolor sit amet nulla turapis tellus.</Title>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    margin: "32px 0",
                    flexWrap: "wrap",
                    flex: 1,
                    rowGap: "40px",
                    alignItems: "center",
                  }}
                >
                  <ThemeProvider theme={theme}>
                    <TextField
                      InputProps={{
                        style: {
                          borderRadius: "15px",
                        },
                      }}
                      color="secondary"
                      focused
                      sx={{
                        width: "242px",
                        height: "62px",
                        borderRadius: "15px",
                        borderColor: "#d9ddfe",
                        outline: "none",
                        border: "none",
                      }}
                      type="text"
                      placeholder="First name"
                    />
                    <TextField
                      InputProps={{
                        style: {
                          borderRadius: "15px",
                        },
                      }}
                      color="secondary"
                      focused
                      sx={
                        width < 650
                          ? {
                              width: "242px",
                              height: "62px",
                              borderRadius: "15px",
                              borderColor: "#d9ddfe",
                              outline: "none",
                              border: "none",
                            }
                          : {
                              width: "242px",
                              height: "62px",
                              borderRadius: "15px",
                              borderColor: "#d9ddfe",
                              outline: "none",
                              border: "none",
                              marginLeft: "32px",
                            }
                      }
                      type="text"
                      placeholder="Last name"
                    />
                  </ThemeProvider>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "100%",
                    margin: "0 auto",
                  }}
                >
                  <ThemeProvider theme={theme}>
                    <TextField
                      InputProps={{
                        style: {
                          borderRadius: "15px",
                        },
                      }}
                      color="secondary"
                      focused
                      sx={{
                        width: "calc(100% + 20px)",
                        height: "62px",
                        paddingLeft: "20px",
                        marginRight: "20px",
                        borderRadius: "15px",
                        outline: "none",
                      }}
                      type="email"
                      placeholder="Email address"
                    />
                    <TextField
                      InputProps={{
                        style: {
                          borderRadius: "15px",
                        },
                      }}
                      color="secondary"
                      focused
                      sx={{
                        width: "calc(100% + 20px)",
                        height: "62px",
                        paddingLeft: "20px",
                        marginRight: "20px",
                        marginTop: "30px",
                        borderRadius: "15px",
                        outline: "none",
                      }}
                      type="text"
                      placeholder="Subject message"
                    />
                    <TextareaAutosize
                      color="secondary"
                      style={{
                        width: "100%",
                        height: "190px",
                        padding: "20px",
                        marginTop: "32px",
                        border: "1px solid",
                        borderRadius: "15px",
                        borderColor: "#D9DDFE",
                        outline: "none",
                      }}
                      typeof="text"
                      placeholder="Your inquiry here"
                    ></TextareaAutosize>
                  </ThemeProvider>
                </Box>
              </Box>

              <ThemeProvider theme={theme}>
                <Button
                  color="primary"
                  sx={{
                    borderRadius: "50px",
                    color: "white",
                    fontWeight: "700",
                    marginTop: "32px",
                  }}
                  variant="contained"
                >
                  Send Message
                </Button>
              </ThemeProvider>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            marginTop: "100px",
            backgroundImage: `url(${MainBgContact})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginRight: "10%",
            }}
          >
            <Box sx={{ width: "50%", marginLeft: "10%" }}>
              <img src={ContactBg} alt="" />
            </Box>
            <Box sx={{ width: "50%" }}>
              <Typography
                sx={{ fontSize: "16px", fontWeight: "600" }}
                variant="h6"
              >
                Contact Us
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "36px",
                  fontWeight: "600",
                  color: "#091156",
                }}
              >
                Send your inquiry to our expert team
              </Typography>
              <Title className="text-[#8B8B8B]">
                Lorem ipsum dolor sit amet nulla turapis tellus.
              </Title>
              <Box
                sx={{
                  marginTop: "40px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <ThemeProvider theme={theme}>
                    <TextField
                      color="secondary"
                      focused
                      sx={{
                        width: "242px",
                        height: "62px",
                        borderRadius: "15px",
                        borderColor: "#d9ddfe",
                        outline: "none",
                        border: "none",
                      }}
                      type="text"
                      placeholder="First name"
                      InputProps={{
                        style: {
                          borderRadius: "15px",
                        },
                      }}
                    />
                    <TextField
                      InputProps={{
                        style: {
                          borderRadius: "15px",
                        },
                      }}
                      color="secondary"
                      focused
                      sx={{
                        width: "242px",
                        height: "62px",
                        borderRadius: "15px",
                        borderColor: "#d9ddfe",
                        outline: "none",
                        border: "none",
                        marginLeft: "30px",
                      }}
                      type="text"
                      placeholder="Last name"
                    />
                  </ThemeProvider>
                </Box>
                <Box>
                  <ThemeProvider theme={theme}>
                    <TextField
                      color="secondary"
                      focused
                      sx={{
                        width: "100%",
                        height: "62px",

                        marginTop: "30px",
                        borderRadius: "15px",
                        outline: "none",
                      }}
                      type="text"
                      placeholder="Subject message"
                      InputProps={{
                        style: {
                          borderRadius: "15px",
                        },
                      }}
                    />
                    <TextField
                      InputProps={{
                        style: {
                          borderRadius: "15px",
                        },
                      }}
                      color="secondary"
                      focused
                      sx={{
                        width: "100%",
                        height: "62px",

                        marginTop: "30px",
                        borderRadius: "15px",
                        outline: "none",
                      }}
                      type="text"
                      placeholder="Subject message"
                    />
                  </ThemeProvider>

                  <TextareaAutosize
                    style={{
                      width: "100%",
                      height: "190px",
                      padding: "20px",
                      marginTop: "32px",
                      borderRadius: "15px",
                      outline: "none",
                      border: "1px solid #D9DDFE",
                    }}
                    typeof="text"
                    placeholder="Your inquiry here"
                  ></TextareaAutosize>
                </Box>
              </Box>

              <ThemeProvider theme={theme}>
                <Button
                  color="primary"
                  sx={{
                    borderRadius: "50px",
                    color: "white",
                    fontWeight: "700",
                    marginTop: "32px",
                  }}
                  variant="contained"
                >
                  Send Message
                </Button>
              </ThemeProvider>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Contact;
