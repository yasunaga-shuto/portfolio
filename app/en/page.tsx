import { HomePage } from "@/components/HomePage";
import { buildMetadata } from "@/lib/metadata";

export const revalidate = 86400;
export const metadata = buildMetadata("en");

export default function Page() {
  return <HomePage locale="en" />;
}
