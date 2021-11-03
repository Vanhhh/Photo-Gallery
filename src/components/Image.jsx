import ModalImage from "react-modal-image";
import styled from "styled-components";

const theme = {
  grey: "grey",
  lightgrey: "#cccccc",
  lightergrey: "#eeeeee",
  danger: "#ff6d6d",
  dangerlight: "#fff2f2",
};
const DeleteButton = styled.button`
  background-color: ${(props) => props.theme.dangerlight};
  border: 1px solid transparent;
  border-radius: 0 4px 0 4px;
  visibility: hidden;
  transition: all 0.3s linear;
  position: absolute;
  right: 28px;
  top: 28px;
  .fa-trash {
    color: ${(props) => props.theme.danger};
  }
`;

const ImageDiv = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 18px;
  &:hover {
    ${DeleteButton} {
      visibility: visible;
    }
  }
`;

const StyledModalImage = styled(ModalImage)`
  display: block;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.lightgrey};
  margin: 10px;
  flex: 1 0 20%;
  width: 300px;
  height: 400px;
  cursor: pointer;
  &:hover {
    border-color: ${(props) => props.theme.grey};
    box-shadow: 10px 5px 5px ${(props) => props.theme.lightgrey};
  }
`;
const StyledTag = styled.span`
  width: fit-content;
  height: fit-content;
  border: 1px solid ${(props) => props.theme.lightgrey};
  border-radius: 4px;
  background-color: ${(props) => props.theme.lightergrey};
  padding: 2px;
  margin-left: 12px;
`;
function Image({ image, onDeleteImage }) {
  return (
    <ImageDiv>
      <StyledModalImage
        theme={theme}
        small={URL.createObjectURL(image)}
        large={URL.createObjectURL(image)}
      />
      <DeleteButton theme={theme} onClick={() => onDeleteImage(image)}>
        <i className="fa fa-trash" />
      </DeleteButton>
      <StyledTag theme={theme}>{image.tagName}</StyledTag>
    </ImageDiv>
  );
}

export default Image;
