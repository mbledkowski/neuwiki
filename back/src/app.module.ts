import { Module } from '@nestjs/common';
import { OrbitModule } from './orbit/orbit.module';

@Module({
  imports: [OrbitModule],
})
export class AppModule {}
