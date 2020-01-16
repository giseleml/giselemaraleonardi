const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withPlugins = require('next-compose-plugins');
const debug = process.env.NODE_ENV !== "production";

  const NextAppConfig = ({
      exportPathMap: function () {
        return {
          "/": { page: "/" },
          "/habilidades": { page: "/habilidades" },
          "/educacao": { page: "/educacao" },
          "/projetos": { page: "/projetos" },
          "/contato": { page: "/contato" },
        }
      },
      assetPrefix: !debug ? 'https://giseleml.github.io/giselemaraleonardi/' : '',
      imageTypes: ['jpg', 'png']
  })

module.exports = withPlugins([ 
  [ withSass ],  
  [ withImages ]
], NextAppConfig );