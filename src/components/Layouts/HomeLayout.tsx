import { Layout } from "antd";
import Navbar from "../Fragments/Navbar";
import FooterComponent from "../Fragments/FooterComponent";
const { Content } = Layout;

type Props = {
  children: React.ReactNode;
};

const HomeLayout = (props: Props) => {
  const { children } = props;
  return (
    <>
      <Navbar />
      <Content className="site-layout" style={{ marginTop: 32 }}>
        {children}
      </Content>
      <FooterComponent />
    </>
  );
};

export default HomeLayout;
