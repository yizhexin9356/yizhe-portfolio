import { clsx } from "clsx";

export default function TechTag({ children }: { children: React.ReactNode }) {
  return <span className="badge mr-2 mb-2">{children}</span>;
}
