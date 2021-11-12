export type UserType = {
  'id': Id,
  'name': string,
  'email': string,
  'avatar': string,
  'role': {
    'id': Id,
    'name': 'admin' | 'manager' | 'contentMaker'
  }
};

export const userIsAdmin = (data:UserType) => data.role.name === 'admin';
