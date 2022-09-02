import ChromeConsumer from "./chrome";
import DefaultConsumer from "./default";

const getMessage = (callback) => {
  if (process.env.NODE_ENV == "development") {
    return DefaultConsumer.getMessage(callback);
  } else {
    return ChromeConsumer.getMessage(callback);
  }
};

export default {
  getMessage,
};
