import { LoginType } from "../model/schema";
import service from "../service";

export function loginRequest(params: LoginType & {
  pass: string
}) {
  try {
    const res = service.login(params);
    return res;
    // const token = _get(data, 'token', '');
    // Helpers.storeAuthToken(token);
    // yield put(loginSuccess());
    // yield put(push('/'));
    // yield put(getCurrentUserRequest());
  } catch (error) {
    // yield put(loginError());
    // Helpers.toastr('', error.message, 'error');
  }
}