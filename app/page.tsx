import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";
import CourseCard from "@/app/components/courses/CourseCard";
import EmptyState from "@/app/components/EmptyState";

import getCourses, { CoursesParams } from "@/app/actions/getCourses";
import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly";

interface HomeProps {
  searchParams: CoursesParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const courses = await getCourses(searchParams);

  //ANTONIO
  // const currentUser = await getCurrentUser();

  console.log(courses, searchParams, "couses and searchParams");

  if (courses.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div
          className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
        >
          {courses.map((course: any) => {
            console.log(course, "course");
            return (
              // <ListingCard
              //   currentUser={currentUser}
              //   key={listing.id}
              //   data={listing}
              // />
              <CourseCard key={course.id} title={course.title} />
              // <div key={course.id}>{course.title}</div>
            );
          })}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Home;
