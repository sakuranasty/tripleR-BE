import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { MarkingCode } from 'src/schemas/marking-code.schema';

import { MarkingCodesService } from './marking-codes.service';

@Controller('marking-codes')
export class MarkingCodesController {
  constructor(private readonly markingCodesService: MarkingCodesService) {}

  @Post()
  create(@Body(new ValidationPipe({
    transform: true
  })
  ) createMarkingCodeDto: Partial<MarkingCode>) {
    return this.markingCodesService.create(createMarkingCodeDto);
  }

  @Get()
  findAll() {
    return this.markingCodesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.markingCodesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMarkingCodeDto: Partial<MarkingCode>) {
    return this.markingCodesService.update(id, updateMarkingCodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.markingCodesService.remove(id);
  }
}
