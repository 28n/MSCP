-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pricelist" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdBy" TEXT NOT NULL,
    "createdByRole" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_Pricelist" ("content", "createdAt", "createdBy", "createdByRole", "id", "title") SELECT "content", "createdAt", "createdBy", "createdByRole", "id", "title" FROM "Pricelist";
DROP TABLE "Pricelist";
ALTER TABLE "new_Pricelist" RENAME TO "Pricelist";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
