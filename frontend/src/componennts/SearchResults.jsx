import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    if (!query) return;

    const fetchResults = async () => {
      const res = await fetch(`http://localhost:3001/api/ai-content`);
      const data = await res.json();

      const filtered = data.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    };

    fetchResults();
  }, [query]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Search Results for "{query}"</h2>
      {results.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {results.map((ai) => (
            <li key={ai._id} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">{ai.title}</h3>
              <p className="text-sm text-gray-600">{ai.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
