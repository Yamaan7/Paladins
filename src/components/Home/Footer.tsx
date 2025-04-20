import React from 'react'
import Social1 from '../../assets/TokenIcon/Footer/Social1.png'
import Social2 from '../../assets/TokenIcon/Footer/Social2.png'
import Social3 from '../../assets/TokenIcon/Footer/Social3.png'
import Social4 from '../../assets/TokenIcon/Footer/Social4.png'
import { Typography, Row, Col, Image } from 'antd';
import { useBreakpoint } from '@/hooks';

const { Text } = Typography;

const Footer = () => {
    const { xs, sm, md, lg, xl, xxl } = useBreakpoint();
    return (
        <Row style={{
            maxWidth: '1392px',
            width: '100%',
            paddingTop: '50px',
        }}>
            <Row style={{
                padding: '36px 0px',
                borderTop: '1px solid rgba(255, 255, 255, 0.20)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '56px',
                alignSelf: 'stretch',
                width: '100%',
            }}>
                <SocialComponent />
                <HeadersComponent />
                <Row style={{
                    textAlign: 'center',
                    alignItems: 'center',
                    justifyContent: md ? 'left' : 'center',
                    width: '100%',
                }}>
                    <Text style={{
                        color: 'var(--Text-Descritpion---On-Black, #7D7D7D)',
                        fontFamily: "SpaceGrotesk",
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '100%',
                    }}>© 2024 PALADINS, all rights reserved</Text>
                </Row>
            </Row>

        </Row>
    )
}

export default Footer







const SocialComponent = () => {
    const { xs, sm, md, lg, xl, xxl } = useBreakpoint();
    return (
        <Row style={{
            flexDirection: 'column',
            gap: '10px',
            alignItems: md ? 'flex-start' : 'center',
            width: md ? '354px' : ' 100%',
        }}>
            <Text style={{
                color: 'var(--Text-Default, #FFF)',
                fontFamily: 'Nippo2',
                fontSize: '36px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: 'normal',
            }}>PALADINS</Text>
            <Text style={{
                color: 'var(--Text-Descritpion---On-Black, #7D7D7D)',
                fontFamily: "SpaceGrotesk",
                fontSize: '18px',
                fontStyle: 'normal',
                fontWeight: '700',
                lineHeight: '100%',
                textAlign: md ? 'left' : 'center',
            }}>
                Lorem ipsum dolor sit amet consectetur. Non curabitur egestas quis in gravida parturient lacinia lacus.
            </Text>
            <Row style={{
                paddingTop: '10px',
                alignItems: 'flex-start',
                gap: '20px',
            }}>

                <Image
                    src={Social1}
                    alt="Social Icon 1"
                    style={{ width: '24px', height: '24px' }}
                />


                <Image
                    src={Social2}
                    alt="Social Icon 2"
                    style={{ width: '24px', height: '24px' }}
                />

                <Image
                    src={Social3}
                    alt="Social Icon 3"
                    style={{ width: '24px', height: '24px' }}
                />

                <Image
                    src={Social4}
                    alt="Social Icon 4"
                    style={{ width: '24px', height: '24px' }}
                />

            </Row>
        </Row>
    );
};







const HeadersComponent = () => {
    const headers = ['Products', 'Contact Us', 'About'];
    const footerItems = ['Footer Item', 'Footer Item', 'Footer Item'];
    const { xs, sm, md, lg, xl, xxl } = useBreakpoint();
    return (

        <Row style={{
            display: 'flex',
            gap: md ? '10px' : '36px',
            flex: 1,
            justifyContent: 'space-around',
            flexDirection: sm ? 'row' : 'column',
        }}>
            {headers.map((header, index) => (
                <Col key={index} style={{ display: 'flex', flexDirection: 'column', }}>
                    <Text style={{
                        color: 'var(--Text-Default, #FFF)',
                        textAlign: sm ? 'left' : 'center',
                        fontFamily: "SpaceGrotesk",
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWeight: '800',
                        lineHeight: '100%',
                    }}>{header}</Text>
                    {footerItems.map((item, idx) => (
                        <Text key={idx} style={{
                            color: 'var(--Text-Descritpion---On-Black, #7D7D7D)',
                            textAlign: 'center',
                            fontFamily: "SpaceGrotesk",
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '400',
                            lineHeight: '100%',
                            marginTop: '8px',
                        }}>{item}</Text>
                    ))}

                </Col>
            ))
            }

        </Row>
    );
};






















































