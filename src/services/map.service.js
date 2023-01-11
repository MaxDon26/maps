import axios from "axios";

export async function fetchMap() {
  const { data } = await axios.get(
    "http://agro.energomera.ru:3060/api/field?lastChangeDate=2022-01-01T10:00:00.000&skip=0&take=100"
  );

  return data;
}
