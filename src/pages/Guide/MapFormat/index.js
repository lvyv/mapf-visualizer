// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKAlert from "components/MKAlert";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";
import example from "assets/images/example.png";

function MapFormat() {
  return (
    <>
      <DefaultNavbar routes={routes} transparent light />
      <MKBox
        minHeight="35vh"
        width="100%"
        bgColor="dark"
        sx={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={8}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              地图文件格式
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <MKBox
          component="section"
          variant="gradient"
          position="relative"
          py={6}
          px={{ xs: 2, lg: 0 }}
          mx={-2}
        >
          <Container>
            <Grid container>
              <Grid item xs={12} md={12}>
                <MKTypography variant="h4">地图格式</MKTypography>
                <MKTypography variant="body1" my={2}>
                  为方便起见，采用 Nathan Sturtevant 的 MAPF 地图格式，该格式广泛用于本领域。
                </MKTypography>
                <MKTypography variant="body1" my={2}>
                  地图文件需要以如下行开始：
                </MKTypography>
                <MKTypography variant="body1" my={2}>
                  <code>
                    <pre>{"type octile\nheight y\nwidth x\nmap"}</pre>
                  </code>
                </MKTypography>
                <MKTypography variant="body1" my={2}>
                  其中 <code>x</code> 是地图的宽度值 (列的数目)， <code>y</code>{" "}
                  是地图的高度值 (行的数据) 。
                </MKTypography>
                <MKTypography variant="body1" my={2}>
                  以下几行是地图数据。每条线代表地图的一行，并且
                  每个字符对应一个网格。
                  <br />
                  字符 <code>.</code> 标识空白区域，而字符{" "}
                  <code>@</code> 标识障碍区域。
                </MKTypography>
                <MKTypography variant="body1" my={2}>
                  以下是一个示例：
                </MKTypography>
              </Grid>

              <Grid item xs={12} md={6} sx={{ mb: 2 }}>
                <MKTypography variant="body1" my={2}>
                  <MKBox
                    component="img"
                    src={example}
                    sx={{
                      pointerEvents: "none",
                      width: "50%",
                      height: "auto",
                    }}
                  />
                </MKTypography>
              </Grid>
              <Grid item xs={12} md={6} sx={{ mb: 2 }}>
                <MKTypography variant="body1" my={2}>
                  <code>
                    <pre>
                      {
                        "type octile\nheight 4\nwidth 8\nmap\n.@@@@@@.\n..@...@.\n@...@...\n@@@@@@@."
                      }
                    </pre>
                  </code>
                </MKTypography>
              </Grid>
              <Grid item xs={12}>
                <MKTypography variant="body1" my={2}>
                  <i>
                    <b>
                      注意：出于性能考虑，请确保地图大小不要太大。
                    </b>
                  </i>
                </MKTypography>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default MapFormat;
