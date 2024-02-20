import Search from "antd/es/input/Search";
import styles from "./navbar.module.scss";
import type { SearchProps } from "antd/es/input/Search";
import { Flex, Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";

const { Header } = Layout;

const menuItems = [
  {
    label: "Home",
    key: "/",
  },
  {
    label: "Business",
    key: "/bussines",
  },
  {
    label: "Entertainment",
    key: "/entertainment",
  },
  {
    label: "General",
    key: "/general",
  },
  {
    label: "Health",
    key: "/health",
  },
  {
    label: "Science",
    key: "/science",
  },
  {
    label: "Sports",
    key: "/sports",
  },
  {
    label: "Technology",
    key: "/technology",
  },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
    console.log(info?.source, value);
  return (
    <div className={styles.navbar}>
      <Flex justify="space-between" align="center">
        <img src="/logo.svg" alt="logo" width={120} height={70} />
        <Search
          placeholder="e.g sport, tech, crypto, ..."
          onSearch={onSearch}
          enterButton
          style={{ width: 300 }}
        />
      </Flex>
      <hr />
      <Header className={styles.navbar__header}>
        <Menu mode="horizontal" selectedKeys={[pathname]}>
          {menuItems.map((item) => (
            <Menu.Item key={item.key}>
              <Link to={item.key}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
    </div>
  );
};

export default Navbar;
