import { error, success } from '../../../util/response/response';

export function validateEmail(email: string) {
  const regex = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );

  if (!regex.exec(email)) {
    return error('O campo e-mail deve ter um formato de e-mail válido.');
  }

  return success('');
}
