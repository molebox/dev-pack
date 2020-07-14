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

export function encodeRFC5987ValueChars(str) {
  return (
    encodeURIComponent(str)
      // Note that although RFC3986 reserves "!", RFC5987 does not,
      // so we do not need to escape it
      .replace(/['()]/g, escape) // i.e., %27 %28 %29
      .replace(/\*/g, '%2A')
      // The following are not required for percent-encoding per RFC5987,
      // so we can allow for a little better readability over the wire: |`^
      .replace(/%(?:7C|60|5E)/g, unescape)
  );
}

export function encodeRFC5987ValueChars2(str) {
  return (
    encodeURIComponent(str)
      // Note that although RFC3986 reserves "!", RFC5987 does not,
      // so we do not need to escape it
      .replace(/['()*]/g, (c) => '%' + c.charCodeAt(0).toString(16)) // i.e., %27 %28 %29 %2a (Note that valid encoding of "*" is %2A
      // which necessitates calling toUpperCase() to properly encode)
      // The following are not required for percent-encoding per RFC5987,
      // so we can allow for a little better readability over the wire: |`^
      .replace(/%(7C|60|5E)/g, (str, hex) => String.fromCharCode(parseInt(hex, 16)))
  );
}

export function fixedEncodeURIComponent(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16);
  });
}
