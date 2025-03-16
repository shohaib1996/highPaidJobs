import { Card } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  position?: string;
  company: string;
  salary: string;
  testimonial: string;
  url: string;
}

export function TestimonialCard({
  name,
  company,
  salary,
  testimonial,
  url,
}: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden bg-slate-800/50 border-white/10">
      {/* Video placeholder */}
      <div className="relative h-96 md:h-auto">
        <iframe
          src={url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full aspect-video rounded-lg"
        />
        {/* <button className="absolute inset-0 flex items-center justify-center group">
          <div className="rounded-full p-4 bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-colors">
            <Play className="w-6 h-6 text-white" fill="currentColor" />
          </div>
        </button> */}
      </div>

      <div className="p-6 space-y-4">
        {/* User info */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-medium">
            {name.split(" ")[0][0]}
          </div>
          <div>
            <h3 className="font-semibold text-white">{name}</h3>
            <p className="text-sm text-slate-400">
              Hired @ {company} – {salary}
            </p>
          </div>
        </div>

        {/* Testimonial */}
        <p className="text-slate-300 text-xl">{testimonial}</p>

        {/* Rating and Listen button */}
        <div className="flex items-center justify-between">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          {/* <Button
            variant="ghost"
            size="sm"
            className="text-slate-300 dark:hover:bg-foreground hover:text-white gap-2 dark:text-slate-900"
          >
            <Headphones className="w-4 h-4" />
            Listen
          </Button> */}
        </div>
      </div>
    </Card>
  );
}
