import dashboard from './dashboard';
import exception from './exception';
import result from './result';
import menu from './menu';
import system from './system';
import car from './car';
import auction from './auction';
import agent from './agent';

export default {
  'app.btn.edit': '编辑',
  'app.btn.delete': '删除',
  'app.btn.detail': '详情',
  'app.btn.add': '新增',
  'app.btn.freeze': '冻结',
  ...menu,
  ...result,
  ...dashboard,
  ...exception,
  ...system,
  ...car,
  ...auction,
  ...agent,
};
