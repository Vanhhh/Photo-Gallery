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
        <Image key={index} image={image} />
      ))}
    </div>
  );
}

export default ImageList;
