// @mui icons

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
// Material Kit 2 React components
import MKTypography from "components/MKTypography";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "多智能体路径寻优前端",
    route: "/",
  },
  socials: [
    // {
    //   icon: <GitHubIcon />,
    //   link: "https://github.com/stevenlyt",
    // },
    // {
    //   icon: <LinkIcon />,
    //   link: "https://yutongli.me",
    // },
    // {
    //   icon: <LinkedInIcon />,
    //   link: "https://linkedin.com/in/lyt1106",
    // },
  ],
  menus: [
    {
      name: "资源",
      items: [
        { name: "多智能体路径寻优文献", href: "http://mapf.info" },
        { name: "基准测试集", href: "https://movingai.com/benchmarks/mapf/index.html" },
      ],
    },
    {
      name: "第三方库",
      items: [
        { name: "界面素材包", href: "https://demos.creative-tim.com/material-kit-pro-react" },
        { name: "UI控件", href: "https://mui.com" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      版权所有 &copy; {date} by{" "}
      <MKTypography
        component="a"
        href="https://www.beidouapp.com"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        易通星云
      </MKTypography>
      {"  "} 
    </MKTypography>
  ),
};
