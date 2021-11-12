export type StatusType = { [key:string]:string };

export const statusType: StatusType = {
  inWork: 'В работе',
  approved: 'Выполнено',
  feedback: 'Ожидает согласования',
};

export const contentTypeIsInWork = (val:string) => val === 'inWork';
export const contentTypeIsApproved = (val:string) => val === 'approved';
export const contentTypeIsFeedback = (val:string) => val === 'feedback';
