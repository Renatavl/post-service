export interface IUserResponse {
  id: number;
  name: string;
  email: string;
  address: { street: string; city: string };
  phone: string;
}
