import React, { useState, useEffect } from "react";
import JokeList from "./JokeList";
import Filters from "./Filters";
import { fetchJokes } from "@/utils/apis";

const Jokes = () => {
  const [filters, setFilters] = useState({
    category: "",
    language: "",
    flag: "",
  });
  const [jokes, setJokes] = useState([]);

  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [type]: value }));
  };

  const getJokes = () => {
    fetchJokes(filters).then((res) => {
      if (res.jokes) {
        setJokes(res.jokes);
      }
    });
  };

  useEffect(() => {
    getJokes();
  }, [filters]);

  return (
    <div className="w-full mt-16 flex flex-col max-w-5xl">
      <Filters
        filters={filters}
        onFilterChange={handleFilterChange}
        onShuffle={getJokes}
      />
      <JokeList jokes={jokes} language={filters.language} />
    </div>
  );
};

export default Jokes;
