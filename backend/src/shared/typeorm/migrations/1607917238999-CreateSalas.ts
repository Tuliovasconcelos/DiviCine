import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSalas1607917238999 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'salas',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'numeroSala',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'capacidade',
          type: 'int',
          isNullable: true,
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('salas');
  }
}
