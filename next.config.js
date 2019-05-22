const withSass = require('@zeit/next-sass')
const debug = process.env.NODE_ENV !== "production";

module.exports = withSass({
    exportPathMap: function () {
        return {
          "/": { page: "/" },
          "/habilidades": { page: "/habilidades" },
          "/educacao": { page: "/educacao" },
          "/projetos": { page: "/projetos" },
          "/experiencia": { page: "/experiencia" },
          "/contato": { page: "/contato" },
        }
      },
      assetPrefix: !debug ? 'https://giseleml.github.io/giselemaraleonardi/' : '',
})
