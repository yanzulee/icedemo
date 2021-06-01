import dashboard from './dashboard';
import exception from './exception';
import result from './result';
import menu from './menu';

export default {
  'app.btn.edit': 'Edit',
  'app.btn.delete': 'Delete',
  'app.btn.detail': 'Detail',
  'app.btn.add': 'Add',
  ...menu,
  ...result,
  ...dashboard,
  ...exception,
};
