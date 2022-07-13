import { Module } from '@nestjs/common';
import { OrbitService } from './orbit.service';

@Module({
  providers: [OrbitService],
})
export class OrbitModule {}
