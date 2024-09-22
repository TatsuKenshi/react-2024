import React from "react";
import { useGlobalContext } from "./context/context";

const public_key = "4FrN6M6NCX-LEqjNitXf9xRe6NpU_P4TZjVsscO62_E";
const secret_key = "wR_sjVMasfRi-Y7WHFzKXtdlOjbWTCChnclQclIrcVI";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    console.log(searchValue);
    setSearchTerm(searchValue);
  };

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          searchs
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
