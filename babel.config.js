module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins:[
      ["import", { libraryName: "antd", libraryDirectory: "lib", style: true }],
    ],
  };
};
