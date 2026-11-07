import { HomePage } from "@/components/HomePage";
import { buildMetadata } from "@/lib/metadata";

export const revalidate = 86400;
export const metadata = buildMetadata("ja");

export default function Page() {
  return <HomePage locale="ja" />;
}
