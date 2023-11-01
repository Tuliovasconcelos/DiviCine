import {
  Entity,
  PrimaryGeneratedColumn,
  Column
} from 'typeorm';

@Entity('ingressos')
export default class Ingresso {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int' })
  idSessao: number;

  @Column({ type: 'varchar', length: 11 })
  cpf: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  preco: number;

  @Column({ type: 'varchar', length: 255 })
  estado: string;
}
