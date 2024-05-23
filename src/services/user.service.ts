import { IUserResponse } from "@/dto/response";
import { axios } from "@/utils";

async function getUsers() {
  return axios.get<IUserResponse[]>("/users").then((res) => res.data)
}

const userService = {
  getUsers,
};

export default userService;
