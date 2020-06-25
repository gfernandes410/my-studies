import {inject} from '@loopback/core';
import {repository} from "@loopback/repository";
import {getJsonSchemaRef, post, requestBody} from "@loopback/rest";
import * as _ from 'lodash';
import {User} from '../models';
import {Credentials, UserRepository} from "../repositories";
import {BcryptHasher} from '../services/hash.password.bcrypt';
import {JWTService} from '../services/jwt-service';
import {MyUserService} from '../services/user-service';
import {validateCredentials} from '../services/validator';
import {CredentialsRequestBody} from './specs/user.controller.spec';

export class UserController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
    @inject('service.hasher')
    public hasher: BcryptHasher,
    @inject('services.user.service')
    public userService: MyUserService,
    @inject('services.jwt.service')
    public jwtService: JWTService

  ) {}

  @post('/users/signup', {
    responses: {
      '200': {
        description: 'User',
        content: {
          schema: getJsonSchemaRef(User),
        },
      },
    },
  })
  async signup(@requestBody() userData: User) {

    validateCredentials(_.pick(userData, ['email', 'password']));

    // eslint-disable-next-line require-atomic-updates
    userData.password = await this.hasher.hashPassword(userData.password)

    const saveUser = await this.userRepository.create(userData);
    delete saveUser.password;
    return saveUser;

  }

  @post('/users/login', {
    responses: {
      '200': {
        description: 'Token - sadsadsd',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                token: {
                  type: 'string',
                },
              },
            },
          },
        },
      },
    },
  })
  async login(@requestBody(CredentialsRequestBody) credentials: Credentials): Promise<{token: string}> {

    const user = await this.userService.verifyCredentials(credentials)
    const userProfile = await this.userService.convertToUserProfile(user)
    console.log('user', user)
    console.log('userProfile', userProfile)

    const token = await this.jwtService.generateToken(userProfile)
    return Promise.resolve({token})
  }

}
