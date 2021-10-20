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
      <SearchInput
        searchText={searchText}
        onSearchTextChanged={setSearchText}
      />
      <ImageList images={images} searchText={searchText} />
      <AddButton onAddImage={addImage} />
    </div>
  );
}

export default App;
