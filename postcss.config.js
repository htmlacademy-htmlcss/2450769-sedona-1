export default function (ctx) {
  return {
    map: ctx.env === `development`,
    plugins: {
      "postcss-import": {},
      "postcss-url": [
        {
          filter: `**/*.svg`,
          url: `inline`,
        },
        {
          filter: `!**/*.svg`,
          url: `rebase`,
        },
      ],
      "postcss-lightningcss": {
        "lightningcssOptions": {
          "minify": true,
        },
      },
    },
  }
}
