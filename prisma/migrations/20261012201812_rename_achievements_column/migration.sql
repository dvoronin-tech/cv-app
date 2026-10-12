/*
  Warnings:

  - You are about to drop the column `archivements` on the `Experience` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "archivements",
ADD COLUMN     "achievements" TEXT[];
