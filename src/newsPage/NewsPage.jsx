import { useEffect, useState } from "react";

const NewsPage = () => {
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');

      const API_KEY =
        "https://newsapi.org/v2/everything?q=apple&from=2024-09-12&to=2024-09-12&sortBy=popularity&apiKey=1c3be56384c54a74bf31ff0d089ab7bc"; 
      
  
  useEffect(() => {
    const fetchData = async () => {
      if (inputValue.trim === '') return;
      setIsLoading(true);
      try {
        const result = await fetch(API_KEY)

        result.json()
          .then(json => {
            console.log(json);
            setRecords(json.articles);
          })
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, [inputValue]);

  const inputValueFunc = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">News Page</h1>
      </header>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-6">
        <input
          value={inputValue}
          onChange={inputValueFunc}
          type="text"
          className="w-full p-3 rounded-md border border-gray-300 shadow-sm"
          placeholder="Search News..."
        />
      </div>

      {/* News List */}
      {isLoading ? (
        <div className="flex justify-center items-center">Loading</div>
      ) : (
        <div className="grid gap-6 max-w-4xl mx-auto">
          {/* Example of a news item */}
          {records.length > 0 ? (
            records.map((record, index) => {
              return (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <h2 className="text-xl font-semibold mb-2">{record.title}</h2>
                  <p className="text-gray-600 mb-4">{record.description}</p>
                  <a
                    href={record.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Read more
                  </a>
                </div>
              );
            })
          ) : (
            <p className="text-center text-gray-500">
              No news found for {inputValue}
            </p>
          )}
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white shadow-md py-4 mt-12">
        <p className="text-center text-gray-500">
          © 2024 News page. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default NewsPage;