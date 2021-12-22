import styled from 'styled-components'; 


const Button = styled.button`
    width: 100%;
    
`

const SmallButton = styled.button`

    width: 80px;
    height: 2.3rem;
    border: none;
    border-radius: 0.3rem;
    background-color: #ffa300;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 2.3rem;
    text-align: center;
    cursor: pointer;
    margin: 1rem 0;
    transition: all 0.3s ease-in-out;
    &:hover{
        background-color: #fff;
        color: #ffa300;
    }
`

const BigButton = styled.button`

    width: 200px;
    height: 4.3rem;
    border: none;
    border-radius: 0.3rem;
    background-color: #ffa300;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 4.3rem;
    text-align: center;
    cursor: pointer;
    margin: 1rem 0;
    transition: all 0.3s ease-in-out;
    &:hover{
        background-color: #fff;
        color: #ffa300;
    }
`



export { SmallButton, BigButton };

export default Button;