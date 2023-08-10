import styled from 'styled-components';

export const MoviesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 8px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const MoviesList = styled.div`
  list-style: none;
   display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
  padding: 20px;
 `;