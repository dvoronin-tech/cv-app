/*
  Warnings:

  - A unique constraint covering the columns `[profileId,name,startDate]` on the table `Education` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[profileId,companyName,startDate]` on the table `Experience` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[profileId,name]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[profileId,name]` on the table `Skill` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Education_profileId_name_startDate_key" ON "Education"("profileId", "name", "startDate");

-- CreateIndex
CREATE UNIQUE INDEX "Experience_profileId_companyName_startDate_key" ON "Experience"("profileId", "companyName", "startDate");

-- CreateIndex
CREATE UNIQUE INDEX "Project_profileId_name_key" ON "Project"("profileId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Skill_profileId_name_key" ON "Skill"("profileId", "name");
