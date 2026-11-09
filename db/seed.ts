import { PrismaClient } from "@/lib/generated/prisma/client";
import "dotenv/config";
import sampleData from "./sample-data";
import { PrismaNeon } from "@prisma/adapter-neon";

async function main() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is missing. Check your .env file.");
  }
  const adapter = new PrismaNeon({ connectionString });
  const prisma = new PrismaClient({ adapter });
  try {
    // Delete Existing sample products
    await prisma.product.deleteMany();
    // Insert sample products
    await prisma.product.createMany({ data: sampleData.products });

    console.log("Database seeded successfully");
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error("Seeding failed", error);
  process.exitCode = 1;
});
