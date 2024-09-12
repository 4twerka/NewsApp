import React from "react";

const NewsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">News Page</h1>
      </header>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-6">
        <input
          type="text"
          className="w-full p-3 rounded-md border border-gray-300 shadow-sm"
          placeholder="Search News..."
        />
      </div>

      {/* News List */}
      <div className="grid gap-6 max-w-4xl mx-auto">
        {/* Example of a news item */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">
              Заголовок новости
            </h2>
            <p className="text-gray-600 mb-4">
              Краткое описание новости. Здесь будет текст, который дает
              представление о содержании статьи.
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Read more
            </a>
          </div>
      </div>

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
