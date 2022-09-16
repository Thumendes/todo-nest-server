import StatusEnum from 'prisma/enums/Status.enum';
import DefaultMixin from 'prisma/mixins/Default.mixin';
import { createModel } from 'schemix';
import UserModel from './User.model';

export default createModel((TodoModel) => {
  TodoModel.mixin(DefaultMixin)
    .int('userId')
    .string('text')
    .enum('status', StatusEnum, { default: 'PENDING' })
    .relation('user', UserModel, { references: ['id'], fields: ['userId'] });
});
