import { success } from '../../util/response/response';

export class User {
  public name: string;
  public username: string;
  public email: string;
  public password: string;

  private constructor(
    name: string,
    username: string,
    email: string,
    password: string,
  ) {
    this.name = name;
    this.username = username;
    this.email = email;
    this.password = password;
  }

  static create(
    name: string,
    username: string,
    email: string,
    password: string,
  ) {
    const user = new User(name, username, email, password);

    return success(user);
  }
}
