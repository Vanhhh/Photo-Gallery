function SearchInput({ searchText, onSearchTextChanged }) {
  return (
    <div className="search-wrapper">
      <p className="wrapper-content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="search">
        <div>
          <i className="fa fa-search"></i>
        </div>
        <div>
          <input
            className="search-input"
            placeholder="Search image"
            type="search"
            id="site-search"
            name="q"
            aria-label="Search through site content"
            value={searchText}
            onChange={(event) => {
              onSearchTextChanged(event.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
