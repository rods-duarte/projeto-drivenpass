import Joi from 'joi';
import { CreateCredentialData } from '../services/credentialService';

const createCredentialSchema = Joi.object<CreateCredentialData>({
  title: Joi.string().required(),
  url: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export default createCredentialSchema;
