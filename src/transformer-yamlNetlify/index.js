/* eslint class-methods-use-this: "off" */
const jsYaml = require('js-yaml');
const { flatten, unflatten } = require('flat');

class YamlTransformer {
  static mimeTypes() {
    return ['text/yaml'];
  }

  parse(content) {
    let data = jsYaml.load(content);

    // flatten simplifies recursively searching all children for images
    const flatData = flatten(data);

    Object.keys(flatData)
      // only keys that end with '.image'
      .filter(key => key.lastIndexOf('.image') !== -1)
      .forEach(imageKey => {
        // prepend '../../' to path (relative path from /src/pages/ directory)
        flatData[imageKey] = `../../${flatData[imageKey]}`;
      });

    data = unflatten(flatData);

    return typeof data !== 'object' || Array.isArray(data) ? { data } : data;
  }
}

module.exports = YamlTransformer;
