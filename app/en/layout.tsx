import { RootDocument } from "@/components/RootDocument";

export default function EnLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
