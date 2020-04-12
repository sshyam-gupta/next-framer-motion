import { setHeaders, handleError, handleData } from "../../util/api";
import { getData } from "../../util/generateData";

export default async (req, res) => {
  if (setHeaders(req, res)) return;

  try {
    const id = req?.query?.id ?? "";
    handleData(res, getData(id));
  } catch (error) {
    handleError(res, error);
  }
};
