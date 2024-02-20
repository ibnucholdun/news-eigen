import { useEffect, useState } from "react";
import services from "../services";

const useShuffledNews = () => {
  const [shuffledNews, setShuffledNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await services.getNewsTopHeadlines();
        const shuffledNewsArray = shuffleArray(data.articles);
        setShuffledNews(shuffledNewsArray);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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

  return shuffledNews;
};

export default useShuffledNews;
