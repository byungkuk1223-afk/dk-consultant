import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, mobile, title, inquiry } = await req.json();

  if (!name || !email || !mobile || !title || !inquiry) {
    return NextResponse.json({ error: "필수 항목을 모두 입력해주세요." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "DK Consultants Contact <onboarding@resend.dev>",
    to: ["dkc_info@dk-consultant.com"],
    replyTo: email,
    subject: `[문의] ${title}`,
    html: `
      <table style="font-family: Arial, sans-serif; font-size: 14px; color: #333; width: 100%; max-width: 600px;">
        <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>이름</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td></tr>
        <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>이메일</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${email}</td></tr>
        <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>연락처</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${mobile}</td></tr>
        <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>제목</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${title}</td></tr>
        <tr><td style="padding: 8px 0;" valign="top"><strong>내용</strong></td><td style="padding: 8px 0; line-height: 1.7;">${inquiry.replace(/\n/g, "<br>")}</td></tr>
      </table>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "전송 실패. 다시 시도해주세요." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
