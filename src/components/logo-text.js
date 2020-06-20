import React from 'react';
import styled from '@emotion/styled';
import { linearGradient } from './../butler/index';

const Shadow = styled.p`
  background-image: ${linearGradient}
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  `;

const LogoText = ({ children }) => <Shadow>{children}</Shadow>;

export default LogoText;
