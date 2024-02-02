import styled from "styled-components";

export const StyledTextarea = styled.textarea`
  height: 120px;
  font-family: "Roboto";
  font-size: 1.5rem;
  line-height: 28.8px;
  font-weight: 400;
  padding: 1rem;
  border: 2px solid #4f4f4f;
  border-radius: 16px;
  background-color: white;
  resize: none;
  &::placeholder {
    color: #bdbdbd;
  }

  &:hover {
    outline: 2px solid red;
  }
`;
