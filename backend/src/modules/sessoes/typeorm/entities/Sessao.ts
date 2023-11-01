import {
  Entity,
  PrimaryGeneratedColumn,
  Column
} from 'typeorm';

@Entity('Sessoes')
export default class Sessao {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int' })
  idFilme: number;

  @Column({ type: 'int' })
  idSala: number;

  @Column({ type: 'datetime' })
  dataHora: Date;
}
