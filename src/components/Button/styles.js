import styled from 'styled-components';

export const StyledButton = styled.button`
  color: #fff;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border: none;
  height: 40px;
  width: fit-content;
  padding: 0 10px;
  border-radius: 4px;

  background-color: ${(props) => props.type === 'secondary' ? '#28a745' : '#007bff'};
  border-color: ${(props) => props.type === 'secondary' ? '#28a745' : '#007bff'};

  :hover {
    background-color: #3395ff;
  }

`;
