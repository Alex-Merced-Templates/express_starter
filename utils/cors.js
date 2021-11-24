// whitelist of URLS that can make a request to your server
// to allow all urls, whitelist should have "*" as its first element
const whitelist = ["*"];

// if whitelist starts with "*" then all traffic allowed, otherwise if origin url is not in whitelist, request is blocked.
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist[0] === "*") {
      callback(null, true);
    } else {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    }
  },
};

module.exports = corsOptions
