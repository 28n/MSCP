-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DismissedCaseComment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "caseId" INTEGER NOT NULL,
    "opName" TEXT NOT NULL,
    "opRole" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_DismissedCaseComment" ("caseId", "content", "id", "opName", "opRole") SELECT "caseId", "content", "id", "opName", "opRole" FROM "DismissedCaseComment";
DROP TABLE "DismissedCaseComment";
ALTER TABLE "new_DismissedCaseComment" RENAME TO "DismissedCaseComment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
