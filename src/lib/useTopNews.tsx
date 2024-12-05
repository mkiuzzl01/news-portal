"use client";
import { useState, useEffect } from "react";

interface NewsItem {
  id: number;
  category: string;
  title: string;
  description: string;
  date: string;
}

const useTopNews = (category?: string) => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/data/topnews.json");
        const data: NewsItem[] = await response.json();

        const filteredNews = category
          ? data.filter(
              (item) => item.category.toLowerCase() === category.toLowerCase()
            )
          : data;

        setNews(filteredNews);
      } catch (err) {
        setError("Failed to load news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  if (typeof window === "undefined") {
    return { news: [], loading, error };
  }

  return { news, loading, error };
};

export default useTopNews;
