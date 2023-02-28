import axios from "axios";
import { useQuery } from "react-query";
const fetchingData = (path) => axios.get(path);

export const useFeatchData = (path, queryKey, options) => {
  return useQuery(queryKey, () => fetchingData(path), {
    ...options,
  });
};
