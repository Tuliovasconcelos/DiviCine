import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateFilmes1607917238920 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'filmes',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'titulo',
          type: 'varchar',
          isNullable: false,
        },
        {
          name: 'genero',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'diretor',
          type: 'varchar',
          isNullable: true,
        },
        {
          name: 'duracao',
          type: 'int',
          isNullable: true,
        },
        {
          name: 'classificacao',
          type: 'varchar(10)',
          isNullable: true,
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('filmes');
  }
}
