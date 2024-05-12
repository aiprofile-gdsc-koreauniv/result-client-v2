const panelStyle = {};

export const items = [
  {
    key: "1",
    label: (
      <div style={{ fontFamily: "SB_light", color: "gray" }}>
        주의사항 확인하기
      </div>
    ),
    children: (
      <div
        style={{
          height: 50,
          borderRadius: 30,
          padding: 20,
          // border: "1px solid black",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
        }}
      >
        <span> 주의사항 ~~ 입니다</span>
      </div>
    ),
    style: panelStyle,
  },
];
