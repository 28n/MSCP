/*
  Warnings:

  - Added the required column `timestamp` to the `DismissedCase` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DismissedCase" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userName" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "opName" TEXT NOT NULL,
    "opRole" TEXT NOT NULL,
    "reason" TEXT NOT NULL,
    "evidence" TEXT NOT NULL,
    "timestamp" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_DismissedCase" ("createdAt", "evidence", "id", "opName", "opRole", "reason", "userId", "userName") SELECT "createdAt", "evidence", "id", "opName", "opRole", "reason", "userId", "userName" FROM "DismissedCase";
DROP TABLE "DismissedCase";
ALTER TABLE "new_DismissedCase" RENAME TO "DismissedCase";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
