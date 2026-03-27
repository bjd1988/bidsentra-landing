import { LandingPage } from "@/components/page/LandingPage";
import { getMetadata } from "@/lib/localized-site";

export const metadata = getMetadata("pl", "home");

export default function Home() {
  return <LandingPage locale="pl" />;
}
