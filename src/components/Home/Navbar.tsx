import { Button, Col, Dropdown, Row, Space } from 'antd'
import React, { useState } from 'react'
import { Drawer } from 'antd';
import paladins from '../../assets/TokenIcon/Navbar/PALADINS.svg'
import wallet from '../../assets/TokenIcon/Navbar/wallet.svg'
import arrowDown from '../../assets/TokenIcon/Navbar/arrowDown.svg'
import menu from '../../assets/TokenIcon/Navbar/menu.svg'
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useBreakpoint } from '@/hooks';
import { Typography, Image } from 'antd';
const { Text } = Typography;


type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: 'Home',
        key: 'Home',
    },
    {
        label: 'Mint',
        key: 'Mint'
    }, {
        label: 'Staking',
        key: 'Staking',
    }, {
        label: 'Accounts',
        key: 'Accounts',
    },
];

const Navbar = () => {
    const { xs, sm, md, lg, xl, xxl } = useBreakpoint();
    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <Row style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1392px',
            width: '100%',
            borderBottom: 'var(--Size-Line-Width-lineWidth, 1px) solid rgba(255, 255, 255, 0.20)',
            marginBottom: '24px',
            padding: md ? '' : '16px 0px',
        }}>
            <img src={paladins} />
            <Row style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '46px',
                // flex: '1 0 0',
                // alignSelf: 'stretch',
            }}>
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}
                    style={{
                        width: '398px',
                        fontWeight: '378px',
                        display: md ? 'block' : 'none',
                    }} />
            </Row>


            {/* -------------------- wallet button -------------------- */}

            <Row style={{ display: md ? 'block' : 'none' }}>
                <Dropdown menu={{ items }} trigger={['click']}>
                    <Button
                        onClick={(e) => e.preventDefault()}
                        style={{
                            fontFamily: 'Nippo2',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Space style={{
                            color: '#fff',
                        }}>
                            <img src={wallet} alt="wallet" />
                            MY 404 WALLET
                            <img src={arrowDown} alt="arrow down" />
                        </Space>
                    </Button>
                </Dropdown>
            </Row>

            {md ? <></> : <MenuComponent />}


        </Row >
    )
}

export default Navbar




const MenuComponent = () => {
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const { xs, sm, md, lg, xl, xxl } = useBreakpoint();

    const [current, setCurrent] = useState('mail');

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <>
            <Row onClick={showDrawer} style={{
                display: md ? 'none' : 'block',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: '10px',
                background: 'var(--Button-Primary-BG, #262626)',
                padding: '10px',
            }}>
                <img src={wallet} style={{
                    paddingRight: '16px',
                    borderRight: '1px solid rgba(255, 255, 255, 0.10)',
                }} />
                <img src={menu} style={{
                    paddingLeft: '16px',
                }} />
            </Row>

            <Drawer
                width={261}
                placement="left"
                onClose={onClose}
                closable={false}
                open={open}>
                <Row style={{
                    display: 'flex',
                    width: '100%',
                    padding: '24px',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flex: '1 0 0',
                    borderRadius: '12px',
                    border: '0.868px solid rgba(255, 255, 255, 0.20)',
                    background: '#2D2D2D',
                    boxShadow: '0px 1.737px 5.211px 0px rgba(0, 0, 0, 0.15)',
                }}>
                    <Row style={{
                        display: 'flex',
                        height: '431.76px',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '36px',
                        alignSelf: 'stretch',
                    }}>
                        <Text style={{
                            color: '#FFF',
                            fontFamily: 'Nippo2',
                            fontSize: '24px',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            lineHeight: 'normal',
                        }}>PALADINS</Text>

                        <Row style={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                        }}>
                            <Menu onClick={onClick} selectedKeys={[current]} mode="vertical" items={items}
                                style={{
                                    width: '100%',
                                    fontWeight: '378px',
                                }} />
                        </Row>
                        <Button className='disconnectWallet'>disconnect wallet</Button>
                    </Row>
                    <Text style={{
                        textAlign: 'center',
                        color: 'rgba(255, 255, 255, 0.50)',
                    }}>© 2024 PALADINS, all rights reserved</Text>
                </Row>
            </Drawer >
        </>
    );
};

// ---------------------------------------------------------------------



// const items: MenuProps['items'] = [
//     { label: <a href="https://www.antgroup.com">1st menu item</a>, key: '0' },
//     { label: <a href="https://www.aliyun.com">2nd menu item</a>, key: '1' },
//     { type: 'divider' },
//     { label: '3rd menu item', key: '3' },
//   ];


//   const App: React.FC = () => (


//   );


{/* <Row style={{
                display: md ? 'block' : 'none',
            }}>
                <Button style={{
                    fontFamily: 'Nippo2',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}> <img src={wallet} />
                    MY 404 WALLET
                    <img src={arrowDown} />
                </Button>
            </Row> */}


{/* <Row style={{
                display: md ? 'none' : 'block',
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: '10px',
                background: 'var(--Button-Primary-BG, #262626)',
                padding: '10px',
            }}>

                <img src={wallet} style={{
                    paddingRight: '16px',
                    borderRight: '1px solid rgba(255, 255, 255, 0.10)',
                }} />
                <img src={menu} style={{
                    paddingLeft: '16px',
                }} />
            </Row> */}



