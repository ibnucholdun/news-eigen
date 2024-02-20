import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import services from "../services";

const useShuffledNews = () => {
  const [shuffledNews, setShuffledNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await services.getNewsTopHeadlines();
        const shuffledNewsArray = shuffleArray(data.articles);
        setShuffledNews(shuffledNewsArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        navigate("/error");
      }
    };

    fetchData();
  }, [navigate]);

  const shuffleArray = (array: any) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  return { shuffledNews, loading };
};

export default useShuffledNews;
