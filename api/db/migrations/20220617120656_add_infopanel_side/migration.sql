-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_InfoPanel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "changedBy" TEXT NOT NULL,
    "side" TEXT NOT NULL DEFAULT 'hidden'
);
INSERT INTO "new_InfoPanel" ("changedBy", "content", "createdAt", "createdBy", "id", "name") SELECT "changedBy", "content", "createdAt", "createdBy", "id", "name" FROM "InfoPanel";
DROP TABLE "InfoPanel";
ALTER TABLE "new_InfoPanel" RENAME TO "InfoPanel";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
