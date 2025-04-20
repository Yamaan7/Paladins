import React from 'react'
import PictureFrame from '../../assets/TokenIcon/Cards/PictureFrame.svg'
import PictureFrame2 from '../../assets/TokenIcon/Cards/PictureFrame2.svg'
import Add from '../../assets/TokenIcon/Cards/Add.svg'
import { Typography, Button, Row, Col, Image } from 'antd';
import { useBreakpoint } from '@/hooks';

const { Title, Paragraph } = Typography;
const { Text } = Typography;

const Cards = () => {
    const { xs, sm, md, lg, xl, xxl } = useBreakpoint();
    return (
        <Row style={{
            maxWidth: '1392px',
            width: '100%',
            paddingTop: '54px',
            gap: '36px',
        }}>
            <Row style={{
                gap: '16px',
                paddingRight: md ? '420px' : '',
                flexDirection: 'column',
            }}>
                <Text style={{
                    color: 'var(--Text-Default, #FFF)',
                    fontFamily: "SpaceGrotesk",
                    fontSize: '28px',
                    fontStyle: 'normal',
                    fontWeight: '700',
                    lineHeight: '54px',
                    letterSpacing: '-0.84px',
                    textTransform: 'uppercase',
                }}>Discover the Latest GEMS</Text>
                <Text style={{
                    color: 'var(--Text-Descritpion---On-Black, #7D7D7D)',
                    fontFamily: "SpaceGrotesk",
                    fontSize: '20px,',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '100%',
                }}>Explore the Freshest Additions to Our Growing Collection of Unique NFTs. Each Piece Tells a Story.</Text>
            </Row>

            <Row style={{
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '24px',
            }}>
                <Row style={{
                    justifyContent: md ? 'space-between' : '',
                    gap: '12px',
                    flexDirection: md ? 'row' : 'column',
                }}>
                    <CustomComponent
                        imageSrc={PictureFrame}
                        text1="PALADINS #38916"
                        text2="10/05/2024"
                        text3="#Gaming"
                        text4="1 PAL"
                        buttonText="buy nft"
                    />
                    <CustomComponent
                        imageSrc={PictureFrame}
                        text1="PALADINS #38916"
                        text2="10/05/2024"
                        text3="#Gaming"
                        text4="1 PAL"
                        buttonText="buy nft"
                    />
                    {lg && <CustomComponent
                        imageSrc={PictureFrame2}
                        text1="PALADINS #38916"
                        text2="10/05/2024"
                        text3="#Gaming"
                        text4="1 PAL"
                        buttonText="buy nft"
                    />
                    }
                    <CustomComponent
                        imageSrc={PictureFrame2}
                        text1="PALADINS #38916"
                        text2="10/05/2024"
                        text3="#Gaming"
                        text4="1 PAL"
                        buttonText="buy nft"
                    />
                </Row>

                <Row style={{
                    padding: '16px',
                    marginBottom: '365px',
                    background: '#FFFFFF26',
                    borderRadius: '11px',
                    // height: '131px',
                }}>
                    <Text style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'var(--Text-Default, #FFF)',
                        textAlign: 'center',
                        fontFamily: 'Nippo2',
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: 'normal',
                        letterSpacing: '1.8px',
                        gap: '14px',
                    }}>
                        <img src={Add} style={{
                            width: '44px',
                            height: '44px',
                        }} />
                        Mint Yours Now
                    </Text>
                </Row>
            </Row>
        </Row >
    )
}

export default Cards


interface CustomComponentProps {
    imageSrc: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    buttonText: string;
}

