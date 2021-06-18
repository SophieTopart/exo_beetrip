import styled from 'styled-components';

export const Div = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
${(props) => props.orange && 'background: coral'};
${(props) => props.blue && 'background: lightblue'};
`

export const Text = styled.p`
font-size: 1.5rem;
`

export const Input = styled.input`
padding: 1rem;
border-radius: 5%;
border: none;
box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.2);
&:hover {
    border: 0.5px solid grey;
  }
`

export const Button = styled.button`
padding: 0.8rem;
margin-top: 1rem;
border-radius: 5%;
background: linen;
border: none;
box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.2);
&:hover {
    box-shadow: 0px 3px 5px 2px rgba(0, 0, 0, 0.5);
  }
`
