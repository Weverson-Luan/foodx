/* eslint-disable prettier/prettier */
import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';
import { UserEntity } from './user.entity';

@Entity('address')
export class AddressEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  uf: string;

  @Column()
  zip_code: string;

  @Column()
  city: string;

  @Column()
  district: string;

  @Column()
  street: string;

  @Column()
  number: number;

  @Column()
  complement: string;

  @Column()
  reference: string;

  @Column({ type: 'numeric' })
  long: number;

  @Column({ type: 'numeric' })
  lati: number;

  @Column()
  user_id: string;

  @ManyToOne(() => UserEntity, {
    cascade: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' }) //qual coluna dentro da minha tabela de videos que tou referenciando
  user: UserEntity;
  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}
