function SearchInput({ searchText, onSearchTextChanged }) {
  return (
    <div className="search">
      <input
        className="search-input"
        placeholder="Search tag"
        type="search"
        id="site-search"
        name="q"
        aria-label="Search through site content"
        value={searchText}
        onChange={(event) => {
          onSearchTextChanged(event.target.value);
        }}
      />

      <button type="submit" className="submit-button">
        <i class="fa fa-search"></i>
      </button>
    </div>
  );
}

export default SearchInput;
