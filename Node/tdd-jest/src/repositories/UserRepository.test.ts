import getEntityManagerMock from '../__mocks__/getEntityManagerMock';
import { UserRepository } from './UserRepository';
import { getMockUser } from '../__mocks__/mockUser';
import { User } from '../entities/User'


describe('UserRepository', () => {
    const mockUser: User = getMockUser();

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