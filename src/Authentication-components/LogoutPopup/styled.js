import styled from "styled-components";



export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); 
  display: ${(props) => (props.open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1000; 
`;



export const DropdownButton = styled.button`
  background-color: green;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 20px;
`;

export const PopupContent = styled.form`
  background-color: #f9f9f9;
  min-width: 160px;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;
