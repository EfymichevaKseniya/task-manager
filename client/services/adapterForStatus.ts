import { statusType } from '../domain/statusType';

const serviceAdapter = (obj: { id: Id; name: string }) => ({
  ...obj,
  text: statusType[obj.name],
});

export default serviceAdapter;
