import { Query, Resolver, Args } from '@nestjs/graphql';
import { SkillService } from './skill.service';
import { Skill } from './skill.model';

@Resolver()
export class SkillResolver {
    constructor(private skillService: SkillService) {}

    @Query(() => [Skill])
    getSkillsByProfileId(@Args('profileId') profileId: string) {
        return this.skillService.getSkillsByProfileId(profileId);
    }
}
