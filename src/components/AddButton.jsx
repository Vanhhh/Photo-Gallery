import styled from "styled-components";
const theme = {
  lightgrey: "#cccccc",
  lightergrey: "#eeeeee",
  white: "#ffffff",
  lightergreen: "#47d4a0",
  lightgreen: "#2dc58d",
};
const FileButton = styled.label`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s linear;
  background-color: ${(props) => props.theme.lightergreen};
  border: none;
  color: ${(props) => props.theme.white};
  font-weight: 400;
  font-size: 16px;
  .fa-plus {
    color: ${(props) => props.theme.white};
    margin: 4px 5px 0 0;
  }
  &:hover {
    background-color: ${(props) => props.theme.lightgreen};
  }
`;

function AddButton({ onAddImage }) {
  return (
    <div>
      <FileButton theme={theme} className="file-button">
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
      </FileButton>
    </div>
  );
}

export default AddButton;
