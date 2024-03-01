module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true,
        },
      },
    ],
    // NOTA: Para que funcione este preset-react es necesario instalarlo ejecutando el comando
    //       yarn add -D @babel/preset-react
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      }
    ]
  ],
};
