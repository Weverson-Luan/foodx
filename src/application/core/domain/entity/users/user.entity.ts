/* eslint-disable prettier/prettier */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';
import { hashSync } from 'bcrypt';
@Entity('users')
class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'username', type: 'varchar' })
  username: string;

  @Column({ name: 'file', type: 'varchar' })
  file: string;

  @Column({ name: 'email', type: 'varchar' })
  email: string;

  @Column({ name: 'password', type: 'varchar' })
  password: string;

  @Column({ name: 'cpf', type: 'varchar' })
  cpf: string;

  @Column({ name: 'phone', type: 'varchar' })
  phone: string;

  @Column({ name: 'isActive', type: 'boolean' })
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'datetime' })
  created_at: Date;

  @UpdateDateColumn({ name: ' updated_at', type: 'datetime' })
  updated_at: Date;

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}

export { UserEntity };
