import { useEffect, useState } from "react";
import FilterBox from "./filters";
import HotNews from "../../containers/hotNews/hotNews";

interface Data {
  Name: string;
  AssetType: string;
  Description: string;

}

const Home = () => {
  const [search, setSearch] = useState(""); // Estado para a barra de pesquisa
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]); // Estado para os filtros selecionados

  const [data, setData] = useState<Data[]>([]); // Estado para armazenar os dados carregados do JSON

    const investmentInfo = 'Tesla (TSLA) faces slight declines but remains an EV leader; GEO is stable; CVS struggles with earnings drops; JCI thrives on sustainability-driven growth'

  // Carregar os dados do JSON
  useEffect(() => {
    fetch("public/company_information.json") // Substitua pelo caminho correto se necessário
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Erro ao carregar o JSON:", error));
  }, []);

  // Filtra as notícias com base na barra de pesquisa e nos filtros selecionados
  const filteredNews = data.filter((item) => {
    const matchesSearch = item.Name.toLowerCase().includes(search.toLowerCase());
    const matchesFilters =
      selectedFilters.length === 0 || selectedFilters.some((filter) => item.Name.toLowerCase().includes(filter.toLowerCase()));
    return matchesSearch && matchesFilters;
  });

  const filteredInterest = data.filter((item) => {
    const matchesSearch = item.Name.toLowerCase().includes(search.toLowerCase());
    const matchesFilters =
      selectedFilters.length === 0 || selectedFilters.some((filter) => item.Name.toLowerCase().includes(filter.toLowerCase()));
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
          {/* Notícias filtradas com retângulo ao lado da categoria */}
          <div className="col4 colL3 colM2 colS3">
            <h4>News</h4>
            <div>
              {filteredNews.map((item) => (
                <div key={item.Name} className="news-item">
                  <h5>
                    {item.Name}{" "}
                    <span className="category-badge">
                      {item.AssetType}
                      <span className="badge">7</span>
                    </span>
                  </h5>
                  <p>{item.Description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interesses filtrados */}
          <div className="col5 colL3 colM2 colS3">
            <h4>Interest</h4>
            <div>
              {filteredInterest.map((item) => (
                <div key={item.Name} className="interest-item">
                  <h5>
                    {item.Name}{" "}
                    <span className="category-badge">
                      {item.AssetType}
                      <span className="badge">7</span>
                    </span>
                  </h5>
                  <p>{item.Description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Filtros */}
          <div className="col3 colL2 colM2 colS3">
            <h4>Filters</h4>
            <div className="box w-100">
              <FilterBox
                title="Companies"
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
                onChange={(selected) => setSelectedFilters(selected)}
              />
            </div>
            <HotNews
                info={investmentInfo}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
