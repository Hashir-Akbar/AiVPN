"use client";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-theme-dark text-white rounded-lg shadow-lg" >
      <h1 className="text-4xl font-bold mb-6 text-primary">Privacy Policy for AI-VPN Chrome Extension</h1>
      <p className="text-sm text-gray-400">Effective Date: February 14, 2025</p>
      <p>
        <strong>Website:</strong>{" "}
        <a href="https://ai-vpn.com" className="text-blue-400 hover:underline">
          https://ai-vpn.com
        </a>
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-secondary">1. Introduction</h2>
        <p className="text-gray-300">
          This Privacy Policy outlines how the AI-VPN Chrome Extension ("the Extension") collects, uses, and protects
          user data. We comply with Chrome Web Store policies, including transparency, security, and ethical data
          handling requirements. By installing the Extension, you consent to the practices described below.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-secondary">2. Data We Collect</h2>
        <p className="text-gray-300">The AI-VPN Extension is designed to prioritize user privacy. We collect minimal data necessary for functionality:</p>
        <ul className="list-disc ml-6 text-gray-400">
          <li>
            <strong>Device and Connection Information:</strong>
            <ul className="list-disc ml-6">
              <li>IP address (masked and anonymized).</li>
              <li>Browser type, version, and operating system.</li>
              <li>Connection timestamps and server location (to optimize VPN performance).</li>
            </ul>
          </li>
          <li>
            <strong>Usage Data:</strong>
            <ul className="list-disc ml-6">
              <li>Aggregated metrics (e.g., connection success rates, bandwidth usage).</li>
              <li>No logs of browsing activity, visited websites, or DNS queries are retained.</li>
            </ul>
          </li>
        </ul>
        <p className="mt-4 font-semibold text-gray-300">We Do Not Collect:</p>
        <ul className="list-disc ml-6 text-gray-400">
          <li>Personally Identifiable Information (PII) such as names, emails, or payment details.</li>
          <li>Financial data, authentication credentials, or health information.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-secondary">3. How We Use Data</h2>
        <ul className="list-disc ml-6 text-gray-400">
          <li><strong>Provide VPN Services:</strong> Encrypt traffic, route through secure servers, and mask IP addresses.</li>
          <li><strong>Improve Functionality:</strong> Analyze aggregated metrics to enhance speed and reliability.</li>
          <li><strong>Comply with Legal Obligations:</strong> Respond to lawful requests (e.g., court orders).</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-secondary">4. Data Sharing and Disclosure</h2>
        <ul className="list-disc ml-6 text-gray-400">
          <li><strong>No Third-Party Sales:</strong> We do not sell, trade, or rent user data.</li>
          <li><strong>Service Providers:</strong> Data may be shared with trusted infrastructure partners under strict confidentiality agreements.</li>
          <li><strong>Legal Compliance:</strong> Disclosures occur only if required by law.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-secondary">5. Security Measures</h2>
        <ul className="list-disc ml-6 text-gray-400">
          <li><strong>Encryption:</strong> All transmissions use HTTPS and AES-256 encryption.</li>
          <li><strong>No-Logs Policy:</strong> Browsing activity is never stored or monitored.</li>
          <li><strong>Permissions:</strong> The Extension requests only the minimum permissions required.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-secondary">6. User Rights</h2>
        <ul className="list-disc ml-6 text-gray-400">
          <li><strong>Access and Deletion:</strong> Users may request data access or deletion via <a href="mailto:support@ai-vpn.com" className="text-blue-400 hover:underline">support@ai-vpn.com</a>.</li>
          <li><strong>Opt-Out:</strong> Disable the Extension at any time through Chrome’s settings.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-secondary">7. Compliance with Chrome Web Store Policies</h2>
        <p className="text-gray-300">We adhere to Chrome Web Store transparency and security requirements.</p>
        <ul className="list-disc ml-6 space-y-2 text-gray-300">
          <li>
            <strong >Transparency:</strong>
            This policy is linked in the Chrome Web Store Developer Dashboard.
          </li>
          <li>
            <span className="text-gray-300 font-bold">Prominent Disclosure:</span>
            The Extension’s core functionality (IP masking and encryption) is clearly described in the store listing. No hidden data collection occurs.
          </li>
          <li>
            <span className="text-gray-300 font-bold">Updates:</span>
            Policy changes will be posted on <a href="https://ai-vpn.com/policy" className="text-blue-400 hover:underline">ai-vpn.com/policy</a> with a revised effective date.
          </li>
        </ul>
      </section>


      <section className="mt-8">
        <h2 className="text-2xl font-semibold text-secondary">8. Contact Information</h2>
        <p className="text-gray-300 font-bold">For questions or concerns, contact:</p>
        <p className="text-gray-300">
          <span className="font-bold">
          Email:

          </span>
           <a href="mailto:support@ai-vpn.com" className="text-blue-400 hover:underline">support@ai-vpn.com</a>
        </p>
        <p className="text-gray-300">
        <span className="font-bold">
           Address: 
          </span> 
          AI-VPN LLC, Privacy Team, 123 Security Lane, Datahaven, CA 94016
        </p>
      </section>


      <section className="mt-8  ">
        <h2 className="text-2xl font-semibold text-secondary">9.Additional Compliance Notes</h2>
        <ul className="list-disc ml-6 space-y-2 text-gray-300">
          <li>
            <span className=" text-gray-300">Chrome’s Limited Use Requirements:</span>
            Data is used exclusively for VPN services and not for advertising, credit scoring, or unrelated monetization.
          </li>
          <li>
            <span className=" text-gray-300">Ethical AI Use:</span>
            While this extension does not employ AI, our infrastructure adheres to AI governance frameworks for future-proofing.
          </li>
          <li>
            <span className=" text-gray-300">Policy Updates:</span>
            Reviewed biannually to align with evolving regulations and Chrome Web Store guidelines.
          </li>
        </ul>
      </section>

      <br />


      <p className="text-gray-300">
        This policy ensures compliance with Chrome Web Store Program Policies  and global privacy standards (e.g., GDPR).
        Thanks!
      </p>
    </div>
  );
};

export default PrivacyPolicy;
