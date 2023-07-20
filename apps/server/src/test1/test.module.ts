import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestSchema } from 'src/schemas/test.schema';
import { TestService } from './test.service';
import { TestController } from './test.controller';

@Module({
  providers: [TestService],
  controllers: [TestController],
  exports: [],
  imports: [
    MongooseModule.forFeature([{ name: Test.name, schema: TestSchema }]),
  ],
})
export class TestModule {}
