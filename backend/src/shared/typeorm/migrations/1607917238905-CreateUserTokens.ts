import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserTokens1607917238905 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'user_tokens',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'token',
          type: 'varchar',
        },
        {
          name: 'user_id',
          type: 'int',
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()',
        },
      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user_tokens');
  }
}
