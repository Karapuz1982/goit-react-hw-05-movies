import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
 justify-content: center;
`;
export const HomeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
  padding: 20px;
`;

export const HomeCard = styled.li`

  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);

    .cardTitle {
      display: flex;
      flex-direction: row;
    }
  }
`;
export const HomeList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
`;

export const MoviePoster = styled.img`
  max-width: 100%;
  height: auto;
`;
