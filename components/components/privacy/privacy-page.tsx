"use client";

import { AppContext } from "@/contexts/app-context-provider";
import React, { useContext, useEffect } from "react";
import Header from "../layout/header";
import Footer from "../layout/footer";

const PrivacySection = () => {
  return (
    <div className="mx-auto my-20 w-11/12 max-w-[1200px] sm:w-10/12">
      <h1 className="text-2xl font-bold">Invincible You Privacy Policy</h1>
      <h2 className="mt-6 text-xl font-semibold">Introduction</h2>
      <p className="mt-2">
        Invincible You is committed to protecting the privacy and security of
        your personal information. This Privacy Policy outlines how we collect,
        use, disclose, and safeguard the information you provide to us.
      </p>
      <h2 className="mt-6 text-xl font-semibold">Information We Collect</h2>
      <p className="mt-2">
        We may collect personal information from individuals, teams, and
        organizations who engage with our leadership and individual development
        services. This information may include:
      </p>
      <ul className="mt-2 list-inside list-disc">
        <li>
          Contact information: Name, email address, phone number, postal address
        </li>
        <li>Demographic information: Age, gender, occupation, industry</li>
        <li>Professional information: Job title, company name, team size</li>
        <li>Payment information: Credit card details, billing address</li>
        <li>
          Usage data: Information about your interaction with our website and
          services
        </li>
      </ul>
      <h2 className="mt-6 text-xl font-semibold">
        How We Use Your Information
      </h2>
      <p className="mt-2">
        We use your information for the following purposes:
      </p>
      <ul className="mt-2 list-inside list-disc">
        <li>
          To provide and improve our leadership and individual development
          services
        </li>
        <li>
          To communicate with you about our products, services, and promotions
        </li>
        <li>To process payments and manage your account</li>
        <li>To conduct research and analysis to enhance our offerings</li>
        <li>To comply with legal and regulatory requirements</li>
      </ul>
      <h2 className="mt-6 text-xl font-semibold">Information Sharing</h2>
      <p className="mt-2">We may share your personal information with:</p>
      <ul className="mt-2 list-inside list-disc">
        <li>
          Third-party service providers: We may engage trusted third-party
          service providers to assist us in operating our business and providing
          services to you.
        </li>
        <li>
          Legal requirements: We may disclose your information to comply with
          legal obligations, court orders, or government requests.
        </li>
      </ul>
      <h2 className="mt-6 text-xl font-semibold">Data Security</h2>
      <p className="mt-2">
        We implement reasonable security measures to protect your personal
        information from unauthorized access, disclosure, alteration, or
        destruction. However, no method of transmission or storage is completely
        secure, and we cannot guarantee absolute security.
      </p>
      <h2 className="mt-6 text-xl font-semibold">Changes to This Policy</h2>
      <p className="mt-2">
        We may update this Privacy Policy from time to time. We will notify you
        of any material changes by posting the new policy on our website.
      </p>
      <h2 className="mt-6 text-xl font-semibold">Contact Us</h2>
      <p className="mt-2">
        If you have any questions or concerns about this Privacy Policy, please
        contact us at{" "}
        <a href="mailto:askme@invincibleyou.world" className="underline">
          askme@invincibleyou.world
        </a>
        .
      </p>
    </div>
  );
};

function PrivacyPage() {
  const { setActiveRoute } = useContext(AppContext);
  useEffect(() => {
    setActiveRoute({ id: "/privacy", name: "Privacy" });
  }, [setActiveRoute]);
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <Header />
      <PrivacySection />
      <Footer />
    </div>
  );
}

export default PrivacyPage;
