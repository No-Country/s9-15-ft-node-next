import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { CreateTestDto } from 'src/dto/create-test.dto';
import { Test } from 'src/schemas/test.schema';

@Injectable()
export class TestService {
  constructor(@InjectModel(Test.name) private testModel: Model<Test>) {}

  async createTest(createTest: CreateTestDto): Promise<Test | null> {
    const newTest = new this.testModel(createTest);
    try {
      await newTest.save();
    } catch (error) {
      console.log(error);
    }
    return newTest;
  }
}
