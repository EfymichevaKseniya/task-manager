export type TaskType = {
  'executor': {
    'name': string,
    'id': Id
  },
  'id': Id,
  'name': string,
  'type': {
    'name': string,
    'id': Id
  },
  'status': {
    'name': 'inWork' | 'approved' | 'feedback',
    'id': Id
  },
  'dateExpired': string,
};

export type IndexTaskType = {
  'author': {
    'name': string,
    'id': Id
  },
  'dateCreated': string,
  'format': string,
  'id': Id,
  'name': string,
  'preview': string,
  'type': {
    'name': string,
    'id': Id
  },
  'url': string
};