const CustomComponent: React.FC<CustomComponentProps> = ({ imageSrc, text1, text2, text3, text4, buttonText, }) => {
    const { xs, sm, md, lg, xl, xxl } = useBreakpoint();
    return (
        <Row className="custom-component" style={{
            flexDirection: 'column',
            width: '282.75px',
            paddingBottom: '24px',
            alignItems: 'flex-start',
            gap: '12.033px',
            borderRadius: '8px',
            border: '0.868px solid var(--Button - Primary - Border, #525252)',
            background: '#FFFFFF26',
            boxShadow: '0px 1.737px 5.211px 0px rgba(0, 0, 0, 0.15)',
        }}>
            <Col>
                <Image src={imageSrc} style={{
                    borderTopLeftRadius: '8px',
                    borderTopRightRadius: '8px',
                }} />
            </Col>
            <Row style={{
                flexDirection: 'column',
                padding: '0px 24px',
                width: '100%',
            }}>
                <Col style={{
                    paddingBottom: '6px',
                }}>
                    <Text style={{
                        color: 'var(--Text-Contrast, #FFCB3A)',
                        textAlign: 'center',
                        fontFamily: 'Nippo2',
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: 'normal',
                        letterSpacing: '1.8px',
                    }}>{text1}</Text>
                </Col>
                <Col >
                    <Paragraph style={{
                        color: 'var(--Text-Default, #FFF)',
                        fontFamily: "SpaceGrotesk",
                        fontSize: '16px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal',
                    }}>{text2}</Paragraph>
                </Col>
                <Col >
                    <Paragraph style={{
                        color: 'var(--Text-Descritpion---On-Black, #7D7D7D)',
                        fontFamily: "SpaceGrotesk",
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal',
                    }}>{text3}</Paragraph>
                </Col>
                <Col style={{
                    marginBottom: '14px',
                    display: 'flex',
                }}>
                    <Text style={{
                        color: '#FFF',
                        fontFamily: "SpaceGrotesk",
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWeight: '600',
                        lineHeight: 'normal',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.10)',
                        padding: '8px',
                    }}>{text4}</Text>
                </Col>
                <Row style={{
                    paddingTop: '14px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.10)',


                }}>
                    <Button size={'large'} style={{
                        width: '100%',
                        color: 'var(--Text-Default, #FFF)',
                        textAlign: 'center',
                        fontFamily: 'Nippo2',
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        lineHeight: 'normal',
                        letterSpacing: '1.8px',
                        textTransform: 'uppercase',
                    }}>{buttonText}</Button>
                </Row>
            </Row>
        </Row >
    );
};









































//         <Row style={{
//             display: 'flex',
//             paddingTop: '54px',
//             justifyContent: 'space-between',
//             flexDirection: 'column',
//             alignItems: 'flex-start',
//             textAlign: 'left',
//             gap: '36px',
//             maxWidth: '1392px',
//             width: '100%',
//         }}>
//             <Row style={{
//                 display: 'flex',
//                 // paddingRight: '420px',
//                 flexDirection: 'column',
//                 alignItems: 'flex-start',
//                 alignSelf: 'stretch',
//             }}>
//                 <Text style={{
//                     color: 'var(--Text-Default, #FFF)',
//                     fontFamily: "SpaceGrotesk",
//                     fontSize: '28px',
//                     fontStyle: 'normal',
//                     fontWeight: '700',
//                     lineHeight: '54px',
//                     letterSpacing: '-0.84px',
//                     textTransform: 'uppercase',
//                 }}>Discover the Latest GEMS</Text>
//                 <Text style={{
//                     color: 'var(--Text-Descritpion---On-Black, #7D7D7D)',
//                     fontFamily: "SpaceGrotesk",
//                     fontSize: '16px',
//                     fontStyle: 'normal',
//                     fontWeight: '600',
//                     lineHeight: '100%',
//                 }}>Explore the Freshest Additions to Our Growing Collection of Unique NFTs. Each Piece Tells a Story.</Text>
//             </Row>

//             {/* <cardComponent /> */}
//             <Row style={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 alignItems: 'flex-start',
//                 alignSelf: 'stretch',
//                 gap: '24px',
//             }}>

//                 {/* --------------------------  card 1 ------------------------ */}
//                 <Row style={{
//                     display: 'flex',
//                     // width: '282.75px',
//                     paddingBottom: '24px',
//                     flexDirection: 'column',
//                     alignItems: 'flex-start',
//                     gap: '12.033px',
//                     borderRadius: '8px',
//                     border: '0.868px solid rgba(255, 255, 255, 0.20)',
//                     background: 'rgba(255, 255, 255, 0.06)',
//                     boxShadow: '0px 1.737px 5.211px 0px rgba(0, 0, 0, 0.15)',
//                 }}>
//                     <img src={PictureFrame} style={{
//                         borderRadius: '8px',
//                     }} />
//                     <Row style={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'flex-start',
//                         gap: '12px',
//                         alignSelf: 'stretch',
//                         padding: '0px 24px',
//                     }}>
//                         <Text style={{
//                             color: '#FFCB3A',
//                             textAlign: 'center',
//                             fontFamily: 'Nippo2',
//                             fontSize: '18px',
//                             fontStyle: 'normal',
//                             fontWeight: '500',
//                             lineHeight: 'normal',
//                             letterSpacing: '1.8px',
//                         }}>PALADINS #38916</Text>
//                         <Text>10/05/2024</Text>
//                         <Text style={{
//                             color: 'rgba(255, 255, 255, 0.50)',
//                             fontFamily: "SpaceGrotesk",
//                             fontSize: '18px',
//                             fontStyle: 'normal',
//                             fontWeight: '600',
//                             lineHeight: 'normal',
//                         }}>#Gaming</Text>
//                         <Text style={{
//                             display: 'flex',
//                             padding: '8px',
//                             alignItems: 'flex-start',
//                             gap: '10px',
//                             borderRadius: '8px',
//                             background: 'rgba(255, 255, 255, 0.10)',
//                         }}>1 PAL</Text>

