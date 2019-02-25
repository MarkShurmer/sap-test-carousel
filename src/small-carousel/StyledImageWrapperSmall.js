import styled from 'styled-components';

const StyledImageWrapperSmall = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    
    & > img {
     flex-shrink: 0;
     min-width: 100%;
     min-height: 100%;
    }
  `;

export default StyledImageWrapperSmall;
