import { useState } from 'react';
import ListIcon from '@mui/icons-material/List';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import HomeIcon from '@mui/icons-material/Home';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CampaignIcon from '@mui/icons-material/Campaign';


import { Layout, Menu, Button, theme } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import UserAdmin from '../Hooks/UserAdmin';
import UserMember from '../Hooks/UseMenber';



const { Sider, Content } = Layout;

const Dashboard = () => {
    const [collapsed, setCollapsed] = useState(true);
    const {
        token: { colorBgContainer },
    } = theme.useToken();



    const [isAdmin] = UserAdmin()


    const [isMember] = UserMember()








    return (
        <Layout className='h-screen'>
            <Sider trigger={null}  collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical  mx-auto" />
                <Button
                    className='text-white border-none pl-7 mt-5 mb-2 hover:text-white'

                    onClick={() => setCollapsed(!collapsed)}


                ><ListIcon></ListIcon></Button>

                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['2']}

                >

                    <Menu.Item key={1} icon={<HomeIcon />}>
                        <NavLink to={"/"}>Home</NavLink>
                    </Menu.Item>

                    {/* Admin section */}

                    {
                        isAdmin && <>


                            <Menu.Item key={2} icon={<AccountCircleIcon />}>
                                <NavLink to={"/dashboard/adminProfile"}>Admin Profile</NavLink>
                            </Menu.Item>
                            <Menu.Item key={3} icon={<ManageAccountsIcon />}>
                                <NavLink to={"/dashboard/manageMembers"}>Manage Members</NavLink>
                            </Menu.Item>
                            <Menu.Item key={4} icon={<CampaignIcon />}>
                                <NavLink to={"/dashboard/makeAnnouncement"}>Make Announcement</NavLink>
                            </Menu.Item>
                            <Menu.Item key={5} icon={<RequestPageIcon />}>
                                <NavLink to={"/dashboard/agreementRequest"}>Agreement Request</NavLink>
                            </Menu.Item>
                            <Menu.Item key={6} icon={<LocalOfferIcon />}>
                                <NavLink to={"/dashboard/manageCoupons"}>Manage Coupons</NavLink>
                            </Menu.Item>



                        </>
                    }

                    {/* member section */}


                    {
                        isMember && <>

                            <Menu.Item key={7} icon={<AccountCircleIcon />}>
                                <NavLink to={"/dashboard/member/profile"}>User Profile</NavLink>
                            </Menu.Item>
                            <Menu.Item key={8} icon={<CreditCardIcon />}>
                                <NavLink to={"/dashboard/Announcement"}>Make payment</NavLink>
                            </Menu.Item>
                            <Menu.Item key={9} icon={<AccountBalanceIcon />}>
                                <NavLink to={"/dashboard/Announcement"}>Payment History</NavLink>
                            </Menu.Item>

                            <Menu.Item key={10} icon={<CampaignIcon />}>
                                <NavLink to={"/dashboard/Announcement"}>Announcements</NavLink>
                            </Menu.Item>
                        </>
                    }

                    {/* user section */}

                    {
                        isAdmin || isMember === false && <>

                            <Menu.Item key={11} icon={<AccountCircleIcon />}>
                                <NavLink to={"/dashboard/user/profile"}>User Profile</NavLink>
                            </Menu.Item>


                            <Menu.Item key={12} icon={<CampaignIcon />}>

                                <NavLink to={"/dashboard/Announcement"}>Announcements</NavLink>
                            </Menu.Item>


                        </>
                    }


                </Menu>


            </Sider>
            <Layout>

                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <Outlet></Outlet>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Dashboard;
