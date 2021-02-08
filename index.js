module.exports = {
  rules: {
    "unused-react-component-prop": {
      create: function (context) {
        const sourceCode = context.getSourceCode().text;
        const fileName = context.getFilename().toString();
        const extension = fileName.split('.')[1];

        return {
          ArrowFunctionExpression(path) {
            if (extension !== 'js' || extension !== 'jsx' || extension !== 'ts' || extension !== 'tsx') return;
            const propertiesLength = path.params[0].properties.length;

            for (let i = 0; i < propertiesLength; i += 1) {
              const child = path.params[0].properties[i];
              const prop = child.key.name;
              const count = sourceCode.split(prop).length - 1;
              if (count <= 1) {
                context.report({
                  node: child,
                  message: "Unused prop in react component"
                });
              }
            }
          }
        }
      }
    }
  }
};
