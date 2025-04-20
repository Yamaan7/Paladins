import React from "react";
import { Layout } from "antd";
import DesktopBG from '../../src/assets/TokenIcon/DesktopBG.svg'

const { Content } = Layout;

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <Layout style={{
      backgroundColor: "transparent", backgroundImage: `url(${DesktopBG})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <Content style={{

      }}>{children}</Content>
    </Layout>

  );
};

export default AppLayout;
