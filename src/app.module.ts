import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test/test.controller';
import { TestModule } from './test/test.module';
import { TestService } from './test/test.service';

@Module({
  imports: [TestModule],
  controllers: [AppController, TestController],
  providers: [AppService, TestService],
})
export class AppModule {}
