import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { SkillService } from './skill.service';
import { CreateSkill, Skill } from './skill.model';

@Resolver()
export class SkillResolver {
    constructor(private skillService: SkillService) {}

    @Query(() => [Skill])
    getSkillsByProfileId(@Args('profileId') profileId: string) {
        return this.skillService.getSkillsByProfileId(profileId);
    }

    @Mutation(() => Skill)
    createSkill(@Args('data') data: CreateSkill) {
        return this.skillService.createSkill(data);
    }
}
