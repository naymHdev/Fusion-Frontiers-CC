import { Menu } from "antd";
import { FaRegFileAlt } from "react-icons/fa";
import { LuBox } from "react-icons/lu";
import { FaRegBookmark, FaRegMap } from "react-icons/fa6";
import { MdBarChart } from "react-icons/md";
import { LuLayoutGrid } from "react-icons/lu";
import { GoShareAndroid } from "react-icons/go";
import { HiOutlineChip } from "react-icons/hi";
import { FiGift } from "react-icons/fi";
import { Link } from "react-router-dom";

const AllMenus = () => {
  return (
    <>
      <Menu
        items={[
          {
            key: "1",
            icon: <FaRegFileAlt />,
            label: <Link to="advancedTables"> Pages</Link>,
          },
        ]}
      />
      <hr />
      <Menu
        items={[
          {
            key: "1",
            icon: <LuBox />,
            label: "UI Elements",
          },
          {
            key: "2",
            icon: <FiGift />,
            label: "Widgets",
          },
          {
            key: "3",
            icon: <HiOutlineChip />,
            label: "Icons",
          },
          {
            key: "4",
            icon: <FaRegBookmark />,
            label: "Forms",
          },
          {
            key: "5",
            icon: <MdBarChart />,
            label: "Charts",
          },
          {
            key: "6",
            icon: <LuLayoutGrid />,
            label: "Tables",
          },
          {
            key: "7",
            icon: <FaRegMap />,
            label: "Maps",
          },
          {
            key: "8",
            icon: <GoShareAndroid />,
            label: "Menu Levels",
          },
        ]}
      />
    </>
  );
};

export default AllMenus;
