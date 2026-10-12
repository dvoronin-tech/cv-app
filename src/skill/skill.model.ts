import {
    type Skill as SkillRecord,
    Prisma,
    SkillLevel,
} from '../generated/prisma/client';
import {
    Field,
    ID,
    InputType,
    ObjectType,
    registerEnumType,
} from '@nestjs/graphql';

registerEnumType(SkillLevel, {
    name: 'SkillLevel',
});

@ObjectType({ isAbstract: true })
@InputType({ isAbstract: true })
export class SharedSkill {
    @Field()
    name: string;

    @Field()
    level: SkillLevel;

    @Field()
    profileId: string;

    @Field(() => String, { nullable: true })
    description: string;
}

@InputType()
export class CreateSkill
    extends SharedSkill
    implements Prisma.SkillUncheckedCreateInput {}

@ObjectType()
export class Skill extends SharedSkill implements SkillRecord {
    @Field(() => ID)
    id: string;
}
