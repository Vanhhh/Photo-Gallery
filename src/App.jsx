import "./App.scss";
import Image from "./components/Image";
import SearchInput from "./components/SearchInput";
import AddButton from "./components/AddButton";
import { useState } from "react";
import styled from "styled-components";

const ImageListDiv = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`;

function App() {
  const [images, setImages] = useState([]);
  const [searchText, setSearchText] = useState("");

  const addImage = (event) => {
    const image = event.target?.files[0];
    if (image) {
      const imageTagName = prompt("Provide a tag name for this image");
      image.tagName = imageTagName;
      setImages([image, ...images]);
    }
  };
  const deleteImage = (image) => {
    const newList = images.filter((i) => i.name !== image.name);
    setImages(newList);
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
      <ImageListDiv>
        {images
          .filter((image) => image.tagName?.includes(searchText))
          .map((image) => (
            <Image
              key={image.name}
              onDeleteImage={deleteImage}
              small={image}
              large={image}
              image={image}
            />
          ))}
      </ImageListDiv>
    </div>
  );
}

export default App;
