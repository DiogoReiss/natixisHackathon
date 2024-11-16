import { useState } from "react";
import Box from "./box";
import FilterBox from "./filters";

const Home = () => {
  const [search, setSearch] = useState(""); // Estado para a barra de pesquisa
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]); // Estado para os filtros selecionados
  const [news] = useState([
    {
      id: 1,
      newTitle: "BTC - 90341$",
      category: "crypto",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      newTitle: "Apple - 173$",
      category: "stocks",
      desc: "Apple has announced its new product launch.",
    },
  ]);
  const [interest] = useState([
    {
      id: 1,
      title: "Interest",
      newTitle: "ETH - 1843$",
      category: "crypto",
      desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 2,
      title: "Interest",
      newTitle: "Google - 145$",
      category: "stocks",
      desc: "Google is working on AI projects.",
    },
  ]);

  // Filtra as notícias com base na barra de pesquisa e nos filtros selecionados
  const filteredNews = news.filter((item) => {
    const matchesSearch = item.newTitle.toLowerCase().includes(search.toLowerCase());
    const matchesFilters =
      selectedFilters.length === 0 || selectedFilters.some((filter) => item.newTitle.toLowerCase().includes(filter.toLowerCase()));
    return matchesSearch && matchesFilters;
  });

  const filteredInterest = interest.filter((item) => {
    const matchesSearch = item.newTitle.toLowerCase().includes(search.toLowerCase());
    const matchesFilters =
      selectedFilters.length === 0 || selectedFilters.some((filter) => item.newTitle.toLowerCase().includes(filter.toLowerCase()));
    return matchesSearch && matchesFilters;
  });

  return (
    <>
      {/* Barra de navegação com a barra de pesquisa */}
      <div className="navbar">
        <div className={`search-bar`}>
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)} // Atualiza o estado de pesquisa
          />
        </div>
      </div>

      <div className="homeContent">
        <div className="container">
          <div className="col4 colL3 colM2 colS3">
            {/* Exibição das notícias filtradas */}
            <Box title="News" news={filteredNews} />
          </div>
          <div className="col5 colL3 colM2 colS3">
            {/* Exibição dos interesses filtrados */}
            <Box title="Interest" news={filteredInterest} />
          </div>
          <div className="col3 colL2 colM2 colS3">
            <h4>Filters</h4>
            <div className="box w-100">
              <FilterBox
                title="Companys"
                optionsId="categoryId"
                defaultState="open"
                options={[
                  { name: "Apple" },
                  { name: "Google" },
                  { name: "Microsoft" },
                  { name: "Tesla" },
                  { name: "Amazon" },
                  { name: "Facebook" },
                  { name: "Netflix" },
                  { name: "Twitter" },
                ]}
                onChange={(selected) => setSelectedFilters(selected)} // Atualiza o estado dos filtros selecionados
              />
              <FilterBox
                title="Companys"
                optionsId="categoryId2"
                defaultState=""
                options={[
                  { name: "Apple2" },
                  { name: "Google2" },
                  { name: "Microsoft2" },
                  { name: "Tesla2" },
                  { name: "Amazon2" },
                  { name: "Facebook2" },
                  { name: "Netflix2" },
                  { name: "Twitter2" },
                ]}
                onChange={(selected) => setSelectedFilters(selected)} // Atualiza o estado dos filtros selecionados
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;