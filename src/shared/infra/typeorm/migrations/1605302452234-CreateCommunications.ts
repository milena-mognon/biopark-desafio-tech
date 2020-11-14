import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateCommunications1605302452234
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'communications',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'recipient_id',
            type: 'uuid',
          },
          {
            name: 'message',
            type: 'varchar',
          },
          {
            name: 'status',
            type: 'varchar',
          },
          {
            name: 'send_date',
            type: 'timestamp with time zone',
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
          {
            name: 'canceled_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
        foreignKeys: [
          {
            name: 'Recipient',
            referencedTableName: 'recipients',
            referencedColumnNames: ['id'],
            columnNames: ['recipient_id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('communications');
  }
}
