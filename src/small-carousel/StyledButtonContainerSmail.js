import styled from 'styled-components';

const StyledButtonContainerSmall = styled.div`
    z-index: 99;
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    
    & > button {      
      background-color: #95D2B7;
      height: 8rem;
      width: 4rem;     
      opacity: 0.6;
      &:focus {
        outline: 0;
      }
     
     &:first-child {
        border-top-right-radius: 7rem;
        border-bottom-right-radius: 7rem;
    
        > img {
          transform: rotate(180deg) translate(0.5rem); 
        }
     }
    
     &:last-child {
       border-top-left-radius: 7rem;
       border-bottom-left-radius: 7rem;
    
       > img {
        transform: translate(0.5rem); 
       }
     }
    }
  `;

export default StyledButtonContainerSmall;
