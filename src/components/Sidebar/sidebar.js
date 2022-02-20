import { React, useState, useEffect } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import MenuList from "../../confing/menuItem";
const { SubMenu } = Menu;
const SideBar = ({ Sider }) => {
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    document.title = "Naveed Ahmad";
  }, []);
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        {MenuList.map((m) => {
          return m.sub.length === 0 ? (
            <Menu.Item key={m.classNamekey} icon={m.icon}>
              <Link to={m.url}>{m.name}</Link>
            </Menu.Item>
          ) : (
            <SubMenu key={m.key} icon={m.icon} title={m.name}>
              {m.sub.map((s) => {
                return (
                  <Menu.Item key={s.key} icon={s.icon}>
                    <Link to={s.url}>{s.name}</Link>
                  </Menu.Item>
                );
              })}
            </SubMenu>
          );
        })}
      </Menu>
    </Sider>
  );
};
export default SideBar;
