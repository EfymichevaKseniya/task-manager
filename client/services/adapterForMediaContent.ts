import { contentType } from '../domain/contentType';

// input adapter
const serviceAdapter = (obj: {
  id: Id;
  name: string;
}) => ({
  ...obj,
  text: contentType[obj.name],
});

// let str: string = '';
// str = contentType[obj.name];

// if (obj.name === 'video') {
//   str = 'Видео';
// } else if (obj.name === 'audio') {
//   str = 'Аудио';
// } else if (obj.name === 'photo') {
//   str = 'Фото';
// }

export default serviceAdapter;
