import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { DashboardOutlined, LineChartOutlined, UserOutlined, ContainerOutlined, ShopOutlined, LogoutOutlined } from '@ant-design/icons';
import './menulist.css';

const MenuList = () => {
  return (
    <div>
      <Menu theme='light' mode='inline' className='menu-bar'>
        <Menu.Item key="home" icon={<DashboardOutlined />}>
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.SubMenu key="invoices" icon={<ContainerOutlined />} title="Invoices">
          <Menu.Item key="upload-invoices">
            <Link to="/upload-invoices">Upload Invoices</Link>
          </Menu.Item>
          <Menu.Item key="view-invoices">
            <Link to="/view-invoices">View Invoices</Link>
          </Menu.Item>
          <Menu.Item key="delete-invoices">
            <Link to="/delete-invoices">Delete Invoices</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key="suppliers" icon={<ShopOutlined />}>
          <Link to="/suppliers">Suppliers</Link>
        </Menu.Item>
        <Menu.Item key="analitics" icon={<LineChartOutlined />}>
          <Link to="/analytics">Analytics</Link>
        </Menu.Item>
        <Menu.Item key="account" icon={<UserOutlined />}>
          <Link to="/account">Accont</Link>
        </Menu.Item>
        <Menu.Item key="logout" icon={<LogoutOutlined />}>Logout</Menu.Item>
      </Menu>
    </div>
  );
};

export default MenuList;
