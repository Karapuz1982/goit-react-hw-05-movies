import styled from 'styled-components';

export const MovieDetailsWrapper = styled.div`
  display: flex;
 
  align-items: flex-start;
`;

export const MoviesPoster = styled.img`
width: 170px;
  height: auto;
  margin-right: 20px;

`;

export const MovieInformation = styled.div`
flex: 1;
`;

export const MovieTitle = styled.h1`
  margin-bottom: 10px;
`;

export const MovieDescription = styled.p`
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
`;

export const LinkButton = styled.button`
  display: inline-block;
  margin: 10px 0;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
`;
