import { PrivacyPolicyPage } from "@/components/page/PrivacyPolicyPage";
import { getMetadata } from "@/lib/localized-site";

export const metadata = getMetadata("de", "privacy");

export default function GermanPrivacyPage() {
  return <PrivacyPolicyPage locale="de" />;
}
