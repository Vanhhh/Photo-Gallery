import styled from "styled-components";
const theme = {
  lightgrey: "#cccccc",
  lightergrey: "#eeeeee",
};
const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  z-index: 3;
`;
const WrapperContent = styled.div`
  display: block;
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  margin-top: 0;
  margin-left: 6px;
`;

const Input = styled.input`
  display: block;
  height: 50px;
  width: 500px;
  margin: 10px;
  border-radius: 4px;
  padding: 10px;
  font-size: 17px;
  border: none;
  float: left;
  transition: all 0.3s linear;
  background: ${(props) => props.theme.lightergrey};
  &:focus {
    outline: ${(props) => props.theme.lightgrey};
  }
`;
const Search = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    .fa-search {
      color: ${(props) => props.theme.lightgrey};
    }
    ${Input} {
      box-shadow: 2px 5px 5px ${(props) => props.theme.lightgrey};
    }
  }
  .fa-search {
    transition: all 0.3s linear;
  }
`;

function SearchInput({ searchText, onSearchTextChanged }) {
  return (
    <SearchWrapper>
      <WrapperContent>
        Welcome! Click on the "Upload button" to upload picture to the gallery
        and give a tag name to the picture. You can search image down here.
      </WrapperContent>
      <Search theme={theme}>
        <div>
          <i className="fa fa-search"></i>
        </div>
        <div>
          <Input
            theme={theme}
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
      </Search>
    </SearchWrapper>
  );
}

export default SearchInput;
