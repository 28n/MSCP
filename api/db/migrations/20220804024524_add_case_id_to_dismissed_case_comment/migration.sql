/*
  Warnings:

  - Added the required column `caseId` to the `DismissedCaseComment` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DismissedCaseComment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "caseId" INTEGER NOT NULL,
    "opName" TEXT NOT NULL,
    "opRole" TEXT NOT NULL,
    "content" TEXT NOT NULL
);
INSERT INTO "new_DismissedCaseComment" ("content", "id", "opName", "opRole") SELECT "content", "id", "opName", "opRole" FROM "DismissedCaseComment";
DROP TABLE "DismissedCaseComment";
ALTER TABLE "new_DismissedCaseComment" RENAME TO "DismissedCaseComment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
