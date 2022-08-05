import { UserService } from './UserService';
import { v4 as uuid } from 'uuid';


jest.mock('../repositories/UserRepository');
const mockUserRepository = require('../repositories/UserRepository');

describe('UserService', () => {
    const mockUser = {
        user_ide: uuid(),
        name: 'Algum usuário',
        email: 'test@dio.ex'
    };

    const userService = new UserService({
        userRepository: mockUserRepository,
        name: 'algum usuário',
        email: 'test@dio.ex'
    });

    it('Deve retornar o usuário, quando for salvo', async () => {
        mockUserRepository.save = jest.fn().mockImplementation(() => Promise.resolve(mockUser));
        
        const user =  await userService.createUser();

        expect(user).toHaveProperty('user_id');
        expect(user).toMatchObject({
            name: 'algum usuário',
            email: 'test@dio.ex'
        });
    });
});