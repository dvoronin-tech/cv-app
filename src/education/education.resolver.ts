import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EducationService } from './education.service';
import { CreateEducation, Education } from './education.model';

@Resolver()
export class EducationResolver {
    constructor(private educationService: EducationService) {}

    @Query(() => Education)
    getAllEducationsByProfileId(@Args('id') id: string) {
        return this.educationService.getAllEducationsByProfileId(id);
    }

    @Mutation(() => Education)
    createEducation(@Args('data') data: CreateEducation) {
        return this.educationService.createEducation(data);
    }
}
