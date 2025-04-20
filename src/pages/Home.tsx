import Cards from "@/components/Home/Cards";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Home/Navbar";
import NFT from "@/components/Home/NFT";
import Footer from "@/components/Home/Footer";
import useBreakpoint from "@/hooks/useBreakpoint";
import { Layout } from "antd";
import DesktopBG from '../../src/assets/TokenIcon/DesktopBG.svg'

const Home = () => {
  const { xs, sm, md, lg, xl, xxl } = useBreakpoint();
  return <Layout style={{
    display: 'flex',
    maxWidth: '1920px',
    padding: '0px 24px 24px 24px',
    flexDirection: 'column',
    alignItems: 'center',
    // backgroundImage: `url(${DesktopBG})`,
    backgroundColor: "transparent",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
    <Navbar />
    <Hero />
    <Cards />
    <NFT />
    <Footer />
  </Layout>
};

export default Home;
