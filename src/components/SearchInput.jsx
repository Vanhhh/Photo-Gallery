function SearchInput() {
  return (
    <div className="search">
      <input
        className="search-input"
        placeholder="Search photos"
        type="search"
        id="site-search"
        name="q"
        aria-label="Search through site content"
      />

      <button type="submit" className="submit-button">
        <i class="fa fa-search"></i>
      </button>
    </div>
  );
}

export default SearchInput;
