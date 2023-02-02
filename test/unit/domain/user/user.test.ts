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
});
