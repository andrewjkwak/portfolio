module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Bentham`,
            variants: [`400`, `serif`]
          }, 
          {
            family: `Overpass`,
            variants: [`400`, `italic`]
          }
        ]
      }
    }
  ],
}
