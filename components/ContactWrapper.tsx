"use client";

import RecaptchaProvider from "@/components/RecaptchaProvider";
import Contact from "@/components/Contact";

export default function ContactWrapper() {
  return (
    <RecaptchaProvider>
      <Contact />
    </RecaptchaProvider>
  );
}
