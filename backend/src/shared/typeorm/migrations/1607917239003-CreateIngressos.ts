import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateIngressos1607917239003 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const ingressosTable = new Table({
      name: 'ingressos',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'idSessao',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'cpf',
          type: 'varchar(11)',
          isNullable: false,
        },
        {
          name: 'preco',
          type: 'decimal',
          precision: 10,
          scale: 2,
          isNullable: false,
        },
        {
          name: 'estado',
          type: 'varchar(255)',
          isNullable: false,
        },
      ],
    });

    await queryRunner.createTable(ingressosTable);

    const sessaoForeignKey = new TableForeignKey({
      columnNames: ['idSessao'],
      referencedTableName: 'sessoes',
      referencedColumnNames: ['id'],
      onDelete: 'CASCADE',
    });

    await queryRunner.createForeignKey('ingressos', sessaoForeignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('ingressos', 'FK_idSessao');
    await queryRunner.dropTable('ingressos');
  }
}
