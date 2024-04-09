import prisma from "@/app/libs/prismadb";

interface Category {
  id: string;
  name: string;
  courses: CourseCategory[];
}

export interface CoursesParams {
  id: string;
  title: string;
  description?: string;
  categories: CourseCategory[];
}

interface CourseCategory {
  id: string;
  courseId: string;
  categoryId: string;
  course: CoursesParams;
  category: Category;
}

export default async function getListings(params: CoursesParams) {
  try {
    const { id, title, description, categories } = params;

    let query: any = {};

    //ANTONIO
    // if (userId) {
    //   query.userId = userId;
    // }

    // if (category) {
    //   query.category = category;
    // }

    // if (roomCount) {
    //   query.roomCount = {
    //     gte: +roomCount,
    //   };
    // }

    // if (guestCount) {
    //   query.guestCount = {
    //     gte: +guestCount,
    //   };
    // }

    // if (bathroomCount) {
    //   query.bathroomCount = {
    //     gte: +bathroomCount,
    //   };
    // }

    // if (locationValue) {
    //   query.locationValue = locationValue;
    // }

    // if (startDate && endDate) {
    //   query.NOT = {
    //     reservations: {
    //       some: {
    //         OR: [
    //           {
    //             endDate: { gte: startDate },
    //             startDate: { lte: startDate },
    //           },
    //           {
    //             startDate: { lte: endDate },
    //             endDate: { gte: endDate },
    //           },
    //         ],
    //       },
    //     },
    //   };
    // }

    const courses = await prisma.course.findMany();

    const safeCourses = courses.map((course) => ({
      ...course,
      // createdAt: listing.createdAt.toISOString(),
    }));

    return safeCourses;
  } catch (error: any) {
    throw new Error(error);
  }
}
