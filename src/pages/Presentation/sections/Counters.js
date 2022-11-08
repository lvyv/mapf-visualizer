/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

function Counters() {
  return (
    <MKBox component="section" py={3}>
      <MKBox component="section" sx={{ display: "flex", overflow: "hidden" }}>
        <Container
          sx={{
            mt: 7,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <MKTypography variant="h2" sx={{ mb: 1 }}>
            MAPF算法变种
          </MKTypography>
        </Container>
      </MKBox>
      <Container>
        <Grid container item xs={12} lg={12} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <MKBox p={2} textAlign="center" lineHeight={1}>
              <MKTypography variant="h5" mt={2} mb={1}>
                传统 MAPF 算法
              </MKTypography>
              <MKTypography variant="body2" color="text">
                智能体只占据地图的一个网格
              </MKTypography>
              <MKButton
                color="info"
                size="medium"
                variant="outlined"
                href="/classic-visualizer/CBSH2-RTC"
                component="a"
                sx={{ mt: 5 }}
              >
                启动
              </MKButton>
            </MKBox>
          </Grid>
          <Grid item xs={12} md={4}>
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, mx: 0 }} />
            <MKBox p={2} textAlign="center" lineHeight={1}>
              <MKTypography variant="h5" mt={2} mb={1}>
                大尺寸智能体 MAPF 算法
              </MKTypography>
              <MKTypography variant="body2" color="text">
                智能体占据地图的多个网格
              </MKTypography>
              <MKButton
                color="info"
                size="medium"
                variant="outlined"
                href="/la-visualizer"
                component="a"
                sx={{ mt: 5 }}
              >
                启动
              </MKButton>
            </MKBox>
            <Divider orientation="vertical" sx={{ display: { xs: "none", md: "block" }, ml: 0 }} />
          </Grid>
          <Grid item xs={12} md={4}>
            <MKBox p={2} textAlign="center" lineHeight={1}>
              <MKTypography variant="h5" mt={2} mb={1}>
                智能体动态 MAPF 算法
              </MKTypography>
              <MKTypography variant="body2" color="text">
                智能体可能会随机耽误或收到外部干扰
              </MKTypography>
              <MKButton
                color="secondary"
                size="medium"
                variant="outlined"
                href="/robust-visualizer"
                component="a"
                sx={{
                  mt: 5,
                  pointerEvents: "none",
                }}
              >
                研制中...
              </MKButton>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Counters;
