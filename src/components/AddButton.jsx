function AddButton({ onAddImage }) {
  return (
    <div>
      <button className="add-button" onClick={onAddImage}>
        <i class="fa fa-plus-circle"></i>
      </button>
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          onAddImage(event);
        }}
      />
    </div>
  );
}

export default AddButton;
