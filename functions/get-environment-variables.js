function buildConfigObject() {
    const config = {};
    for (let attr in process.env) {
      if (attr.startsWith("runtime_")) {
        const startAt = attr.indexOf("_") + 1;
        const newKey = attr.substring(startAt);
        config[newKey] = process.env[attr];
      }
    }
  
    return config;
  }
  
  exports.handler = function(event, context, callback) {
    try {
      const config = buildConfigObject();
      const returnObj = { body: JSON.stringify(config), statusCode: 200 };
      console.log("runtime config data: ", JSON.stringify(returnObj, null, 2));
      return callback(null, returnObj);
    } catch (error) {
      console.error(error);
      return callback({ statusCode: 500, error });
    }
  };