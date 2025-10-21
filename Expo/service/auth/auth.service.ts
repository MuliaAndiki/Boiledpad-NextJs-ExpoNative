import { TResponse } from "@/pkg/react-query/mutation-wrapper.type";
import { FormLogin } from "@/types/form";
import AxiosClient from "@/utils/Axios.client";

class AuthApi {
  async Login(payload: FormLogin): Promise<TResponse<any>> {
    const res = await AxiosClient.post("/api/auth/login", payload);
    return res.data;
  }
}

export default new AuthApi();
