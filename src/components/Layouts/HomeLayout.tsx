import { Col, Layout, Row, Flex } from "antd";
import Navbar from "../Fragments/Navbar";
import FooterComponent from "../Fragments/FooterComponent";
import CardNewsRight from "../Fragments/CardNewsRight";
import React, { useEffect, useState } from "react";
import CardNewsRightSkeleton from "../Fragments/CardNewsRightSkeleton";
import { useNavigate } from "react-router-dom";
import services from "../../services";
import useShuffleArray from "../../hooks/useShuffleArray";
const { Content } = Layout;

type Props = {
  children: React.ReactNode;
};

const HomeLayout: React.FC<Props> = ({ children }) => {
  const [shuffledNews, setShuffledNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await services.getNewsTopHeadlines();
        const shuffledNewsArray = useShuffleArray(data.articles);
        setShuffledNews(shuffledNewsArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        navigate("/error");
      }
    };

    fetchData();
  }, [navigate]);

  return (
    <>
      <Navbar />
      <Content className="site-layout" style={{ margin: "32px 0" }}>
        <Row gutter={48}>
          <Col className="gutter-row" span={13}>
            {children}
          </Col>
          <Col span={11} className="gutter-row">
            <h1 style={{ textDecoration: "underline", marginTop: 0 }}>
              Random News
            </h1>
            <Flex justify="space-between" gap={24} vertical={false} wrap="wrap">
              {loading
                ? [...Array(6)].map((_, index) => (
                    <CardNewsRightSkeleton key={index} loading={loading} />
                  ))
                : shuffledNews.map(
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
                        date={new Date(item.publishedAt)
                          .toISOString()
                          .slice(0, 10)}
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
