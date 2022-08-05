import getEntityManagerMock from '../__mocks__/getEntityManagerMock';
import { UserRepository } from './UserRepository';
import { v4 as uuid } from 'uuid';
import { User } from '../entities/User'


describe('UserRepository', () => {
    const mockUser: User = {
        user_id: uuid(),
        name: 'algum nome',
        email: 'email@dio.ex'
    }

    it('Deve retornar o usuário salvo, quando chamar a fução save', async () => {

        const managerMock = await getEntityManagerMock({
            saveReturn: mockUser
        });
        
        const userRepository = new UserRepository(managerMock);
        const user = await userRepository.save(mockUser);

        expect(user).toHaveProperty('user_id');
        expect(user).toMatchObject({
            name: 'algum nome',
            email: 'email@dio.ex'
        });
    });
});