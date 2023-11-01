interface IRequest {
  user_id: number;
  name: string;
  email: string;
  password?: string;
  old_password?: string;
}

export { IRequest };
