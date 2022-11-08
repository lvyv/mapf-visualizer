var CBSH2RTC = {
  name: "CBSH2-RTC",
  options: {
    heuristics: {
      name: "High-level heuristics",
      options: ["Zero", "CG", "DG", "WDG"],
      value: 3,
    },
    rectangleReasoning: {
      name: "Rectangle reasoning",
      options: ["None", "R", "RM", "GR", "Disjoint"],
      value: 3,
    },
    corridorReasoning: {
      name: "Corridor reasoning",
      options: ["None", "C", "PC", "STC", "GC", "Disjoint"],
      value: 4,
    },
    prioritizeConflict: {
      name: "Prioritizing conflict",
      options: [false, true],
      value: 1,
    },
    bypass: {
      name: "Bypassing conflict",
      options: [false, true],
      value: 1,
    },
    disjointSplitting: {
      name: "Disjoint splitting",
      options: [false, true],
      value: 0,
    },
    mutex: {
      name: "Mutex propagation",
      options: [false, true],
      value: 0,
    },
    target: {
      name: "Target reasoning",
      options: [false, true],
      value: 1,
    },
    SIPP: {
      name: "SIPP",
      options: [false, true],
      value: 0,
    },
  },
  description: [
    "为优化前端显示效果，网格地图行数被限制为不超过列数。如果地图尺寸是行大于列，只需简单将地图进行行列转置。",
    "您当前选择的是<b>传统 MAPF</b>算法包,具体算法实现是 <b>CBSH2-RTC</b>。 可应用的优化技术包括: <b>可容启发式（High-level admissible heuristics）, 冲突优先（Prioritizing conflict）, 矩形推理（Rectangle reasoning）, 通道推理（Corridor reasoning）, 冲突旁路（Bypassing conflict）, 不相交的分裂（Disjoint splitting）, 互斥传播（Mutex propagation）, 目标推理（Target reasoning）, SIPP</b>.",
  ],
};

var EECBS = {
  name: "EECBS",
  options: {
    heuristics: {
      name: "High-level heuristics",
      options: ["Zero", "CG", "DG", "WDG"],
      control: { suboptimalSolver: [1, 2] },
      value: 3,
    },
    solver: {
      name: "High-level solver",
      options: ["A*", "A*eps", "EES", "NEW"],
      control: { suboptimalSolver: [0] },
      value: 2,
    },
    inadmissibleHeuristics: {
      name: "Inadmissible heuristics",
      options: ["Zero", "Global", "Path", "Local", "Conflict"],
      value: 1,
    },
    prioritizeConflict: {
      name: "Prioritizing conflict",
      options: [false, true],
      value: 1,
    },
    bypass: {
      name: "Bypassing conflict",
      options: [false, true],
      value: 1,
    },
    disjointSplitting: {
      name: "Disjoint splitting",
      options: [false, true],
      value: 0,
    },
    rectangleReasoning: {
      name: "Rectangle reasoning",
      options: [false, true],
      value: 1,
    },
    target: {
      name: "Target reasoning",
      options: [false, true],
      value: 1,
    },
    corridorReasoning: {
      name: "Corridor reasoning",
      options: [false, true],
      value: 1,
    },
    suboptimalSolver: {
      name: "Suboptimal solver",
      options: [false, true],
      restrictions: { heuristics: [1, 2], solver: [0] },
      value: 1,
    },
    suboptimality: {
      name: "suboptimality",
      options: [1.0, 2.0],
      restrictions: { suboptimalSolver: [0] },
      value: 1.1,
    },
  },
  description: [
    "为优化前端显示效果，网格地图行数被限制为不超过列数。如果地图尺寸是行大于列，只需简单将地图进行行列转置。",
    "当前您选择的地图类型为 <b>传统 MAPF 算法包</b>，你选择使用的算法是 <b>EECBS</b>。",
  ],
};

var PBS = {
  name: "PBS",
  options: {
    SIPP: {
      name: "SIPP",
      options: [false, true],
      value: 0,
    },
  },
  description: [
    "为优化前端显示效果，网格地图行数被限制为不超过列数。如果地图尺寸是行大于列，只需简单将地图进行行列转置。",
    "当前您选择的地图类型为 <b>传统 MAPF 算法包</b>，你选择使用的算法是 <b>基于优先级的搜索(PBS)</b>技术。",
  ],
};

var MCCBS = {
  name: "MC-CBS",
  options: {
    mutex: {
      name: "Mutex propagation",
      options: [false, true],
      value: 1,
    },
  },
  description: [
    "为优化前端显示效果，网格地图行数被限制为不超过列数。如果地图尺寸是行大于列，只需简单将地图进行行列转置。",
    'The MAPF variant you choose is <b>classic MAPF</b>, and the algorithm you choose is <b>CBSH2-RTC</b>. The available improvement techniques include:{" "}<b>High-level admissible heuristics, Prioritizing conflict, Rectangle reasoning, Corridor reasoning, Bypassing conflict, Disjoint splitting, Mutex propagation, Target reasoning, SIPP</b>.',
  ],
};

export { CBSH2RTC, EECBS, MCCBS, PBS };
