// iconAdapter, iconInputAdapter
const changesIconService = (obj: {
  id: Id;
  name: string;
  width?: number;
  height?: number
}) => {
  return {
    id: obj.name,
    num: obj.id,
    width: 10,
    height: 10,
  };
};

export default changesIconService;
