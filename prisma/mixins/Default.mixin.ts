import { createMixin } from 'schemix';

export default createMixin((DefaultMixin) => {
  DefaultMixin.int('id', { id: true, default: { autoincrement: true } })
    .dateTime('createdAt', { default: { now: true } })
    .dateTime('updatedAt', { updatedAt: true });
});
