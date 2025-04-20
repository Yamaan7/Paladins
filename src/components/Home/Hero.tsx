import { Button, Col, Row } from 'antd'
import React from 'react'
import { Typography } from 'antd';
import ShapeFrame from '../../assets/TokenIcon/Hero/ShapeFrame.png'
import infoCircle from '../../assets/TokenIcon/Hero/info-circle.svg'
import background1 from '../../assets/TokenIcon/Hero/background1.svg'
import { useBreakpoint } from '@/hooks';

const { Text } = Typography;

const Hero = () => {
    const { xs, sm, md, lg, xl, xxl } = useBreakpoint();
    return (
        <Row style={{
            flexDirection: md ? 'row' : 'column-reverse',
            display: 'flex',
            padding: '24px',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '24px',
            borderRadius: '15px',
            // border: 'var(--Size-Line-Width-lineWidth, 1px) solid rgba(255, 255, 255, 0.10)',
            backgroundImage: `url(${background1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // backgroundBlendMode: 'luminosity, normal',
            maxWidth: '1392px',
            width: '100%',
        }}>
            <Row style={{
                display: 'flex',
                paddingTop: '28px',
                flexDirection: 'column',
                justifyContent: md ? 'space-between' : '',
                alignItems: 'flex-start',
                flex: '1 0 0',
                alignSelf: 'stretch',
            }}>
                <Text style={{
                    color: '#FFF',
                    fontFamily: "SpaceGrotesk",
                    fontSize: md ? '74px' : ' 38px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: md ? '64px' : ' 40px',
                    letterSpacing: '-2.22px',
                    textTransform: 'uppercase',
                }}>Unlock Your <br /> Creativity with <br /> <span style={{
                    color: '#FFCB3A',
                    fontSize: md ? '74px' : ' 38px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: md ? '64px' : ' 40px',
                    letterSpacing: '-2.22px',
                    textTransform: 'uppercase',
                    fontFamily: "SpaceGrotesk",
                }}>PALADINS</span></Text>
                <Text style={{
                    color: 'rgba(255, 255, 255, 0.50)',
                    fontFamily: "SpaceGrotesk",
                    fontSize: md ? '20px' : ' 16px',
                    fontStyle: 'normal',
                    fontWeight: '300',
                    lineHeight: '100%',
                    marginBottom: md ? '54px' : '',
                    paddingBottom: md ? '' : '25px',
                    marginTop: md ? '18px' : '12px',
                }}>Mint, Showcase, and Own Your Unique Creations in the World of NFTs</Text>
                <Col style={{
                    gap: '10px',
                    display: 'flex',
                    alignItems: md ? '' : 'center',
                    width: '100%',
                    flexDirection: sm ? 'row' : 'column',

                }}>
                    <Button style={{
                        fontFamily: 'Nippo2',
                        fontSize: '18px',
                        fontWeight: '500',
                        width: '227px',
                        height: '44px',
                    }}>HOW TO MINT</Button>
                    <Row style={{
                        alignItems: 'end',
                        flexDirection: 'column',
                    }}>
                        <Button style={{
                            fontFamily: 'Nippo2',
                            fontSize: '18px',
                            fontWeight: '500',
                            background: '#354DFE',
                            width: '227px',
                            height: '44px',
                        }}>Mint your ERC404</Button>
                        <Text style={{
                            fontFamily: "SpaceGrotesk",
                            color: 'rgba(255, 255, 255, 0.50)',
                            marginTop: '4px',
                        }}>(0.03 ETH) <img src={infoCircle} /> </Text>
                    </Row>


                </Col>
            </Row>
            <img src={ShapeFrame} style={{
                width: md ? '560px ' : '310px',
                height: md ? '353px ' : '195px',
            }} />
        </Row>
    )
}

export default Hero