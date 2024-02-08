import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 375px;
  background-color: #f2f2f2;
  padding: 32px 16px;
  gap: 16px;

  .button-create {
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    background-color: #4f4f4f;
    cursor: pointer;
    width: 100%;
    font-family: "Roboto";
    font-weight: 700;
    font-size: 24px;
    text-align: center;
    line-height: 28.8px;
    color: #ffffff;
  }
`;

export const StyledTitle = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 38.4px;
  text-align: center;
`;

export const StyledNotes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1rem;
`;

export const StyledNote = styled.div`
  background-color: #ffffff;
  height: auto;
  width: 100%;
  border: 2px solid #4f4f4f;
  border-radius: 1rem;
  padding: 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  word-break: break-all;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2rem;

  .button-delete {
    align-self: flex-end;
    background-color: #e0e0e0;
    border: none;
    border-radius: 1rem;
    padding: 0.25rem 1rem;
    cursor: pointer;
    font-family: "Roboto";
    font-weight: 700;
    font-size: 18px;
    line-height: 21.6px;
    text-align: center;
    &:hover {
      background-color: #8f8f8f;
    }
  }
`;

export const StyledForm = styled.form`
  width: 100%;
`;
