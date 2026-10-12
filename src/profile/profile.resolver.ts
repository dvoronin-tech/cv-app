import { Query, Resolver, Mutation, Args } from '@nestjs/graphql';
import { ProfileService } from './profile.service';
import { CreateProfile, Profile } from './models/profile.model';

@Resolver()
export class ProfileResolver {
    constructor(private profileService: ProfileService) {}

    @Query(() => [Profile])
    getAllProfiles() {
        return this.profileService.getAllProfiles();
    }

    @Mutation(() => Profile)
    createProfile(@Args('data') data: CreateProfile) {
        return this.profileService.createProfile(data);
    }
}
