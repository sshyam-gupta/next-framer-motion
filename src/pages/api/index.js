import { setHeaders, handleError, handleData } from '../../util/api';
import generateData from '../../util/generateData';

export default async (req, res) => {
  if (setHeaders(req, res)) return;

  try {
    const result = generateData(20)
    handleData(res, result);
  } catch (error) {
    handleError(res, error);
  }
};
