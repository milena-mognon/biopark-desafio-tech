import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('recipients')
class Recipient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  message: string;

  @Column('timestamp with time zone')
  send_date: Date;

  @Column()
  status: string;

  @Column()
  recipient_id: string;

  @ManyToOne(() => Recipient)
  @JoinColumn({ name: 'recipient_id' })
  recipient: Recipient;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: string;

  @Column()
  canceled_at: Date;
}

export default Recipient;
