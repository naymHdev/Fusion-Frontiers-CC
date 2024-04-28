import { Menu } from "antd";
import { FaRegFileAlt } from "react-icons/fa";
import { LuBox } from "react-icons/lu";

const AllMenus = () => {
  return (
    <>
      <Menu
        items={[
          {
            key: "1",
            icon: <FaRegFileAlt />,
            label: "Pages",
          },
        ]}
      />
      <Menu
        items={[
          {
            key: "1",
            icon: <LuBox />,
            label: "UI Elements",
          },
          {
            key: "2",
            icon: <LuBox />,
            label: "Widgets",
          },
          {
            key: "3",
            icon: <LuBox />,
            label: "Icons",
          },
          {
            key: "4",
            icon: <LuBox />,
            label: "Forms",
          },
          {
            key: "5",
            icon: <LuBox />,
            label: "Charts",
          },
          {
            key: "6",
            icon: <LuBox />,
            label: "Tables",
          },
          {
            key: "7",
            icon: <LuBox />,
            label: "Maps",
          },
          {
            key: "8",
            icon: <LuBox />,
            label: "Menu Levels",
          },
        ]}
      />
    </>
  );
};

export default AllMenus;
