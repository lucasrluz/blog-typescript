import { error, success } from '../../../util/response/response';

export function validateUsername(username: string) {
  if (!username) {
    return error('O campo nome de usuário não pode estar vazio.');
  }

  if (username.length > 20) {
    return error(
      'O campo nome de usuário tem um tamanho máximo de 20 caracteres.',
    );
  }

  const regex = new RegExp(/^[a-zA-Z0-9]*$/);

  if (!regex.exec(username)) {
    return error('O campo nome de usuário pode ter somente letras e números.');
  }

  return success('');
}
