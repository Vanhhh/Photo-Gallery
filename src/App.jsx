import "./App.scss";
import Image from "./components/Image";
import SearchInput from "./components/SearchInput";
import AddButton from "./components/AddButton";
import { useState } from "react";
import styled from "styled-components";
import bannerImage from "./images/header.jpg";

const theme = {
  lightgrey: "#cccccc",
  lightergrey: "#eeeeee",
  black: "#000000",
};

const ImageListDiv = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`;

const Banner = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${bannerImage});
  background-color: ${(props) => props.theme.lightgrey};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const BannerHeader = styled.div`
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 70px;
`;

const Title = styled.h2`
  font-family: "Playfair Display", serif;
  margin-left: 10px;
  font-weight: 700;
  font-size: 40px;
  border-bottom: 3px solid ${(props) => props.theme.black};
  border-right: 3px solid ${(props) => props.theme.black};
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
      <Banner theme={theme}>
        <BannerHeader>
          <Title>Viets photo gallery</Title>
          <AddButton onAddImage={addImage} />
        </BannerHeader>
        <SearchInput
          searchText={searchText}
          onSearchTextChanged={setSearchText}
        />
      </Banner>
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
