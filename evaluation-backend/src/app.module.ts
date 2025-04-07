import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { EvaluationController } from './evaluation/evaluation.controller';
import { Evaluation } from './evaluation/evaluation.entity';
import { EvaluationService } from './evaluation/evaluation.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', 
      host: 'localhost',
      port: 5432, 
      username: 'postgres',
      password: 'root',
      database: 'projetnestjs',
      entities: [Evaluation],
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Evaluation]),
    AuthModule,
    UsersModule,
  ],
  providers: [EvaluationService],
  controllers: [EvaluationController],
})
export class AppModule {}
