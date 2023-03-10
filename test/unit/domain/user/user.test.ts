import { User } from '../../../../src/domain/user/user';

describe('Tests do domínio usuário', () => {
  it('Esprero que crie um novo usuário', async () => {
    const user = User.create(
      'Name Test',
      'usernametest',
      'email@test.com',
      'passwordtest',
    );

    expect(user.isSuccess()).toEqual(true);
    expect(user.value).toEqual({
      name: 'Name Test',
      username: 'usernametest',
      email: 'email@test.com',
      password: 'passwordtest',
    });
  });

  it('Esprero que retorne um erro, dado um nome vazio', async () => {
    const user = User.create('', 'usernametest', 'emailtest', 'passwordtest');

    expect(user.isError()).toEqual(true);
    expect(user.value).toEqual('O campo nome não pode estar vazio.');
  });

  it('Esprero que retorne um erro, dado um nome maior que 20 caracteres', async () => {
    const user = User.create(
      'nametestnametestnametest',
      'usernametest',
      'email@test.com',
      'passwordtest',
    );

    expect(user.isError()).toEqual(true);
    expect(user.value).toEqual(
      'O campo nome tem um tamanho máximo de 20 caracteres.',
    );
  });

  it('Esprero que retorne um erro, dado um nome com um valor numérico', async () => {
    const user = User.create(
      'nametest1',
      'usernametest',
      'email@test.com',
      'passwordtest',
    );

    expect(user.isError()).toEqual(true);
    expect(user.value).toEqual(
      'O campo nome deve ter somente letras e pode conter espaços.',
    );
  });

  it('Esprero que retorne um erro, dado um nome com caractere especial underline', async () => {
    const user = User.create(
      'name_test',
      'usernametest',
      'email@test.com',
      'passwordtest',
    );

    expect(user.isError()).toEqual(true);
    expect(user.value).toEqual(
      'O campo nome deve ter somente letras e pode conter espaços.',
    );
  });

  it('Esprero que retorne um erro, dado um nome de usuário vazio', async () => {
    const user = User.create('Name Test', '', 'email@test.com', 'passwordtest');

    expect(user.isError()).toEqual(true);
    expect(user.value).toEqual('O campo nome de usuário não pode estar vazio.');
  });

  it('Esprero que retorne um erro, dado um nome de usuário maior de 20 caracteres', async () => {
    const user = User.create(
      'Name Test',
      'usernametestusernametest',
      'email@test.com',
      'passwordtest',
    );

    expect(user.isError()).toEqual(true);
    expect(user.value).toEqual(
      'O campo nome de usuário tem um tamanho máximo de 20 caracteres.',
    );
  });

  it('Esprero que retorne um erro, dado um nome de usuário com um caractere inválido', async () => {
    const user = User.create(
      'Name Test',
      'username_test',
      'email@test.com',
      'passwordtest',
    );

    expect(user.isError()).toEqual(true);
    expect(user.value).toEqual(
      'O campo nome de usuário pode ter somente letras e números.',
    );
  });

  it('Esprero que retorne um erro, dado um e-mail com formato inválido', async () => {
    const user = User.create(
      'Name Test',
      'usernametest',
      'emailtest.com',
      'passwordtest',
    );

    expect(user.isError()).toEqual(true);
    expect(user.value).toEqual(
      'O campo e-mail deve ter um formato de e-mail válido.',
    );
  });

  it('Esprero que retorne um erro, dado um e-mail com formato inválido', async () => {
    const user = User.create(
      'Name Test',
      'usernametest',
      'email@testcom',
      'passwordtest',
    );

    expect(user.isError()).toEqual(true);
    expect(user.value).toEqual(
      'O campo e-mail deve ter um formato de e-mail válido.',
    );
  });
});
