-- CreateTable
CREATE TABLE "Customer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "mail" TEXT,
    "post_code" TEXT,
    "address" TEXT,
    "age" INTEGER DEFAULT 0,
    "use_count" INTEGER DEFAULT 0,
    "attention_flag" INTEGER NOT NULL
);
