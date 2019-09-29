const table = require("markdown-table");

export const DocPropMarkdown = tag => {
  const docs = require("../docs.json");

  const typeDisplay = propType => {
    if (propType && propType.indexOf("|") >= 0) {
      return propType
        .split("|")
        .map(p => "`" + p + "`")
        .join(", ");
    }
    return "`" + propType + "`";
  };

  if (docs) {
    const components = docs.components;
    const component = components.find(component => component.tag === tag);
    if (component && component.props && component.props.length > 0) {
      const tableContent = [["Attribute", "Description", "Type", "Default"]];
      const props = component.props.forEach(prop => {
        tableContent.push([
          "**" + prop.name + "**",
          prop.docs,
          typeDisplay(prop.type),
          "`" + prop.default + "`"
        ]);
      });
      const properties = table(tableContent);

      return `
## Properties
  
${properties}`;
    }
    console.warn(
      "DocPropMarkdown: Could not find component in the docs.json file."
    );
  } else {
    console.warn("DocPropMarkdown: Could not find the docs.json file.");
  }
  return "";
};
