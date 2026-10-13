import {
    Query,
    Resolver,
    Mutation,
    Args,
    ResolveField,
    Parent,
} from '@nestjs/graphql';
import { ProfileService } from './profile.service';
import { CreateProfile, Profile } from './profile.model';
import { SkillService } from '../skill/skill.service';
import { Skill } from '../skill/skill.model';
import { Project } from '../project/project.model';
import { ProjectService } from '../project/project.service';
import { ExperienceService } from '../experience/experience.service';
import { EducationService } from '../education/education.service';
import { Experience } from '../experience/experience.model';
import { Education } from '../education/education.model';

@Resolver(() => Profile)
export class ProfileResolver {
    constructor(
        private profileService: ProfileService,
        private skillService: SkillService,
        private projectService: ProjectService,
        private experienceService: ExperienceService,
        private educationService: EducationService,
    ) {}

    @Query(() => [Profile])
    getAllProfiles() {
        return this.profileService.getAllProfiles();
    }

    @ResolveField(() => [Skill])
    skills(@Parent() parent: Profile) {
        const { id } = parent;
        return this.skillService.getSkillsByProfileId(id);
    }

    @ResolveField(() => [Project])
    projects(@Parent() parent: Project) {
        const { id } = parent;
        return this.projectService.getProjectsByProfileId(id);
    }

    @ResolveField(() => [Experience])
    experience(@Parent() parent: Project) {
        const { id } = parent;
        return this.experienceService.getExperienceByProfileId(id);
    }

    @ResolveField(() => [Education])
    educations(@Parent() parent: Project) {
        const { id } = parent;
        return this.educationService.getAllEducationsByProfileId(id);
    }

    @Mutation(() => Profile)
    createProfile(@Args('data') data: CreateProfile) {
        return this.profileService.createProfile(data);
    }
}
