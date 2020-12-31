
const sg                      = require('../polyrepo/cdr0-sg');
const _                       = sg._;

module.exports          = new Grumpy();
module.exports.Grumpy   = Grumpy;

function Grumpy(options ={}) {
  let self = this;

  let {pkgname, modname, filename} = options;
  filename = filename || options.__filename;

  let postMessage = `in ${_.compact(pkgname, modname, filename).join('.')}.`;
  if (!pkgname && !modname && !filename) {
    postMessage = `in unknown module.`;
  }

  self.says = function(message, interestingObjs, ...extra) {
    if (interestingObjs) {
      console.warn(`GRUMPY: ${message} ${postMessage}`, smallObj(interestingObjs), ...extra);
    } else {
      console.warn(`GRUMPY: ${message} ${postMessage}`, ...extra);
    }
  };

  self.if_ = function (test, message, obj, ...extra) {
    // console.log({test, message, extra})
    if (test) {
      if (extra.length === 0) {
        self.says(message, obj);
      } else {
        self.says(message, obj, ...extra);
      }
    }
  };

  self.unless = function (test, message, obj, ...extra) {
    return self.if_(!test, message, obj, ...extra);
  };
}

function smallObj(interestingObjs) {
  return sg.reduce(interestingObjs, {}, (m, obj, objName) => {
    return {...m, [objName]: Object.keys(obj)};
  });
}
