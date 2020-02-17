```js
const option = {
  xAxis: [
    {
      type: "category",
      name: "节目",
      axisLabel: {
        interval: 0
      },
      axisLine: {
        lineStyle: {
          color: "#fff"
        }
      },
      data: [
        "野狼Disoc",
        "倔强",
        "雨中石",
        "无赖",
        "你的答案",
        "你是我的眼",
        "寄明月",
        "B-box",
        "魔鬼中的天使",
        "突然想起你",
        "桥边姑娘",
        "明天会更好",
        "郑兰桥"
      ]
    }
  ],
  yAxis: [
    {
      type: "value",
      name: "投票人数",
      minInterval: 1,
      axisLine: {
        lineStyle: {
          color: "#fff"
        }
      }
    }
  ],
  series: [
    {
      data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
      name: "投票人数",
      type: "bar",
      label: {
        show: true,
        position: "inside"
      },
      itemStyle: {
        normal: {
          color: function(params) {
            if (params.value > 0 && params.value <= 49) {
              return "#d6a34b";
            } else if (params.value >= 50 && params.value <= 99) {
              return "#d6864b";
            } else if (params.value >= 100 && params.value <= 149) {
              return "#d6654b";
            } else {
              return "#d64d4b";
            }
          }
        }
      }
    }
  ]
};
myChart.setOption(option);
window.addEventListener("resize", () => {
  myChart.resize();
});
```
