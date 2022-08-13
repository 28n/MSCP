-- CreateTable
CREATE TABLE "DismissedCaseComment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "opName" TEXT NOT NULL,
    "opRole" TEXT NOT NULL,
    "content" TEXT NOT NULL
);
