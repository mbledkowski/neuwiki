import { Module } from '@nestjs/common';
import { OrbitService } from './orbit.service';
import { OrbitController } from './orbit.controller';

@Module({
  providers: [OrbitService],
  controllers: [OrbitController],
})
export class OrbitModule {}
