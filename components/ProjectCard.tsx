import TechTag from "./TechTag";

type ProjectProps = {
  title: string;
  company?: string;
  intro: string;
  highlights: string[];
  img?: string;
};

export default function ProjectCard({ title, company, intro, highlights, img }: ProjectProps) {
  return (
    <div className="card hover:shadow-2xl transition-shadow">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold">{title}{company ? ` — ${company}` : ""}</h3>
          <p className="p-muted mt-2">{intro}</p>
          <ul className="mt-4 space-y-2 list-disc ml-5">
            {highlights.map((h, i) => <li key={i} className="p-muted">{h}</li>)}
          </ul>
        </div>
        <div className="md:col-span-1">
          <div className="aspect-video rounded-xl overflow-hidden border border-white/10 bg-black/20 flex items-center justify-center">
            {img ? <img src={img} alt={title} className="w-full h-full object-cover"/> : <span className="text-white/40 text-sm">图片占位（替换 /public/images/*.png）</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
