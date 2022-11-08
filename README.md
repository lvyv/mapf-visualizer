[![MIT License][license-shield]][license-url]
[![Stargazers][stars-shield]][stars-url]

<!-- PROJECT LOGO -->
<div align="center">
  <h1 align="center"><a href="http://mapf-visualizer.com" style="text-decoration: none;">多智能体路径寻优前端</a></h1>
  <p align="center"><i>多智能体路径寻优软件的前端可视化工具，用户可以利用它查看动态规划的路径方案。</i></p>

</div>

## 软件说明

本软件为多智能体路径寻优 (MAPF) 算法提供了一个可视化工具。

当前存在大量的单代理寻路可视化方案，但它们都使用了成熟的算法，例如 A* 和 Dijkstra。然而，多智能体寻路领域相对较新（CBS，一种重要的 MAPF 算法，于 2012 年提出），因此还没有大量应用到商业产品方案中。

本软件旨在通过提供实时可视化工具帮助人们更好地了解 MAPF。通常运行 MAPF 求解器涉及以下步骤：

1. 将C++代码编译成可执行文件
2. 将地图和实例放到两个单独的文件中，内容按照一定的规则进行格式化
3. 用复杂的命令运行可执行文件

本软件提供了更直观的体验。用户将能够：

1. 选择他们感兴趣的特定算法
2. 通过拖动鼠标添加墙壁来设计自己的地图
3. 通过输入他们的开始和目标位置来添加代理
4. 点击 `路径寻优规划` 按钮来动态获取路径规划的结果

### Currently supported MAPF variants and algorithms

#### 1. Classic single-point MAPF

- CBSH2-RTC by Jiaoyang Li.
  This solver consists of Conflict-Based Search (CBS) and many of its improvement techniques, including:
  - Prioritizing conflicts
  - Bypassing conflicts
  - High-level admissible heuristics:
    - CG
    - DG
    - WDG
  - Symmetry reasoning techniques:
    - rectangle reasoning and generalized rectangle reasoning
    - target reasoning
    - corridor reasoning and corridor-target reasoning
    - mutex propagation
  - Disjoint splitting
- EECBS by Jiaoyang Li.
  This is a bounded-suboptimal solver based on CBS. It speeds up CBS by using Explicit Estimation Search (EES) on its high level and focal search on its low level.

#### 2. Large agent MAPF

- Multi-Constraint CBS (MC-CBS) by Jiaoyang Li
- Multi-Constraint CBS with Mutex propagation (MC-CBS-M) by Han Zhang, Yutong Li, and Jiaoyang Li

### Built With

This project is bootstrapped with the following frameworks and libraries:

- [React.js](https://reactjs.org/)
- [Express.js](https://expressjs.com)
- [MUI](https://mui.com)

<!-- GETTING STARTED -->

## Getting Started

Open [MAPF Visualizer](http://mapf-visualizer.com) in one of the following browsers for optimal support:

- Chrome v98 and later
- FIrefox v94 or later
- Edge v98 or later
- Safari v15.4 or later (**Note: this requires that you have updated to Mac OS Monterey 12.4, which most people haven't.**)

## Contributing

If you have a MAPF-related algorithm that might fit into the framework of this website, please reach out to me via [email](mailto:yli81711@usc.edu) and I'll be very willing to incorporate it into the website.

## More to implement

- Add pages for more detailed information about MAPF algorithms and corresponding papers.
- Include more MAPF algorithms (CSB-based, SAT-based, etc.) for users to choose which one to run their MAPF instance on.
- Include some other MAPF variants, such as k-robust and lifelong MAPF.
- ...

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact

For more information about me, please visit my [personal website](https://yutongli.me).

[license-shield]: https://img.shields.io/github/license/stevenlyt/mapf-visualizer?label=license&style=for-the-badge
[license-url]: https://github.com/stevenlyt/mapf-visualizer/blob/master/LICENSE.txt
[stars-shield]: https://img.shields.io/github/stars/Stevenlyt/mapf-visualizer?style=for-the-badge
[stars-url]: https://github.com/Stevenlyt/mapf-visualizer/stargazers
