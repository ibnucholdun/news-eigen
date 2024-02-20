import { useEffect, useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import services from "../../services";
import useShuffleArray from "../../hooks/useShuffleArray";
import { useNavigate } from "react-router-dom";
import CardNewsLeft from "../Fragments/CardNewsLeft";
import { Flex } from "antd";
import CardNewsLeftSkeleton from "../Fragments/CardNewsLeftSkeleton";

const HomeView = () => {
  const [shuffledNews, setShuffledNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await services.getNewsLifestyle();
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
    <HomeLayout>
      <Flex wrap="wrap" vertical={false} gap={24}>
        {loading
          ? [...Array(3)].map((_, index) => (
              <CardNewsLeftSkeleton key={index} loading={loading} />
            ))
          : shuffledNews.map((item: any, index) => (
              <CardNewsLeft
                key={index}
                title={item.title}
                tag={item.source.name}
                link={item.url}
                image={item.urlToImage}
                description={item.description}
                date={new Date(item.publishedAt).toISOString().slice(0, 10)}
                source={item.source.name}
              />
            ))}
      </Flex>
    </HomeLayout>
  );
};

export default HomeView;
