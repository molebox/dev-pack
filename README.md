## dev-pack

[![Netlify Status](https://api.netlify.com/api/v1/badges/2c7ba12f-8c53-4b91-8aed-5eb3cf98f43c/deploy-status)](https://app.netlify.com/sites/blissful-pare-832acf/deploys)

Keep your personal branding consistent across multiple platforms.
Manage your social presence, media and domains from one hub.

Upload profile and cover images to selected platforms, edit your profile information and manage your domains.

### No DB!

There are no databases, when you login you do so with your GitHub credentials, additional authentication is requested on a platform by platform basis. On first login your profile details are taken from your combined Twitter and GitHub profiles. This is exclusive of images.

### Cloud stored images

When you upload an image, be that profile or cover, they are saved to cloudinary. The next time you login you can load your 3 previously saved image.

Login and platform API is powered by [onegraph](https://www.onegraph.com/)

Stack
 - Gatsby
 - Theme-ui
 - OneGraph
 - Cloudinary
 - GSAP
