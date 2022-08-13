/*
  Warnings:

  - You are about to drop the column `lengthInDays` on the `VacationRequest` table. All the data in the column will be lost.
  - Added the required column `endDate` to the `VacationRequest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `VacationRequest` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_VacationRequest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userName" TEXT NOT NULL,
    "startDate" DATETIME NOT NULL,
    "endDate" DATETIME NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reason" TEXT NOT NULL
);
INSERT INTO "new_VacationRequest" ("createdAt", "id", "reason", "status", "userName") SELECT "createdAt", "id", "reason", "status", "userName" FROM "VacationRequest";
DROP TABLE "VacationRequest";
ALTER TABLE "new_VacationRequest" RENAME TO "VacationRequest";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
