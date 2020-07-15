import styled from '@emotion/styled';

export const linearGradient = `linear-gradient(90deg, rgba(43,44,52,1) 10%, rgba(98,70,234,1) 50%, rgba(228,88,88,1) 99%);`;
export const APP_ID = process.env.GATSBY_ONEGRAPH_APP_ID;

export const FunkyText = styled.span`
  background-image: ${linearGradient}
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  `;
