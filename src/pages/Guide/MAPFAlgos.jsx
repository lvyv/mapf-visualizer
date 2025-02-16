// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-about-us.jpg";

function MAPFAlgos() {
  return (
    <>
      <DefaultNavbar routes={routes} transparent light />
      <MKBox
        minHeight="45vh"
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
              MAPF 系列算法介绍
            </MKTypography>
            <MKTypography variant="body1" color="white" opacity={0.8} mt={1} mb={3}>
              <i>可视化工具构建于相关研究论文的基础之上</i>
            </MKTypography>
            {/* <MKButton color="default" sx={{ color: ({ palette: { dark } }) => dark.main }}>
              create account
            </MKButton> */}
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
              <Grid item xs={12} md={12} sx={{ mb: 6 }}>
                <MKTypography variant="h2" textAlign="center" my={4}>
                  单网格多智能体路径寻优算法包
                </MKTypography>
                <MKTypography variant="h4">CBSH2-RTC</MKTypography>
                <MKTypography variant="body1" my={2}>
                  多智能体路径查找搜索的成对对称推理 <br />
                  Jiaoyang Li, Daniel Harabor, Peter J. Stuckey, Hang Ma, Graeme Gange and Sven
                  Koenig. <br />
                  <em>Artificial Intelligence (AIJ), vol 301, pages 103574, 2021.</em>
                </MKTypography>
                <MKTypography variant="h4">EECBS</MKTypography>
                <MKTypography variant="body1" my={2}>
                  EECBS：多智能体路径查找的有界次优搜索 <br />
                  Jiaoyang Li, Wheeler Ruml and Sven Koenig。 <br />
                  <em>
                    AAAI Conference on Artificial Intelligence (AAAI), pages 12353-12362, 2021.
                  </em>
                </MKTypography>
                <MKTypography variant="h4">High-level heuristics</MKTypography>
                <MKTypography variant="body1" my={2}>
                  使用基于冲突搜索的改进多代理路径查找的启发式方法{" "}
                  <br />
                  Jiaoyang Li, Eli Boyarski, Ariel Felner, Hang Ma and Sven Koenig.
                  <br />
                  <em>
                    International Joint Conference on Artificial Intelligence (IJCAI), pages
                    442-449, 2019.
                  </em>
                </MKTypography>
                <MKTypography variant="body1" my={2}>
                  基于启发式方法的冲突搜索多智能体路径查找<br />
                  Ariel Felner, Jiaoyang Li, Eli Boyarski, Hang Ma, Liron Cohen, T. K. Satish Kumar
                  and Sven Koenig. <br />
                  <em>
                    International Conference on Automated Planning and Scheduling (ICAPS), pages
                    83-87, 2018.
                  </em>
                </MKTypography>
                <MKTypography variant="h4">Mutex Propagation</MKTypography>
                <MKTypography variant="body1" my={2}>
                  基于互斥传播的多代理路径查找<br />
                  Han Zhang, Jiaoyang Li, Pavel Surynek, Sven Koenig and T. K. Satish Kumar. <br />
                  <em>
                    International Conference on Automated Planning and Scheduling (ICAPS), pages
                    323-332, 2020.
                  </em>
                </MKTypography>
                <MKTypography variant="h4">Rectangle symmetry</MKTypography>
                <MKTypography variant="body1" my={2}>
                  基于网格的多智能体对称约束消解路径查找<br />
                  Jiaoyang Li, Daniel Harabor, Peter J. Stuckey, Hang Ma and Sven Koenig. <br />
                  <em>AAAI Conference on Artificial Intelligence (AAAI), pages 6087-6095, 2019.</em>
                </MKTypography>
                <MKTypography variant="h4">Corridor and Target Symmetries</MKTypography>
                <MKTypography variant="body1" my={2}>
                  多智能体路径查找中成对对称约束条件消解新技术<br />
                  Jiaoyang Li, Graeme Gange, Daniel Harabor, Peter J. Stuckey, Hang Ma and Sven
                  Koenig. <br />
                  <em>
                    International Conference on Automated Planning and Scheduling (ICAPS), pages
                    193-201, 2020.
                  </em>
                </MKTypography>

                <MKTypography variant="h2" textAlign="center" my={4}>
                  大尺寸多智能体路径寻优算法包
                </MKTypography>
                <MKTypography variant="h4">Mutex Propagation with MC-CBS</MKTypography>
                <MKTypography variant="body1" my={2}>
                  大型智能体多智能体路径查找中的互斥传播 <br />
                  Han Zhang, Yutong Li, Jiaoyang Li, T. K. Satish Kumar and Sven Koenig. <br />
                  <em> International Symposium on Combinatorial Search (SoCS), 2022. </em>
                </MKTypography>
                <MKTypography variant="h4">MC-CBS</MKTypography>
                <MKTypography variant="body1" my={2}>
                  大型智能体的多智能体路径查找<br />
                  Jiaoyang Li, Pavel Surynek, Ariel Felner, Hang Ma, T. K. Satish Kumar and Sven
                  Koenig. <br />
                  <em>AAAI Conference on Artificial Intelligence (AAAI), pages 7627-7634, 2019.</em>
                </MKTypography>
              </Grid>
            </Grid>
          </Container>
        </MKBox>{" "}
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default MAPFAlgos;
