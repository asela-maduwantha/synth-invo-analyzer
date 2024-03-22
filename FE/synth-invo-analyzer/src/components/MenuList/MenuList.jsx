import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { DashboardOutlined, LineChartOutlined, UserOutlined, ContainerOutlined, ShopOutlined, LogoutOutlined, UpCircleOutlined } from '@ant-design/icons';
import './menulist.css';

const MenuList = () => {
  return (
    <div>
      <Menu theme='light' mode='inline' className='menu-bar'>
        <Menu.Item key="home" icon={<DashboardOutlined />} >
          <Link to="/" style={{textDecoration:"none"}}>Dashboard</Link>
        </Menu.Item>
        <Menu.SubMenu key="invoices" icon={<ContainerOutlined />} title="Invoices">
          <Menu.Item key="upload-invoices">
            <Link to="/upload-invoices" style={{textDecoration:"none"}}>Upload Invoices</Link>
          </Menu.Item>
          <Menu.Item key="view-invoices">
            <Link to="/view-invoices" style={{textDecoration:"none"}}>View Invoices</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key = "suppliers" icon={<ShopOutlined />} style={{textDecoration:"none"}} title="Supplier Templates">
        <Menu.Item key="add-templates" >
          <Link to="/uploadtemplate" style={{textDecoration:"none"}}>Add Template</Link>
        </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key = "analysis" icon={<LineChartOutlined />} style={{textDecoration:"none"}} title="Analysis" >
        <Menu.Item key="spend-analysis" >
          <Link to="/spendanalysis" style={{textDecoration:"none"}}>Spend Analysis</Link>
        </Menu.Item>
        <Menu.Item key="seasonal-analysis" >
          <Link to="/seasonalanalysis" style={{textDecoration:"none"}}>Seasonal Analysis</Link>
        </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="account" icon={<UserOutlined />} style={{textDecoration:"none"}} title = "Account">
        <Menu.Item key="edit-account" >
          <Link to="/account" style={{textDecoration:"none"}}>Edit Accont</Link>
        </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="change-plan" icon={<UpCircleOutlined />} >
          <Link to="/changeplan" style={{textDecoration:"none"}} >Upgrade</Link>
        </Menu.Item>
        
        <Menu.Item key="logout" icon={<LogoutOutlined />}>Logout</Menu.Item>
      </Menu>
    </div>
  );
};

export default MenuList;
