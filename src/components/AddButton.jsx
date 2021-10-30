function AddButton({ onAddImage }) {
  return (
    <div>
      <label className="file-button">
        <i className="fa fa-plus"></i>
        Upload picture
        <span>
          <input
            className="add-button"
            type="file"
            name="myImage"
            onChange={(event) => {
              onAddImage(event);
            }}
          ></input>
        </span>
      </label>
    </div>
  );
}

export default AddButton;
