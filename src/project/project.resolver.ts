import { Query, Resolver, Args, Mutation } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { CreateProject, Project } from './project.model';

@Resolver()
export class ProjectResolver {
    constructor(private projectService: ProjectService) {}

    @Query(() => [Project])
    getProjectsByProfileId(@Args('profileId') profileId: string) {
        return this.projectService.getProjectsByProfileId(profileId);
    }

    @Mutation(() => Project)
    createProject(@Args('data') data: CreateProject) {
        return this.projectService.createProject(data);
    }
}
