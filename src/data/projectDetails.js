// src/data/projectDetails.js
// 图片建议放 src/images/... 然后 import
import Img1 from "../images/Frame 9.png";
import Img2 from "../images/Frame 9.png";

export const projectDetails = {
  "1": {
    titleOverride: "", // 可选：想覆盖列表标题就写，否则留空
    summary: "一句话：这个项目为谁解决什么问题，用了什么方式。",
    tags: ["Unity", "Meta Quest", "Hand Tracking"],
    date: "2025",
    role: "XR Developer",
    duration: "6 weeks",
    team: "Solo",
    stack: ["Unity", "C#", "OpenXR", "Meta SDK"],

    // 视频支持两种：youtube 或 mp4（你二选一，或都写）
    video: {
      type: "youtube",
      url: "https://www.youtube.com/embed/xxxxxxxx", // 用 embed 链接
      // type: "mp4",
      // url: "/videos/demo1.mp4", // 放 public/videos 下
    },

    gallery: [
      { src: Img1, alt: "demo screenshot 1" },
      { src: Img2, alt: "demo screenshot 2" },
    ],

    sections: [
      {
        title: "Overview",
        paragraphs: [
          "用 2-4 句话讲清楚背景、动机、你做的核心内容。",
        ],
      },
      {
        title: "What I Built",
        bullets: [
          "Feature A：……",
          "Feature B：……",
          "Feature C：……",
        ],
      },
      {
        title: "Challenges",
        paragraphs: [
          "写 2-3 个挑战，每个挑战一句 + 你怎么解决。",
        ],
      },
      {
        title: "Results",
        bullets: [
          "可量化的结果（比如 latency、accuracy、user feedback）",
          "或者 demo 成果、发布链接",
        ],
      },
    ],

    links: [
      { label: "GitHub", url: "https://github.com/..." },
      { label: "Demo", url: "https://..." },
    ],
  },

  // 你继续加 "2", "3", "4"...
};
