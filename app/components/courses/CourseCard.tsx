"use client";
import { useMemo } from "react";

const CourseCard = ({ title }: any) => {
  console.log(title, "title");
  const titleMemo: any = useMemo(() => {
    return title;
  }, [title]);

  return <div>{titleMemo}</div>;
};

export default CourseCard;
