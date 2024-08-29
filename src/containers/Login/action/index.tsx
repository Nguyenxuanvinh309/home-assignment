import { OP_DATA } from "../../../utils/constants";
import Helper from "../../../utils/helpers";
import { LoginType } from "../model/schema";
import service from "../service";

export async function loginRequest(params: LoginType) {
  try {
    const res = service.login(params);
    const data = (await res)?.data;
    const parseData = {
      ...JSON.parse(data),
      code: 200,
      token: 'c2ltcGxlc3RmaW5hbGdyb3dyYW5nZWNvbnN0cnVjdGlvbm1vdmllY291bGRub3J0aGw='
    };
    Helper.storeAuthToken(parseData?.token);
    Helper.storeData(OP_DATA, JSON.stringify(parseData));
    return parseData;
  } catch (error) {
    return error;
  }
}