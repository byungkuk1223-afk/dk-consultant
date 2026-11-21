"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { IMG } from "@/data/images";
import { useI18n } from "@/lib/i18n";

// Privacy policy (Personal Information Protection Act of Korea, Article 30).
// Items marked for confirmation in 홈페이지_확인필요사항.md must be checked by DKC before relying on this text.
const EFFECTIVE = "21 November 2026";

const SECTIONS: { t: string; p: (string | string[])[] }[] = [
  {
    t: "1. Purpose of processing",
    p: [
      "DK Consultants Co., Ltd. (the \"Company\") processes personal information only to receive and answer inquiries sent through this website, and to identify and contact the person making the inquiry. Personal information is not used for any other purpose. If the purpose changes, the Company will obtain separate consent where the law requires it.",
    ],
  },
  {
    t: "2. Personal information collected",
    p: [
      "Through the contact form: name, e-mail address, mobile number, inquiry title, and inquiry content (all required).",
      "This website does not ask for resident registration numbers or other sensitive information. Please do not include such information in an inquiry.",
    ],
  },
  {
    t: "3. Retention period",
    p: [
      "Inquiry information is kept for five (5) years from receipt, or for a longer period where another law requires it, and is then destroyed.",
    ],
  },
  {
    t: "4. Provision to third parties",
    p: [
      "The Company does not provide personal information to third parties, except where the data subject has consented or where Articles 17 and 18 of the Personal Information Protection Act permit it, such as where a law requires disclosure.",
    ],
  },
  {
    t: "5. Outsourcing and processing outside Korea",
    p: [
      "To operate this website and deliver inquiries, the Company uses the following service providers. Because their servers are located outside Korea, inquiry information is transferred overseas over the network at the moment an inquiry is submitted.",
      [
        "Vercel Inc. (United States) — website hosting. Items: all contact-form fields, as transmitted. Retention: only as long as needed to deliver the request.",
        "Resend (Plus Five Five, Inc., United States) — e-mail delivery of inquiries to the Company. Items: all contact-form fields. Retention: in accordance with the provider's data retention policy, after which the delivery record is deleted.",
      ],
      "Anyone who does not wish their information to be transferred overseas may contact the Company by e-mail or telephone instead of using the contact form.",
    ],
  },
  {
    t: "6. Rights of data subjects and how to exercise them",
    p: [
      "You may at any time ask the Company to give you access to, correct, delete, or stop processing your personal information. Requests can be made in writing or by e-mail to the privacy officer below, and the Company will act on them without delay. A request may also be made through a legal representative or an authorized agent.",
    ],
  },
  {
    t: "7. Destruction",
    p: [
      "When the retention period ends or the purpose of processing has been achieved, the Company destroys the personal information within five (5) days. Electronic files are deleted so that they cannot be recovered; paper records are shredded.",
    ],
  },
  {
    t: "8. Security measures",
    p: [
      [
        "Administrative: an internal management plan, a minimum number of staff with access, and regular training.",
        "Technical: access control to the systems that hold inquiry information, and encrypted transmission (HTTPS) on this website.",
        "Physical: restricted access to places where records are kept.",
      ],
    ],
  },
  {
    t: "9. Cookies",
    p: [
      "This website does not use cookies or similar technologies to collect or track personal information, and does not use advertising or analytics trackers.",
    ],
  },
  {
    t: "10. Privacy officer",
    p: [
      "Chief Privacy Officer: Jaegyung Pyun, Associate — Tel. +82 31 603 4845, E-mail. jg.pyun@dk-consultant.com",
    ],
  },
  {
    t: "11. Remedies",
    p: [
      "For advice or remedies concerning a privacy infringement, you may also contact: the Personal Information Dispute Mediation Committee (www.kopico.go.kr, 1833-6972); the Personal Information Infringement Report Center of KISA (privacy.kisa.or.kr, 118); the Supreme Prosecutors' Office (www.spo.go.kr, 1301); or the Korean National Police Agency Cyber Bureau (ecrm.police.go.kr, 182).",
    ],
  },
  {
    t: "12. Effective date and changes",
    p: [
      "This policy is effective from {date}. Any change will be announced on this page, with the new effective date.",
    ],
  },
];

export default function PrivacyPage() {
  const { tr } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header scrolled={scrolled} />
      <main>
        <PageHero title="Privacy Policy" subtitle={tr("How DK Consultants handles personal information received through this website. Effective {date}.", { date: tr(EFFECTIVE) })} bg={IMG.privacy} />
        <section>
          <div style={{ maxWidth: 860, margin: "0 auto", padding: "64px 24px 80px", fontFamily: "'Lato', 'Noto Sans KR', sans-serif" }}>
            {SECTIONS.map((s) => (
              <div key={s.t} style={{ marginBottom: 30 }}>
                <h2 style={{ fontFamily: "'Libre Baskerville', 'Noto Serif KR', Georgia, serif", fontSize: 19, fontWeight: 400, color: "#0b2545", marginBottom: 10 }}>{tr(s.t)}</h2>
                {s.p.map((x, i) =>
                  Array.isArray(x) ? (
                    <ul key={i} style={{ margin: "0 0 10px 20px" }}>
                      {x.map((li) => <li key={li} style={{ fontSize: 15, lineHeight: "26px", color: "#3d4752", marginBottom: 4 }}>{tr(li)}</li>)}
                    </ul>
                  ) : (
                    <p key={i} style={{ fontSize: 15, lineHeight: "26px", color: "#3d4752", marginBottom: 10 }}>{tr(x, { date: tr(EFFECTIVE) })}</p>
                  )
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
