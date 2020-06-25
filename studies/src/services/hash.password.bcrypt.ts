import {inject} from '@loopback/core';
import {genSalt, hash, compare} from 'bcryptjs';

interface PasswordHasher<T = string> {
  hashPassword(passwrod: T): Promise<T>
  comparePassword(providePassword: T, storedPassword: T) : Promise<boolean>
};

export class BcryptHasher implements PasswordHasher<string> {
  async comparePassword(providePassword: string, storedPassword: string): Promise<boolean> {
    const passwordMatch = await compare(providePassword,storedPassword)
    return passwordMatch
  }
  
  @inject('rounds')
  public readonly rounds:number

  async hashPassword(password: string) {
    const salt = await genSalt(this.rounds)
    return await hash(password, salt)
  };

  
}
