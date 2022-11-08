import { Grid, Container, Link } from "@mui/material";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import demo from "assets/images/mapf-demo.gif";

export default function MAPFInfo() {
  return (
    <MKBox component="section" sx={{ display: "flex", overflow: "hidden" }}>
      <Container
        sx={{
          mt: 10,
          mb: 10,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >

        <Grid container spacing={12}>
          <Grid item xs={12} md={4}>
            <MKBox
              component="img"
              src={demo}
              sx={{
                pointerEvents: "none",
                width: "100%",
                height: "auto",
              }}
            />
          </Grid>
          <Grid item xs={12} md={8} alignItems="center" justifyContent="center">
            <MKTypography variant="body1" sx={{ mb: 4 }}>
              在多智能体路径查找（MAPF）问题中，我们得到一个二维图
              （将其视为迷宫）和一组对象/代理。每个代理都有一个起始位置和
              图上的目标位置。代理可以采取的行动要么是移动到一个
              邻近位置或在其当前位置等待。
            </MKTypography>
            <MKTypography variant="body1" sx={{ mb: 4 }}>
              我们的任务是找到一组最优的无冲突路径。也就是说，每个代理都可以
              在不与其他代理发生冲突的情况下实现其目标，同时最小化累积
              成本函数。共同成本函数是每个个体代理时间的总和
              成本。主要使用基于网格的 MAPF，其中每个代理的
              座标是一个整数二维坐标. 
            </MKTypography>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}
