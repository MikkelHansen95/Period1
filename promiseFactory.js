let promiseFactory = function(msg,delay) {
    return new Promise((resolve, reject)=> {
      setTimeout(()=> { //To demonstrate an async call
        var ok = true;
        if (ok) {
          resolve(msg.toUpperCase());
        }
        else {
          reject("UPS");
        }
      }, delay);
    });
  };

  module.exports = promiseFactory;
  