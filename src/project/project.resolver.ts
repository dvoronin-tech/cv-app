import { Query, Resolver, Args } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Project } from './project.model';

@Resolver()
export class ProjectResolver {
    constructor(private projectService: ProjectService) {}

    @Query(() => [Project])
    getProjectsByProfileId(@Args('profileId') profileId: string) {
        return this.projectService.getProjectsByProfileId(profileId);
    }
}
