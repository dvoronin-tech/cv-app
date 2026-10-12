import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileResolver } from './profile.resolver';
import { SkillService } from '../skill/skill.service';

@Module({
    providers: [ProfileService, ProfileResolver, SkillService],
})
export class ProfileModule {}
