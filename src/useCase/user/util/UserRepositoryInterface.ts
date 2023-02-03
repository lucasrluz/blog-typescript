import { IUser } from './IUser';

export interface UserRepositoryInterface {
  create(user: IUser): Promise<{
    id: string;
    name: string;
    username: string;
    email: string;
  }>;

  findUserByUsername(username: string): Promise<
    | {
        id: string;
        name: string;
        username: string;
        email: string;
      }
    | undefined
  >;

  findUserByEmail(email: string): Promise<
    | {
        id: string;
        name: string;
        username: string;
        email: string;
      }
    | undefined
  >;
}
