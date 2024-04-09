const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Seed Categories
  const categoryProgramming = await prisma.category.create({
    data: {
      name: "Programming",
    },
  });

  const categoryDesign = await prisma.category.create({
    data: {
      name: "Design",
    },
  });

  // Seed Courses
  const coursePython = await prisma.course.create({
    data: {
      title: "Introduction to Python",
      description: "Learn the basics of Python.",
    },
  });

  const courseDesignBasics = await prisma.course.create({
    data: {
      title: "Design Basics",
      description: "Learn the fundamentals of design.",
    },
  });

  // Link Courses to Categories
  await prisma.courseCategory.create({
    data: {
      courseId: coursePython.id,
      categoryId: categoryProgramming.id,
    },
  });

  await prisma.courseCategory.create({
    data: {
      courseId: courseDesignBasics.id,
      categoryId: categoryDesign.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
