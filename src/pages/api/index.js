import { setHeaders, handleError, handleData } from "../../util/api";
import generateData from "../../util/generateData";

export default async (req, res) => {
  if (setHeaders(req, res)) return;

  try {
    handleData(res, generateData(20));
  } catch (error) {
    handleError(res, error);
  }
};
