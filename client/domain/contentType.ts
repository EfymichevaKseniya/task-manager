export type ContentNameType = { [key: string]: string };

export const contentNameType: ContentNameType = {
  video: 'Видео',
  audio: 'Аудио',
  photo: 'Фото',
};

export const contentTypeIsVideo = (val: string) => val === 'video';
export const contentTypeIsAudio = (val: string) => val === 'audio';
export const contentTypeIsPhoto = (val: string) => val === 'photo';
