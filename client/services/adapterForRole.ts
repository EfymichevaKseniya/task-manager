import { roleType } from '../domain/roleType';

const serviceAdapter = (obj: { id: Id; name: string }) => ({
  ...obj,
  text: roleType[obj.name],
});

export const serviceAdapterForServer = (obj: { id: Id; text: string }) => ({
  ...obj,
  name: roleType[obj.text],
});

export default serviceAdapter;
