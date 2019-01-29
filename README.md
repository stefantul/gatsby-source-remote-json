# gatsby-source-remote-json
Gatsby Plugin that fetches remote JSON data

Used inside a Gatsby json transformer plugin such as gatsby-transformer-json like this:

gatsby-config.js:

`gatsby-transformer-json`,
    {
      resolve: `gatsby-source-remote-json`,
      options: {
        url: 'https://s3.amazonaws.com/[your-bucket]/stuff.json' //your remote url
      }
    },
