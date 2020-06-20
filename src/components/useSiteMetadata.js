import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query DevPackMetaDataQuery {
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `
  );
  return site.siteMetadata;
};
