import styled from 'styled-components';

const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 1.5rem;
    
    & > button {
      margin: 0.5rem;
      background-color: #235D8E;
      color: white;
      height: 2rem;
      width: 7rem;
      font-size: 1.4rem;
      
      &:first-child {
        border-radius: 0.25rem 0 0 0.25rem;
      }
      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
      }
    }
  `;

export default StyledButtonContainer;
