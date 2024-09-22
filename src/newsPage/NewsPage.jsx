import { useEffect, useState } from "react";

const NewsPage = () => {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const API_KEY = "1c3be56384c54a74bf31ff0d089ab7bc";

  const fetchNews = async (query) => {
    setIsLoading(true);
    const url = query
  ? `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
  : `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.articles && data.articles.length > 0) {
        setRecords(data.articles);
      } else {
        setRecords([]); 
      }
    } catch (error) {
      console.error(error);
      setRecords([]); 
    } finally {
      setIsLoading(false);
    }
  };
  

  useEffect(() => {
    if (inputValue.trim()) {
      fetchNews(inputValue);
    } else {
      fetchNews();
    }
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-50 p-6">
      <header className="bg-white shadow-md py-6 px-8 mb-8 rounded-md">
        <h1 className="text-3xl font-extrabold text-gray-800 text-center">Latest News</h1>
      </header>

      <div className="max-w-2xl mx-auto mb-8">
        <input
          value={inputValue}
          onChange={handleInputChange}
          type="text"
          className="w-full p-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none shadow-md"
          placeholder="Search for news..."
        />
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center text-xl font-semibold">Loading...</div>
      ) : (
        <div className="grid gap-8 max-w-5xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {records.length > 0 ? (
            records.map((record, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold mb-4">{record.title}</h2>
                <p className="text-gray-600 mb-6">{record.description}</p>
                <a
                  href={record.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300"
                >
                  Read more
                </a>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No news found for "{inputValue}"
            </p>
          )}
        </div>
      )}

      <footer className="bg-white shadow-md py-6 mt-12 rounded-md">
        <p className="text-center text-gray-500">
          © 2024 News Page. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default NewsPage;
