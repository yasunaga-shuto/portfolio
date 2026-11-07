import { RootDocument } from "@/components/RootDocument";

export default function JaLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument lang="ja">{children}</RootDocument>;
}
