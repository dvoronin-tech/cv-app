import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileResolver } from './profile.resolver';
import { SkillService } from '../skill/skill.service';
import { ProjectService } from '../project/project.service';
import { ExperienceService } from '../experience/experience.service';

@Module({
    providers: [
        ProfileService,
        ProfileResolver,
        SkillService,
        ProjectService,
        ExperienceService,
    ],
})
export class ProfileModule {}
