import { error, success } from '../../../util/response/response';

export function validateName(name: string) {
  if (!name) {
    return error('O campo nome não pode estar vazio.');
  }

  if (name.length > 20) {
    return error('O campo nome tem um tamanho máximo de 20 caracteres.');
  }

  const regex = new RegExp(/^[A-Za-z\s]*$/);

  if (!regex.exec(name)) {
    return error('O campo nome deve ter somente letras e pode conter espaços.');
  }

  return success('');
}
