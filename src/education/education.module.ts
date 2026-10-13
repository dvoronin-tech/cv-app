import { Module } from '@nestjs/common';
import { EducationService } from './education.service';
import { EducationResolver } from './education.resolver';

@Module({
    providers: [EducationService, EducationResolver],
    exports: [EducationService],
})
export class EducationModule {}
