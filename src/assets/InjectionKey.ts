import { InjectionKey } from 'vue';
import User from '@/interfaces/User';
const usersKey: InjectionKey<User[]> = Symbol('User');

export {
    usersKey as usersKey
}