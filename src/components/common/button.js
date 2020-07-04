/** @jsx jsx */
import { jsx, css } from 'theme-ui';

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
    border: 2px solid #e87373;
  }
  & .top .label {
    color: #e87373;
  }
`;

export const buttonBorder = css`
  position: absolute;
  background-color: #6246ea;
  -webkit-transition: all 0.25s ease-out;
  -moz-transition: all 0.25s ease-out;
  -o-transition: all 0.25s ease-out;
  transition: all 0.25s ease-out;
`;

export const Button = ({ text, onClick, type, disabled }) => (
  <button
    disabled={disabled}
    type={type}
    aria-label={text}
    name={text}
    onClick={onClick}
    css={css`
			display: inline-block;
			text-decoration: none;
			position: relative;
			background-color: Transparent;
			border: none;
			cursor: pointer;
			outline: none;
		
			& .bottom {
				position: absolute;
				left: -6px;
				top: 4px;
				width: 100%;
				height: 100%;
				background-color: #E87373;
				display: block;
				border-radius: 5px;
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
				border: 2px solid #6246ea;
				border-radius: 5px;
				height: 2em;
			}
		
			& .top .label {
				font-family: Jost;
				font-weight: 500;
				color: #2b2c34;
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
        // ${buttonDark}
        & .top {
          border: 2px solid #E87373;
        }
        & .top .label {
          color: #E87373;
        }
			}
		
			&:disabled {
				opacity: 0.55;
			}
		
			&:hover:enabled .bottom {
				left: 0;
				top: 0;
				background-color: #d1d1e9;
			}
			&:hover:enabled .top .label {
				color: #6246ea;
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
  </button>
);

export default Button;
