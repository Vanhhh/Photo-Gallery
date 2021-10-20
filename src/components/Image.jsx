function Image({ image }) {
  return (
    <div className="image-div">
      <img className="image" src={URL.createObjectURL(image)}></img>
      <button>x</button>
    </div>
  );
}

export default Image;
