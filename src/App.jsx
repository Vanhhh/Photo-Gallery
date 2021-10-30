import "./App.scss";
import ImageList from "./components/ImageList";
import SearchInput from "./components/SearchInput";
import AddButton from "./components/AddButton";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [searchText, setSearchText] = useState("");

  const addImage = (event) => {
    const image = event.target?.files[0];
    if (image) {
      const imageTagName = prompt("Provide a tag name for this image");
      image.tagName = imageTagName;
      setImages([...images, image]);
    }
  };

  return (
    <div className="App">
      <div className="banner">
        <div className="banner-header">
          <h2 className="title app-title">Viets photo gallery</h2>
          <AddButton onAddImage={addImage} />
        </div>
        <SearchInput
          searchText={searchText}
          onSearchTextChanged={setSearchText}
        />
      </div>
      <ImageList images={images} searchText={searchText} />
    </div>
  );
}

export default App;
