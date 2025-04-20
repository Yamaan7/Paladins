import { Typography, Row, Col, Image } from 'antd';
import React from 'react'
import icon1 from '../../assets/TokenIcon/NFT/icon1.png'
import icon2 from '../../assets/TokenIcon/NFT/icon2.png'
import icon3 from '../../assets/TokenIcon/NFT/icon3.png'
import { useBreakpoint } from '@/hooks';
import '../../styles/styles1.scss'

const { Text } = Typography;

const NFT = () => {
    const { xs, sm, md, lg, xl, xxl } = useBreakpoint();
    return (
        <Row style={{
            maxWidth: '1392px',
            width: '100%',
            flexDirection: 'column',
            paddingTop: '54px',
        }}>
            <Row style={{
                gap: '16px',
                paddingRight: md ? '602px' : '',
                paddingBottom: '36px',
            }}>
                <Text style={{
                    color: 'var(--Text-Default, #FFF)',
                    fontFamily: "SpaceGrotesk",
                    fontSize: '28px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: 'normal',
                    letterSpacing: '-0.84px',
                    textTransform: 'uppercase',

                }}>Own a Piece of History: Introducing ERC-404 NFTs</Text>
                <Text style={{
                    color: 'var(--Text-Descritpion---On-Black, #7D7D7D)',
                    fontFamily: "SpaceGrotesk",
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '100%',
                }}>Ever wanted to own a piece of a valuable digital asset, but the price tag felt out of reach? ERC-404 NFTs change the game! This innovative technology allows you to co-own unique digital collectibles with others. Imagine owning a fraction of a famous CryptoPunk or a rare piece of digital art. ERC-404 makes it possible!</Text>
            </Row>
            <Row style={{
                justifyContent: md ? '' : 'space-between',
                gap: '24px',
                flexDirection: md ? 'row' : 'column',
            }}>
                <Card
                    icon={icon1}
                    header="Unlocked Ownership for All"
                    description="Own a piece of the action, even with limited budget."
                />
                <Card
                    icon={icon2}
                    header="Increased Liquidity & Trading"
                    description="Buy, sell, and trade portions of NFTs with greater ease."
                />
                <Card
                    icon={icon3}
                    header="Innovative Investment Strategies"
                    description="Open up a world of new possibilities in the NFT market."
                />
            </Row>
        </Row>
    )
}

export default NFT

const { Title, Paragraph } = Typography;

interface CardProps {
    icon: string;
    header: string;
    description: string;
}

const Card: React.FC<CardProps> = ({ icon, header, description }) => {
    const { xs, sm, md, lg, xl, xxl } = useBreakpoint();
    return (
        <Row style={{
            // background: '#D9D9D9',
            borderRadius: '22px',
            background: '#FFFFFF26',
        }}>
            <Row className='cardWidth'>
                <Col>
                    <Image src={icon} width={108} height={108} />
                </Col>
                <Col style={{
                    gap: '24px',
                }}>
                    <Title className='cardHeader' style={{
                        color: 'var(--Text-Contrast, #FFCB3A)',
                        fontFamily: "SpaceGrotesk",
                        fontSize: '32px',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        lineHeight: '36px',
                        letterSpacing: '-0.96px',
                        textTransform: 'uppercase',
                    }}>{header}</Title>
                    <Paragraph style={{
                        color: 'var(--Text-Descritpion---On-Black, #7D7D7D)',
                        fontFamily: 'SpaceGrotesk',
                        fontSize: '22px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: '100%',
                    }}>{description}</Paragraph>
                </Col>
            </Row>
        </Row >
    );
};