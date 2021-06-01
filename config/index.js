const { merge } = require('webpack-merge');

const config = {
  user: '/user-server',
  market: '/market-server',
  car: '/car-server',
};
const exportFn = function () {
  if (process.env.N_ENV === 'prod') {
    return merge({}, config, require('./prod.js'));
  } else if(process.env.N_ENV === 'local'){
    return merge({}, config, require('./local.js'));
  } else if(process.env.N_ENV === 'uat'){
    return merge({}, config, require('./uat.js'));
  }
  return merge({}, config, require('./test.js'));
};
module.exports = exportFn();