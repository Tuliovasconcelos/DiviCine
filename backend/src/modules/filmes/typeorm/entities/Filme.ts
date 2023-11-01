import {
  Entity,
  PrimaryGeneratedColumn,
  Column
} from 'typeorm';

@Entity('filmes')
export default class Filme {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar' })
  titulo: string;

  @Column({ type: 'varchar', nullable: true })
  genero: string;

  @Column({ type: 'varchar', nullable: true })
  diretor: string;

  @Column({ type: 'int', nullable: true })
  duracao: number;

  @Column({ type: 'varchar', nullable: true, length: 10 })
  classificacao: string;
}
