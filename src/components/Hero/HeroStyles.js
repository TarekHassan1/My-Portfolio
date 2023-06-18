import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
export const Span = styled.span`
position: relative;



  ::after {
    content: '';
    position: absolute;
    width: 1.5px;
    height: 30px;
    background: gray;
    margin-left:0.1rem;
  }

`