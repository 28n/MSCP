-- CreateTable
CREATE TABLE "TraineeReview" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userName" TEXT NOT NULL,
    "overallRating" INTEGER NOT NULL,
    "rulesRating" INTEGER NOT NULL,
    "communicationRating" INTEGER NOT NULL,
    "commentRating" INTEGER NOT NULL,
    "review" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "creator" TEXT NOT NULL
);
