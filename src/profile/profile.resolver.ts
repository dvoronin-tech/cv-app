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

@Resolver(() => Profile)
export class ProfileResolver {
    constructor(
        private profileService: ProfileService,
        private skillService: SkillService,
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

    @Mutation(() => Profile)
    createProfile(@Args('data') data: CreateProfile) {
        return this.profileService.createProfile(data);
    }
}
