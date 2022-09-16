import DefaultMixin from 'prisma/mixins/Default.mixin';
import { createModel } from 'schemix';
import TodoModel from './Todo.model';

export default createModel((UserModel) => {
  UserModel.mixin(DefaultMixin)
    .string('user')
    .string('email', { unique: true })
    .relation('todos', TodoModel, { list: true });
});
