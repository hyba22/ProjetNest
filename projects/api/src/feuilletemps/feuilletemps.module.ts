import { Module } from '@nestjs/common';
import { FeuilletempsService } from './feuilletemps.service';
import { FeuilletempsController } from './feuilletemps.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feuilletemp } from './entities/feuilletemp.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Feuilletemp])],
  controllers: [FeuilletempsController],
  providers: [FeuilletempsService],
})
export class FeuilletempsModule {}
