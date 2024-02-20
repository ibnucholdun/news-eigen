import { Col, Layout, Row, Flex } from "antd";
import Navbar from "../Fragments/Navbar";
import FooterComponent from "../Fragments/FooterComponent";
import CardNewsRight from "../Fragments/CardNewsRight";
import React from "react";
import useShuffledNews from "../../hooks/useShuffledNews";

const { Content } = Layout;

type Props = {
  children: React.ReactNode;
};

const HomeLayout: React.FC<Props> = ({ children }) => {
  const shuffledNews = useShuffledNews();

  return (
    <>
      <Navbar />
      <Content className="site-layout" style={{ margin: "32px 0" }}>
        <Row gutter={48}>
          <Col className="gutter-row" span={13}>
            {children}
          </Col>
          <Col span={11} className="gutter-row">
            <h1 style={{ textDecoration: "underline" }}>Random News</h1>
            <Flex justify="space-between" gap={24} vertical={false} wrap="wrap">
              {shuffledNews.map(
                (
                  item: {
                    title: string;
                    source: { name: string };
                    urlToImage: string;
                    url: string;
                    publishedAt: string;
                  },
                  index: number
                ) => (
                  <CardNewsRight
                    key={index}
                    title={item.title}
                    source={item.url}
                    image={
                      item.urlToImage !== null
                        ? item.urlToImage
                        : "/placeholderImage.png"
                    }
                    tag={item.source.name}
                    link={item.url}
                    date={new Date(item.publishedAt).toISOString().slice(0, 10)}
                  />
                )
              )}
            </Flex>
          </Col>
        </Row>
      </Content>
      <FooterComponent />
    </>
  );
};

export default HomeLayout;
