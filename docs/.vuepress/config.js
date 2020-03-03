module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  themeConfig: {
    logo: "/assets/img/logo.png",
    smoothScroll: true,
    nav: [
      { text: "Home", link: "/" },
      { text: "Config", link: "/config" },
      { text: "External", link: "https://google.com" },
      {
        text: "External",
        items: [
          {
            text: "Group1",
            link: "/guide/"
          },
          {
            text: "Group2",
            link: "/config"
          }
        ]
      }
    ],
    sidebar: {
      "/html/": ["", "html1"],
      "/javascript/": ["", "js1"],
      "/config": []
    }
    // sidebar: ["/", ["/config", "Explicit"], ["/html/", "Explicit link text"]]
    // sidebar: [
    //   {
    //     title: "Group 1", // 必要的
    //     path: "/html/", // 可选的, 应该是一个绝对路径
    //     collapsable: false, // 可选的, 默认值是 true,
    //     sidebarDepth: 1, // 可选的, 默认值是 1
    //     children: ["/"]
    //   },
    //   {
    //     title: "Group 2",
    //     children: ["/"]
    //   }
    // ]
  }
};
