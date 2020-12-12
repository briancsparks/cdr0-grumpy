
module.exports.Grumpy = Grumpy;

function Grumpy(options ={}) {
  let self = this;

  self.says = function() {

  };

  self.info = function () {

  }

  self.log = function (...args) {
    return console.log(...args);
  }

}
