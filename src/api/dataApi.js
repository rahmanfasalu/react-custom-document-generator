import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL;

export const allServices = {
  getData,
};

function getData() {
  return [
    {
      title: "Data 1",
    },
    {
      title: "Data 2",
    },
    {
      title: "Data 3",
    },
    {
      title: "Data 4",
    },
  ];
}
