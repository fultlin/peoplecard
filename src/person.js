import axios from "axios";

const url = "https://randomuser.me/api/?results=20";

export const getUsers = async () => {
  let list = [];
  await axios.get(url).then((res) => (list = res.data.results));
  console.log(list);
  return list;
};
