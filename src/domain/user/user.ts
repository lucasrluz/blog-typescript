import { error, success } from '../../util/response/response';
import { validateEmail } from './validations/validateEmail';
import { validateName } from './validations/validateName';
import { validateUsername } from './validations/validateUsername';

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
    const validateNameResponse = validateName(name);

    if (validateNameResponse.isError()) {
      return error(validateNameResponse.value);
    }

    const validateUsernameResponse = validateUsername(username);

    if (validateUsernameResponse.isError()) {
      return error(validateUsernameResponse.value);
    }

    const validateEmailResponse = validateEmail(email);

    if (validateEmailResponse.isError()) {
      return error(validateEmailResponse.value);
    }

    const user = new User(name, username, email, password);

    return success(user);
  }
}
