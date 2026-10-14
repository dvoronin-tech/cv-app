import { Args, Query, Resolver } from '@nestjs/graphql';
import { ProjectService } from '../project/project.service';
import { ExperienceService } from './experience.service';
import { Experience } from './experience.model';

@Resolver()
export class ExperienceResolver {
    constructor(private readonly experienceService: ExperienceService) {}

    @Query(() => [Experience])
    getExperienceByProfileId(@Args('profileId') profileId: string) {
        return this.experienceService.getExperienceByProfileId(profileId);
    }
}
