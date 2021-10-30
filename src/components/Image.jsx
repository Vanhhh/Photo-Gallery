import ModalImage from "react-modal-image";
function Image({ image }) {
  return (
    <div className="image-div">
      <ModalImage
        className="image"
        small={URL.createObjectURL(image)}
        large={URL.createObjectURL(image)}
      />
      <button className="delete-button">x</button>
    </div>
  );
}

export default Image;
