import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res,
  UploadedFile,
} from '@nestjs/common';
import { TestService } from './test.service';
import { CreateAlbumDto } from 'src/dto/create-album.dto';
import { CreateTestDto } from 'src/dto/create-test.dto';
import { create } from 'domain';

@Controller('test')
export class TestController {
  constructor(private testService: TestService) {}

  @Post()
  async createTest(@Body() createTestDto: CreateTestDto, @Res() res: any) {
    try {
      await this.testService.createTest(createTestDto);
      return res.status(HttpStatus.OK).json('ok');
    } catch (error) {
      console.log(error);
    }
  }
}
