import Image from "./Image";

function ImageList({ images, searchText }) {
  const getFilteredImagesByTagName = () => {
    if (!searchText.length) return images;
    return images.filter(function (image) {
      return image.tagName?.includes(searchText);
    });
  };

  return (
    <div className="imagelist">
      {getFilteredImagesByTagName().map((image, index) => (
        <Image small={image} large={image} key={index} image={image} />
      ))}
    </div>
  );
}

export default ImageList;
