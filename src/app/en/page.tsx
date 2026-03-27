import { LandingPage } from "@/components/page/LandingPage";
import { getMetadata } from "@/lib/localized-site";

export const metadata = getMetadata("en", "home");

export default function EnglishHomePage() {
  return <LandingPage locale="en" />;
}
