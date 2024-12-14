const {_caps} = require('./getCaps');
function goog_options(_name){
  const caps = _caps(_name);
  if(caps['goog:chromeOptions']){
    return caps[
      'goog:chromeOptions'
    ]
  } 
  throw new Error("Error")
};

module.exports = {goog_options}