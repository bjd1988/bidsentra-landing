import { PrivacyPolicyPage } from "@/components/page/PrivacyPolicyPage";
import { getMetadata } from "@/lib/localized-site";

export const metadata = getMetadata("pl", "privacy");

export default function PolicyPage() {
  return <PrivacyPolicyPage locale="pl" />;
}