//                         <Row style={{
//                             borderTop: '1px solid rgba(255, 255, 255, 0.10)',
//                         }}>
//                             <Button style={{
//                                 width: '227px',
//                                 height: '44px',
//                                 fontFamily: 'Nippo2',
//                                 textTransform: 'uppercase',
//                                 fontSize: '18px',
//                                 fontWeight: '500',
//                                 fontStyle: 'normal',
//                                 marginTop: '14px',
//                             }}>buy nft</Button>
//                         </Row>
//                     </Row>
//                 </Row>




//                 {/* --------------------------  card 2 ------------------------ */}
//                 <Row style={{
//                     display: 'flex',
//                     // width: '282.75px',
//                     paddingBottom: '24px',
//                     flexDirection: 'column',
//                     alignItems: 'flex-start',
//                     gap: '12.033px',
//                     borderRadius: '8px',
//                     border: '0.868px solid rgba(255, 255, 255, 0.20)',
//                     background: 'rgba(255, 255, 255, 0.06)',
//                     boxShadow: '0px 1.737px 5.211px 0px rgba(0, 0, 0, 0.15)',
//                 }}>
//                     <img src={PictureFrame} style={{
//                         borderRadius: '8px',
//                     }} />
//                     <Row style={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'flex-start',
//                         gap: '12px',
//                         alignSelf: 'stretch',
//                         padding: '0px 24px',
//                     }}>
//                         <Text style={{
//                             color: '#FFCB3A',
//                             textAlign: 'center',
//                             fontFamily: 'Nippo2',
//                             fontSize: '18px',
//                             fontStyle: 'normal',
//                             fontWeight: '500',
//                             lineHeight: 'normal',
//                             letterSpacing: '1.8px',
//                         }}>PALADINS #38916</Text>
//                         <Text>10/05/2024</Text>
//                         <Text style={{
//                             color: 'rgba(255, 255, 255, 0.50)',
//                             fontFamily: "SpaceGrotesk",
//                             fontSize: '18px',
//                             fontStyle: 'normal',
//                             fontWeight: '600',
//                             lineHeight: 'normal',
//                         }}>#Gaming</Text>
//                         <Text style={{
//                             display: 'flex',
//                             padding: '8px',
//                             alignItems: 'flex-start',
//                             gap: '10px',
//                             borderRadius: '8px',
//                             background: 'rgba(255, 255, 255, 0.10)',
//                         }}>1 PAL</Text>

//                         <Row style={{
//                             borderTop: '1px solid rgba(255, 255, 255, 0.10)',
//                         }}>
//                             <Button style={{
//                                 width: '227px',
//                                 height: '44px',
//                                 fontFamily: 'Nippo2',
//                                 textTransform: 'uppercase',
//                                 fontSize: '18px',
//                                 fontWeight: '500',
//                                 fontStyle: 'normal',
//                                 marginTop: '14px',
//                             }}>buy nft</Button>
//                         </Row>
//                     </Row>
//                 </Row>



//                 {/* --------------------------  card 3 ------------------------ */}

//                 <Row style={{
//                     display: 'flex',
//                     // width: '282.75px',
//                     paddingBottom: '24px',
//                     flexDirection: 'column',
//                     alignItems: 'flex-start',
//                     gap: '12.033px',
//                     borderRadius: '8px',
//                     border: '0.868px solid rgba(255, 255, 255, 0.20)',
//                     background: 'rgba(255, 255, 255, 0.06)',
//                     boxShadow: '0px 1.737px 5.211px 0px rgba(0, 0, 0, 0.15)',
//                 }}>
//                     <img src={PictureFrame2} style={{
//                         borderRadius: '8px',
//                     }} />
//                     <Row style={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'flex-start',
//                         gap: '12px',
//                         alignSelf: 'stretch',
//                         padding: '0px 24px',
//                     }}>
//                         <Text style={{
//                             color: '#FFCB3A',
//                             textAlign: 'center',
//                             fontFamily: 'Nippo2',
//                             fontSize: '18px',
//                             fontStyle: 'normal',
//                             fontWeight: '500',
//                             lineHeight: 'normal',
//                             letterSpacing: '1.8px',
//                         }}>PALADINS #38916</Text>
//                         <Text>10/05/2024</Text>
//                         <Text style={{
//                             color: 'rgba(255, 255, 255, 0.50)',
//                             fontFamily: "SpaceGrotesk",
//                             fontSize: '18px',
//                             fontStyle: 'normal',
//                             fontWeight: '600',
//                             lineHeight: 'normal',
//                         }}>#Gaming</Text>
//                         <Text style={{
//                             display: 'flex',
//                             padding: '8px',
//                             alignItems: 'flex-start',
//                             gap: '10px',
//                             borderRadius: '8px',
//                             background: 'rgba(255, 255, 255, 0.10)',
//                         }}>1 PAL</Text>

