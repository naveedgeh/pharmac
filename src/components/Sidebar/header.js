import React from "react";
import { Dropdown,Avatar,Button } from "antd";
import { DownOutlined,UserOutlined } from "@ant-design/icons";
import layout from "../../asets/layout";
import Profile from "../common/Profile";
import { Link } from "react-router-dom";
const Header = ({ Header }) => {
  return (
    <Header
      className="site-layout-background"
      style={{ padding: 0, ...layout.layout }}
    >
      <div className="header-left-mendix">
      <Link to="/admin/pos"><Button className="pos-btn-mendix" shape="circle">POS</Button></Link>
      <Dropdown
        overlay={<Profile/>}
       // onVisibleChange={this.handleVisibleChange}
        //visible={this.state.visible}
      >
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
        <Avatar size={64} size="large" icon={<UserOutlined />} /> <DownOutlined />
        </a>
      </Dropdown>
    
      </div>
     
    </Header>
  );
};
export default Header;
