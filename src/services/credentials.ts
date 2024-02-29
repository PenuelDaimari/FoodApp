import {Credential} from '@loopback/security';

export interface EmailPasswordCredentials extends Credential {
  email: string;
  password: string;
}
