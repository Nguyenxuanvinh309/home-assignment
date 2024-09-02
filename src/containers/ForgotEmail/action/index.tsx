import { ForgotEmailType } from "@/containers/ForgotEmail/model/schema";
import service from "@/containers/ForgotEmail/service";

export async function forgotRequest(params: ForgotEmailType) {
  try {
    const res = service.forgotEmailType(params);
    const data = (await res)?.data;
    const parseData = {
      ...JSON.parse(data),
      code: 200,
    };
    return parseData;
  } catch (error) {
    return error;
  }
}