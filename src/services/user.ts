import { ApiBase } from "../authorizations/ApiBase";

const prefix = "/user";

export default {
  //login: (payload: any) => ApiBase.post(`${prefix}`/login, payload),
  login: async (payload: {
    email: string;
    password: string;
  }): Promise<{ data: {token: string; id: string; name: string }}> =>
    Promise.resolve({
      data: {
        token: "tokenzao",
        id: "123",
        name: "Jubileu",
      },
    }),
};
