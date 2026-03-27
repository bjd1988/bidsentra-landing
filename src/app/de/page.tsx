import { LandingPage } from "@/components/page/LandingPage";
import { getMetadata } from "@/lib/localized-site";

export const metadata = getMetadata("de", "home");

export default function GermanHomePage() {
  return <LandingPage locale="de" />;
}
