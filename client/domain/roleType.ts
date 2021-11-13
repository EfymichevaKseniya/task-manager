export type RoleType = { [key: string]: string };

export const roleType: RoleType = {
  admin: 'Администратор',
  manager: 'Менеджер',
  contentMaker: 'Контент-мэйкер',
};

export const IsAdmin = (val: string) => val === 'admin';
export const IsManager = (val: string) => val === 'manager';
export const IsContentMaker = (val: string) => val === 'contentMaker';
