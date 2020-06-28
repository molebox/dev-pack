require('dotenv').config({
    path: `.env`,
  });

module.exports = {
  siteMetadata: {
    siteName: 'dev-pack'
  },
    plugins: [
          {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint: process.env.GATSBY_MAILCHIMP_ENDPOINT,
                timeout: 5000,
            },
          },
          {
            resolve: 'gatsby-theme-seo', 
            options: {
                title: 'devpack.dev',
                author: "Richard Haines",
                description: 'Keep your personal branding consistent across multiple platforms. Manage your social presence, media and domains from one hub. The dev pack is an authenticated hub where you will be able to manage and control various aspect of your online presence through a tabbed dashboard.',
                siteUrl: 'https://www.devpack.dev/',
                social: {
                    twitter: 'dev_pack'
                }
            }
        },
        'gatsby-plugin-emotion',
        'gatsby-plugin-theme-ui'
    ]
}