import { LoginType } from "@/containers/Login/model/schema";
import service from "@/containers/Login/service";

export async function loginRequest(params: LoginType) {
  try {
    const res = service.login(params);
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