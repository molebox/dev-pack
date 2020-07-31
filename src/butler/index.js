import styled from '@emotion/styled';

export const linearGradient = `linear-gradient(90deg, rgba(98,70,234,1) 9%, rgba(209,209,233,1) 28%, rgba(224,62,62,1) 60%, rgba(98,70,234,1) 100%);`;
export const APP_ID = process.env.GATSBY_ONEGRAPH_APP_ID;

export const FunkyText = styled.span`
  background-image: ${linearGradient}
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  `;
