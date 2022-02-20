import {React,useState,useEffect} from 'react';
import { Layout, Menu } from 'antd';
import {SideBar,HeaderDashboard,FooterDashboard,BreadcrumbDashboard} from '../../components/Sidebar/index';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const Dashbaord=()=> {
    const [collapsed,setCollapsed]=useState(false);
    useEffect(()=>{
        document.title="Naveed Ahmad"
    },[])
   const onCollapse = ()=> {
      setCollapsed(!collapsed);
    };
    return (
      <div className="App">
        <Layout style={{ minHeight: '100vh' }}>
            {/* Side bar */}
            <SideBar Sider={Sider}/>
        <Layout className="site-layout" >
            {/* Header */}
            <HeaderDashboard Header={Header}/>
          <Content style={{ margin: '0 16px' }}>
              {/* BreadCrumb */}
            {/* <BreadcrumbDashboard Breadcrumb={Breadcrumb}/> */}
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
             
              <Outlet/>
             
            </div>
          </Content>
            {/* Footer */}
            <FooterDashboard Footer={Footer}/>
        </Layout>
      </Layout>
    </div>
    );
 
}
export default Dashbaord;
