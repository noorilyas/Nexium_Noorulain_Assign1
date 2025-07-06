"use client";

import { useParams } from "next/navigation";
import { quotesData } from "@/app/internship/assignment-1/data/quotes";
import { Card, CardContent } from "@/components/ui/card";

export default function QuotePage() {
  const { topic } = useParams();
  const data = quotesData[topic];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-zinc-900">
        <h1 className="text-2xl">Topic not found!</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-zinc-800 to-slate-900 text-white">
      <h1 className="text-4xl font-bold text-center mb-10 capitalize">
        ✨ {topic} Quotes ✨
      </h1>
      <div className="max-w-3xl mx-auto space-y-6">
        {data.quotes.slice(0, 3).map((quote, index) => (
          <Card
            key={index}
            className="bg-zinc-950 text-white border border-zinc-700 shadow-md hover:shadow-lg transition rounded-xl"
          >
            <CardContent className="p-6 text-lg italic">{quote}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
