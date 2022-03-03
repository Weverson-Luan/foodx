/* eslint-disable prettier/prettier */
import { hashSync } from 'bcryptjs';

export function hashPasswordTransform(password: string): string {
  return hashSync(password, parseInt(process.env.API_SALT));
}
