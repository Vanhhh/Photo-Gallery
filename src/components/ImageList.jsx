import Image from "./Image";

function ImageList() {
  const images = Array.from("x".repeat(8));
  return (
    <div className="imagelist">
      {images.map((image) => (
        <Image />
      ))}
    </div>
  );
}

export default ImageList;
