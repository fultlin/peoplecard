import axios from "axios";

const url = "https://randomuser.me/api/";

const list = [];
for (let i = 0; i < 20; i++) {
  let person = {};
  axios.get(url).then(function (response) {
    // обработка успешного запроса
    person.id = i;
    person.title = response.data.results[0].name.title;
    person.first = response.data.results[0].name.first;
    person.last = response.data.results[0].name.last;
    person.gender = response.data.results[0].gender;
    person.picture = response.data.results[0].picture.large;

    list.push(person);
  });
}


export default list;
