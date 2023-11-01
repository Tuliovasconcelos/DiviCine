import {
  Entity,
  PrimaryGeneratedColumn,
  Column
} from 'typeorm';

@Entity('salas')
export default class Sala {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'int' })
  numeroSala: number;

  @Column({ type: 'int', nullable: true })
  capacidade: number;
}
