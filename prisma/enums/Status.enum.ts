import { createEnum } from 'schemix';

export default createEnum('TodoStatus', (TodoStatus) => {
  TodoStatus.addValue('PENDING').addValue('DONE').addValue('DELETED');
});
