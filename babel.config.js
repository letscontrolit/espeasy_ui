const presets = [
    [
      "@babel/env",
      {
        targets: {
          chrome: "72",
        },
        useBuiltIns: false, //"usage",
      },
    ],
  ];

  const plugins = [ ["@babel/plugin-transform-react-jsx", { "pragma":"h" }]]
  
  module.exports = { presets, plugins };