//                         <Row style={{
//                             borderTop: '1px solid rgba(255, 255, 255, 0.10)',
//                         }}>
//                             <Button style={{
//                                 width: '227px',
//                                 height: '44px',
//                                 fontFamily: 'Nippo2',
//                                 textTransform: 'uppercase',
//                                 fontSize: '18px',
//                                 fontWeight: '500',
//                                 fontStyle: 'normal',
//                                 marginTop: '14px',
//                             }}>buy nft</Button>
//                         </Row>
//                     </Row>
//                 </Row>




//                 {/* --------------------------  card 4 ------------------------ */}
//                 <Row style={{
//                     display: 'flex',
//                     // width: '282.75px',
//                     paddingBottom: '24px',
//                     flexDirection: 'column',
//                     alignItems: 'flex-start',
//                     gap: '12.033px',
//                     borderRadius: '8px',
//                     border: '0.868px solid rgba(255, 255, 255, 0.20)',
//                     background: 'rgba(255, 255, 255, 0.06)',
//                     boxShadow: '0px 1.737px 5.211px 0px rgba(0, 0, 0, 0.15)',
//                 }}>
//                     <img src={PictureFrame2} style={{
//                         borderRadius: '8px',
//                     }} />
//                     <Row style={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         alignItems: 'flex-start',
//                         gap: '12px',
//                         alignSelf: 'stretch',
//                         padding: '0px 24px',
//                     }}>
//                         <Text style={{
//                             color: '#FFCB3A',
//                             textAlign: 'center',
//                             fontFamily: 'Nippo2',
//                             fontSize: '18px',
//                             fontStyle: 'normal',
//                             fontWeight: '500',
//                             lineHeight: 'normal',
//                             letterSpacing: '1.8px',
//                         }}>PALADINS #38916</Text>
//                         <Text>10/05/2024</Text>
//                         <Text style={{
//                             color: 'rgba(255, 255, 255, 0.50)',
//                             fontFamily: "SpaceGrotesk",
//                             fontSize: '18px',
//                             fontStyle: 'normal',
//                             fontWeight: '600',
//                             lineHeight: 'normal',
//                         }}>#Gaming</Text>
//                         <Text style={{
//                             display: 'flex',
//                             padding: '8px',
//                             alignItems: 'flex-start',
//                             gap: '10px',
//                             borderRadius: '8px',
//                             background: 'rgba(255, 255, 255, 0.10)',
//                         }}>1 PAL</Text>

//                         <Row style={{
//                             borderTop: '1px solid rgba(255, 255, 255, 0.10)',
//                         }}>
//                             <Button style={{
//                                 width: '227px',
//                                 height: '44px',
//                                 fontFamily: 'Nippo2',
//                                 textTransform: 'uppercase',
//                                 fontSize: '18px',
//                                 fontWeight: '500',
//                                 fontStyle: 'normal',
//                                 marginTop: '14px',
//                             }}>buy nft</Button>
//                         </Row>
//                     </Row>
//                 </Row>


//                 <Row style={{
//                     display: 'flex',
//                     padding: '16px',
//                     flexDirection: 'column',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     gap: '14px',
//                     flex: '1 0 0',
//                     alignSelf: 'stretch',
//                     backdropFilter: 'blur(2px)',
//                     border: '2px solid #262626',
//                     borderRadius: '10px',
//                     marginBottom: '365px',
//                 }}>
//                     <img src={Add} />
//                     <Text style={{
//                         fontFamily: 'Nippo2',
//                         fontSize: '18px',
//                         width: '100%',
//                         textAlign: 'center',
//                     }}>MINT YOURS NOW</Text>
//                 </Row>





//             </Row>
//         </Row >
//     )
// }

// export default Cards

// interface cardProps {
//     image: string;
//     header: string;
//     date: string;
//     hash: string;
//     points: string;
// }

// const products = [
//     { image: PictureFrame, header: 'PALADINS #38916', date: '10/05/2024', hash: '#Gaming', points: '1 PAL' },
// ];

// export const cardComponent: React.FC<cardProps> = ({ image = 'default-icon.png', header, date, hash, points }) => {
//     return (
//         <Row style={{
//             display: 'flex',
//             width: '282.75px',
//             paddingBottom: '24px',
//             flexDirection: 'column',
//             alignItems: 'flex-start',
//             gap: '12.033px',
//         }}>
//             <img src={PictureFrame} />
//         </Row>
//     );
// };