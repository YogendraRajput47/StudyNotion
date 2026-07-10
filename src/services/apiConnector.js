import axios from "axios";

const BASE_URL = "https://studynotion-ofuz.onrender.com/api/v1";

export const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData, headers, params) => {
  return axiosInstance({
    method,
    url: `${BASE_URL}${url}`,
    data: bodyData || null,
    headers: headers || {},
    params: params || {},
  });
};