{/* <Row style={{
                justifyContent: 'space-between',
                flexDirection: 'column',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '56px',
                alignSelf: 'stretch',
                width: '100%',
            }}>
                <Row style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '10px',
                }}>
                    <Row>
                        <Text style={{
                            color: 'var(--Text-Default, #FFF)',
                            fontFamily: 'Nippo2',
                            fontSize: '36px',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            lineHeight: 'normal',
                        }}>PALADINS</Text>
                        <Text style={{
                            color: 'var(--Text-Descritpion---On-Black, #7D7D7D)',
                            fontFamily: "SpaceGrotesk",
                            fontSize: '14px',
                            fontStyle: 'normal',
                            fontWeight: '700',
                            lineHeight: '100%',
                        }}>Lorem ipsum dolor sit amet consectetur. Non curabitur egestas quis in gravida parturient lacinia lacus.</Text>
                        <Row style={{
                            display: 'flex',
                            paddingTop: '10px',
                            alignItems: 'flex-start',
                            gap: '20px',
                        }}>
                            <img src={Social1} style={{
                                width: '24px',
                                height: '24px',
                            }} />
                            <img src={Social2} style={{
                                width: '24px',
                                height: '24px',
                            }} />
                            <img src={Social3} style={{
                                width: '24px',
                                height: '24px',
                            }} />
                            <img src={Social4} style={{
                                width: '24px',
                                height: '24px',
                            }} />
                        </Row>
                    </Row>


                    <Row style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        border: '1px solid red',
                        width: '100%',
                    }}>
                        <Row style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: '10px',
                            width: '33%',
                        }}>
                            <Text style={{
                                color: 'var(--Text-Default, #FFF)',
                                textAlign: 'center',
                                fontFamily: "SpaceGrotesk",
                                fontSize: '18px',
                                fontStyle: 'normal',
                                fontWeight: '800',
                                lineHeight: '100%',
                            }}>Products</Text>
                            <Text>Footer Item</Text>
                            <Text>Footer Item</Text>
                            <Text>Footer Item</Text>
                        </Row>
                        <Row style={{
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: '10px',
                            width: '33%',
                        }}>
                            <Row style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: '10px',
                                width: '33%'
                            }}>
                                <Text style={{
                                    color: 'var(--Text-Default, #FFF)',
                                    textAlign: 'center',
                                    fontFamily: "SpaceGrotesk",
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: '800',
                                    lineHeight: '100%',
                                }}>Contact Us</Text>
                                <Text>Footer Item</Text>
                                <Text>Footer Item</Text>
                                <Text>Footer Item</Text>
                            </Row>
                        </Row>
                        <Row style={{
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            width: '33%',
                            gap: '10px',
                        }}>
                            <Row style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                gap: '10px',
                            }}>
                                <Text style={{
                                    color: 'var(--Text-Default, #FFF)',
                                    textAlign: 'center',
                                    fontFamily: "SpaceGrotesk",
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: '800',
                                    lineHeight: '100%',
                                }}>About</Text>
                                <Text>Footer Item</Text>
                                <Text>Footer Item</Text>
                                <Text>Footer Item</Text>
                            </Row>
                        </Row>
                    </Row>

                </Row>
                <Text style={{
                    fontFamily: 'SpaceGrotesk',
                    color: '#7D7D7D',
                    fontSize: '16px',
                    fontWeight: '800',
                }}>© 2024 PALADINS, all rights reserved</Text>
            </Row> */}