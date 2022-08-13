-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL,
    "salt" TEXT NOT NULL,
    "resetToken" TEXT,
    "resetTokenExpiresAt" DATETIME,
    "roles" TEXT NOT NULL DEFAULT '',
    "isActive" BOOLEAN NOT NULL DEFAULT false,
    "setUp" BOOLEAN NOT NULL DEFAULT false,
    "BugPoints" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_User" ("email", "hashedPassword", "id", "isActive", "resetToken", "resetTokenExpiresAt", "roles", "salt", "setUp") SELECT "email", "hashedPassword", "id", "isActive", "resetToken", "resetTokenExpiresAt", "roles", "salt", "setUp" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
