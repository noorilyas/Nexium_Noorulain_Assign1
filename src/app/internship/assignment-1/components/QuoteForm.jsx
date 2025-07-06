"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { quotesData } from "@/app/internship/assignment-1/data/quotes";

export default function QuoteForm() {
  const router = useRouter();

  const handleSelect = (topic) => {
    router.push(`/internship/assignment-1/quotes/${topic}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-zinc-800 p-6">
      <h1 className="text-4xl font-bold text-white text-center mb-10 drop-shadow-md">
        ✨ Pick a Topic to View Quotes ✨
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {Object.entries(quotesData).map(([topic, data]) => (
          <Card
            key={topic}
            className="cursor-pointer shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300 border-none bg-zinc-950 text-white rounded-2xl overflow-hidden"
            onClick={() => handleSelect(topic)}
          >
            <div className="relative w-full h-40">
              <Image
                src={data.image}
                alt={`${topic} image`}
                fill
                className="object-cover rounded-t-2xl"
              />
            </div>
          
          </Card>
        ))}
      </div>
    </div>
  );
}
