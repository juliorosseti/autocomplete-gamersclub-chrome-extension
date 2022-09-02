import ChromeProducer from "./chrome";
import DefaultProducer from "./default";

const sendMessage = async (obj) => {
  if (process.env.NODE_ENV == "development") {
    return await DefaultProducer.sendMessage(obj);
  } else {
    return await ChromeProducer.sendMessage(obj);
  }
};

export default {
  sendMessage,
};
