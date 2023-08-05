-- CreateTable
CREATE TABLE "Game" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "release_date" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "UserGameList" (
    "userId" INTEGER NOT NULL,
    "gameId" INTEGER NOT NULL,

    PRIMARY KEY ("userId", "gameId"),
    CONSTRAINT "UserGameList_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserGameList_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
