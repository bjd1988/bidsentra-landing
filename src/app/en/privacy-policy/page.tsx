import { PrivacyPolicyPage } from "@/components/page/PrivacyPolicyPage";
import { getMetadata } from "@/lib/localized-site";

export const metadata = getMetadata("en", "privacy");

export default function EnglishPrivacyPage() {
  return <PrivacyPolicyPage locale="en" />;
}
