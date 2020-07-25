/** @jsx jsx */
import { jsx, css } from 'theme-ui';
import { Link } from 'gatsby';

export const buttonBorderLeft = css`
  //   left: 2px;
  //   bottom: 2px;
  width: 2px;
  height: 0;
`;

export const buttonBorderRight = css`
  //   right: 2px;
  //   top: 2px;
  width: 2px;
  height: 0;
`;

export const buttonBorderTop = css`
  //   left: 2px;
  //   top: 2px;
  width: 0;
  height: 0;
`;

export const buttonBorderBottom = css`
  //   right: 2px;
  //   bottom: 2px;
  width: 0;
  height: 0;
`;

export const buttonDark = css`
  & .top {
    border: 3px solid #2b2c34;
  }
  & .top .label {
    color: #2b2c34;
  }
`;

export const buttonBorder = css`
  position: absolute;
  background-color: #2b2c34;
  -webkit-transition: all 0.25s ease-out;
  -moz-transition: all 0.25s ease-out;
  -o-transition: all 0.25s ease-out;
  transition: all 0.25s ease-out;
`;

export const InternalLink = ({ text, to, className }) => (
  <button
    className={className}
    css={css`
      display: inline-block;
      text-decoration: none;
      position: relative;
      background-color: #2b2c34;
      border: none;
      cursor: pointer;
      outline: none;
      width: 100%;
      height: 100%;

      & .bottom {
        position: absolute;
        left: -3px;
        top: 3px;
        width: 100%;
        height: 100%;
        background-color: #e03e3e;
        display: block;
        -webkit-transition: all 0.2s ease-out;
        -moz-transition: all 0.2s ease-out;
        -o-transition: all 0.2s ease-out;
        transition: all 0.2s ease-out;
      }

      & .top {
        position: relative;
        left: 0;
        top: 0;
        padding: 0.8em;
        border: 3px solid #2b2c34;
        height: 2em;
        background-color: #2b2c34;
      }

      & .top .label {
        font-family: Jost;
        font-weight: 500;
        color: #fffffe;
        font-size: 0.9rem;
        line-height: 110%;
        letter-spacing: 2px;
        text-align: center;
        -webkit-transition: all 0.15s ease-out;
        -moz-transition: all 0.15s ease-out;
        -o-transition: all 0.15s ease-out;
        transition: all 0.15s ease-out;
        bottom: 7px;
        position: relative;
      }
      &:active:enabled {
        & .top {
          border: 2px solid #2b2c34;
        }
        & .top .label {
          color: #2b2c34;
        }
      }

      &:disabled .bottom {
        left: 0;
        top: 0;
        cursor: default;
        background-color: #fffffe;
      }

      &:disabled .top {
        cursor: default;
        color: #2b2c34;
        background-color: #fffffe;
      }

      &:disabled .label {
        color: #2b2c34;
      }

      &:hover:enabled .bottom {
        left: 0;
        top: 0;
        background-color: #2b2c34;
      }
      &:hover:enabled .top .label {
        color: #fffffe;
        cursor: pointer;
      }
      &:hover:enabled .top .${buttonBorderLeft}, &:hover .top .${buttonBorderRight} {
        height: calc(100% + 2px);
        cursor: pointer;
      }
      &:hover:enabled .top .${buttonBorderTop}, &:hover .top .${buttonBorderBottom} {
        width: calc(100% + 2px);
        cursor: pointer;
      }
    `}
  >
    <Link
      to={to}
      sx={{
        textDecoration: 'none',
      }}
    >
      <div className="bottom" />
      <div className="top">
        <div className="label">{text}</div>
        <div css={buttonBorder} />
        <div css={buttonBorderLeft} />
        <div css={buttonBorder} />
        <div css={buttonBorderTop} />
        <div css={buttonBorder} />
        <div css={buttonBorderRight} />
        <div css={buttonBorder} />
        <div css={buttonBorderBottom} />
      </div>
    </Link>
  </button>
);

export default InternalLink;
