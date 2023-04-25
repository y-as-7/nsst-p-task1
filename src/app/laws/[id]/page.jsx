"use client";
import getLaws from "@/app/libs/laws";
export default function Law({ params }) {
  const lawId = params.id;
  const law = getLaws(lawId);
  return (
    <article className="mt-28">
      <div className="w-full text-center">
        <h1 className="capitalize text-4xl">
          <span className="capitalize text-red-700">l</span>A
          <span className="text-red-700 capitalize">W</span>S
        </h1>
      </div>
      {law.map((law) => (
        <div className="mt-10 w-full" key={law.id}>
          <div className="w-[90%] md:w-[80%] mx-auto ">
          <h1 className="text-red-700 text-3xl font-semibold">{law.title}</h1>
          <article className="mt-1 text-gray-800">{law.article1}</article>
          <h2 className="mt-4 text-xl font-semibold">{law.article2.title}</h2>
          <article>{law.article2.para}</article>
          </div>
        </div>
      ))}
    </article>
  );
}
