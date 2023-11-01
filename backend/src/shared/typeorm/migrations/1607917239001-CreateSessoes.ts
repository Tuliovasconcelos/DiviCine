import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateSessoes1607917239001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const sessoesTable = new Table({
      name: 'sessoes',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'idFilme',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'idSala',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'dataHora',
          type: 'datetime',
          isNullable: true,
        },
      ],
    });

    await queryRunner.createTable(sessoesTable);

    const filmesForeignKey = new TableForeignKey({
      columnNames: ['idFilme'],
      referencedTableName: 'filmes',
      referencedColumnNames: ['id'],
      onDelete: 'CASCADE',
    });

    const salasForeignKey = new TableForeignKey({
      columnNames: ['idSala'],
      referencedTableName: 'salas',
      referencedColumnNames: ['id'],
      onDelete: 'CASCADE',
    });

    await queryRunner.createForeignKey('sessoes', filmesForeignKey);
    await queryRunner.createForeignKey('sessoes', salasForeignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('sessoes', 'FK_idFilme');
    await queryRunner.dropForeignKey('sessoes', 'FK_idSala');
    await queryRunner.dropTable('sessoes');
  }
}
