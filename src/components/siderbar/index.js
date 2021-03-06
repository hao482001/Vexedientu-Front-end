import React from 'react'
import { Button, Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import {
    HomeOutlined,
    OrderedListOutlined,
    GiftOutlined,
    WalletOutlined,
    HistoryOutlined,
    QrcodeOutlined,
    MessageOutlined,
    LeftOutlined,
    RightOutlined,
    SnippetsOutlined,
} from '@ant-design/icons'
import useAuth from 'hooks/useAuth'
import { roles } from 'contexts/UserContext'

import 'antd/dist/antd.min.css'
import 'components/siderbar/siderbar.scss'

const siderWidth = 200
const minimizeSiderWidth = 80

const RenderMenu = () => {
    const { user } = useAuth()
    const { collapsed, setCollapsed } = useAuth()

    const toggleCollapsed = () => {
        localStorage.setItem('collapsed', !collapsed)
        setCollapsed(!collapsed)
    }
    const { Sider } = Layout

    const onClickLink = (e, url = '/') => {
        // if (isEditingData) {
        //     e.preventDefault();
        //     // show modal
        //     setConfirmVisible(true);
        //     setRedirectUrl(url);
        // }
    }

    return user.role === roles.BASIC_USER ? (
        // ------------------- BASIC USER -----------------------
        <Layout className="layout-container">
            <Sider
                width={collapsed ? minimizeSiderWidth : siderWidth}
                className="sider-bar"
                trigger={null}
                collapsible
                collapsed={collapsed}
            >
                <Link to="/" onClick={(e) => onClickLink(e)}>
                    <div className="sider-bar__logo">
                        {collapsed === false ? (
                            <div className="logo-full" />
                        ) : (
                            <div className="logo-collapsed" />
                        )}
                    </div>
                </Link>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    inlineCollapsed={collapsed}
                    className="sider-bar__menu"
                >
                    <Menu.Item
                        key="1"
                        icon={<HomeOutlined className="menu-item-icon" />}
                    >
                        <Link className="sider-bar__link" to="/vehicles">
                            Danh s??ch c??c xe
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        key="2"
                        icon={
                            <OrderedListOutlined className="menu-item-icon" />
                        }
                    >
                        <Link className="sider-bar__link" to="/parking-lots">
                            Danh s??ch b??i ????? xe
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        key="3"
                        icon={<GiftOutlined className="menu-item-icon" />}
                    >
                        <Link className="sider-bar__link" to="/packages">
                            C??c g??i ??u ????i
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        key="4"
                        icon={<WalletOutlined className="menu-item-icon" />}
                    >
                        <Link
                            className="sider-bar__link"
                            to={
                                user.role === roles.ADMIN
                                    ? '/wallets'
                                    : '/wallets/detail'
                            }
                        >
                            V?? c?? nh??n
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        key="5"
                        icon={<HistoryOutlined className="menu-item-icon" />}
                    >
                        <Link
                            className="sider-bar__link"
                            to="/parking-histories"
                        >
                            L???ch s??? g???i xe
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        key="6"
                        icon={<QrcodeOutlined className="menu-item-icon" />}
                    >
                        <Link className="sider-bar__link" to="/qr-checkout">
                            QR checkout
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        key="7"
                        icon={<MessageOutlined className="menu-item-icon" />}
                    >
                        <Link className="sider-bar__link" to="/feedbacks">
                            Feedback
                        </Link>
                    </Menu.Item>
                    <div className="scoll-menu">
                        <Button
                            className="scoll-menu-button"
                            onClick={toggleCollapsed}
                        >
                            {collapsed ? <RightOutlined /> : <LeftOutlined />}
                        </Button>
                    </div>
                </Menu>
            </Sider>
        </Layout>
    ) : user.role === roles.PARKING_LOT_USER ? (
        <Layout className="layout-container">
            <Sider
                width={collapsed ? minimizeSiderWidth : siderWidth}
                className="sider-bar"
                trigger={null}
                collapsible
                collapsed={collapsed}
            >
                <Link to="/" onClick={(e) => onClickLink(e)}>
                    <div className="sider-bar__logo">
                        {collapsed === false ? (
                            <div className="logo-full" />
                        ) : (
                            <div className="logo-collapsed" />
                        )}
                    </div>
                </Link>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    inlineCollapsed={collapsed}
                    className="sider-bar__menu"
                >
                    <Menu.Item
                        key="1"
                        icon={<HomeOutlined className="menu-item-icon" />}
                    >
                        <Link className="sider-bar__link" to="/parking-lots">
                            Danh s??ch b??i xe
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        key="2"
                        icon={
                            <OrderedListOutlined className="menu-item-icon" />
                        }
                    >
                        <Link className="sider-bar__link" to="/checkin-checkout">
                            Qu???n l?? ra v??o b??i
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        key="3"
                        icon={<GiftOutlined className="menu-item-icon" />}
                    >
                        <Link className="sider-bar__link" to="/packages">
                            C??c g??i ??u ????i
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        key="4"
                        icon={<WalletOutlined className="menu-item-icon" />}
                    >
                        <Link
                            className="sider-bar__link"
                            to={
                                user.role === roles.ADMIN
                                    ? '/wallets'
                                    : '/wallets/detail'
                            }
                        >
                            V?? c?? nh??n
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        key="5"
                        icon={<HistoryOutlined className="menu-item-icon" />}
                    >
                        <Link
                            className="sider-bar__link"
                            to="/parking-histories"
                        >
                            L???ch s??? g???i xe
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        key="6"
                        icon={<SnippetsOutlined className="menu-item-icon" />}
                    >
                        <Link className="sider-bar__link" to="#">
                            Th???ng k?? doanh thu
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        key="7"
                        icon={<MessageOutlined className="menu-item-icon" />}
                    >
                        <Link className="sider-bar__link" to="/feedbacks">
                            Feedback
                        </Link>
                    </Menu.Item>
                    <div className="scoll-menu">
                        <Button
                            className="scoll-menu-button"
                            onClick={toggleCollapsed}
                        >
                            {collapsed ? <RightOutlined /> : <LeftOutlined />}
                        </Button>
                    </div>
                </Menu>
            </Sider>
        </Layout>
    ) : (
        //-----------------------------ADMIN------------------------
        <Layout className="layout-container">
            <Sider
                width={collapsed ? minimizeSiderWidth : siderWidth}
                className="sider-bar"
                trigger={null}
                collapsible
                collapsed={collapsed}
            >
                <Link to="/" onClick={(e) => onClickLink(e)}>
                    <div className="sider-bar__logo">
                        {collapsed === false ? (
                            <div className="logo-full" />
                        ) : (
                            <div className="logo-collapsed" />
                        )}
                    </div>
                </Link>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    inlineCollapsed={collapsed}
                    className="sider-bar__menu"
                >
                    <Menu.Item
                        key="1"
                        icon={<HomeOutlined className="menu-item-icon" />}
                    >
                        <Link className="sider-bar__link" to="/accounts">
                            Qu???n l?? t??i kho???n user
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        key="2"
                        icon={
                            <OrderedListOutlined className="menu-item-icon" />
                        }
                    >
                        <Link className="sider-bar__link" to="/verify-request">
                            Qu???n l?? y??u c???u ????ng k??
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        key="3"
                        icon={<WalletOutlined className="menu-item-icon" />}
                    >
                        <Link className="sider-bar__link" to="/wallets">
                            Qu???n l?? v?? user
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        key="4"
                        icon={<GiftOutlined className="menu-item-icon" />}
                    >
                        <Link className="sider-bar__link" to="/packages">
                            Qu???n l?? g??i ??u ????i
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        key="5"
                        icon={<MessageOutlined className="menu-item-icon" />}
                    >
                        <Link className="sider-bar__link" to="/feedbacks">
                            Qu???n l?? feedback
                        </Link>
                    </Menu.Item>
                    <div className="scoll-menu">
                        <Button
                            className="scoll-menu-button"
                            onClick={toggleCollapsed}
                        >
                            {collapsed ? <RightOutlined /> : <LeftOutlined />}
                        </Button>
                    </div>
                </Menu>
            </Sider>
        </Layout>
    )
}

export default RenderMenu
