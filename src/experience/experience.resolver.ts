import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProjectService } from '../project/project.service';
import { ExperienceService } from './experience.service';
import { CreateExperience, Experience } from './experience.model';

@Resolver()
export class ExperienceResolver {
    constructor(private readonly experienceService: ExperienceService) {}

    @Query(() => [Experience])
    getExperienceByProfileId(@Args('profileId') profileId: string) {
        return this.experienceService.getExperienceByProfileId(profileId);
    }

    @Mutation(() => Experience)
    createExperience(@Args('experience') experience: CreateExperience) {
        return this.experienceService.createExperience(experience);
    }
}
