import styled from "styled-components";
export const Card = styled.div`
    width: 320px;
    height: 497px;
    margin: 0 auto auto;
    background: ${props => props.theme.colors.white};
    box-shadow: 0px 25px 25px rgba(0, 0, 0, 0.0476518);
    border-radius: 20px;
   `
;
export const QrImage = styled.img`
    max-width: 100%;
    padding: 16px;
    border-radius: 10px;
`;
export const Heading = styled.h1`

    font-size: 22px;
    padding: 16px;
    text-align: center;

`
export const Paragraps = styled.p`
    font-size: 15px;
    line-height: 19px;
    text-align: center;
    letter-spacing: 0.1875px;
    color: #7D889E;    
`;