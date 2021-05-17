module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            ident: "postcss",
            plugins: () => [require("autoprefixer")],
          },
        },
      },
    ],
  },
}
