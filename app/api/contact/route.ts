import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend safely with your API environment key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, serviceType, message } = await request.json();

    // Safety validation fallback checks
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Required fields are missing. Please provide name, email, and message.' },
        { status: 400 }
      );
    }

    // Fire the email broadcast layout via Resend
    const data = await resend.emails.send({
      from: 'Magla Systems Portal <onboarding@resend.dev>', 
      to: ['mahongaollie@gmail.com'], // <-- Successfully updated target destination mailbox
      subject: `[Project Intake]: ${serviceType} - ${name}`,
      html: `
        <div style="font-family: sans-serif; background-color: #020617; color: #f8fafc; padding: 32px; border-radius: 4px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f59e0b; border-bottom: 1px solid #1e293b; padding-bottom: 12px; text-transform: uppercase;">
            Magla Engineering Intake Log
          </h2>
          <p style="font-size: 14px; color: #94a3b8;">A new architectural request has been successfully captured:</p>
          
          <div style="margin: 24px 0; font-size: 14px; background-color: #0f172a; padding: 16px; border: 1px solid #1e293b; border-radius: 4px;">
            <p style="margin: 8px 0;"><strong>Corporate/Client Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Email Terminal Address:</strong> ${email}</p>
            <p style="margin: 8px 0;"><strong>Direct Contact Line:</strong> ${phone || 'Not specified'}</p>
            <p style="margin: 8px 0;"><strong>Core Mandate Category:</strong> <span style="color: #f59e0b; font-weight: bold;">${serviceType}</span></p>
          </div>

          <div style="background-color: #090d16; padding: 16px; border-left: 3px solid #f59e0b; border-radius: 2px;">
            <p style="margin: 0 0 8px 0; color: #64748b; font-size: 11px; font-family: monospace; text-transform: uppercase;">
              Project Manifest Brief:
            </p>
            <p style="margin: 0; line-height: 1.6; color: #e2e8f0; font-size: 14px;">${message}</p>
          </div>
          
          <p style="font-size: 10px; color: #475569; margin-top: 32px; border-t: 1px solid #1e293b; padding-top: 12px; font-family: monospace;">
            Automated Server Broadcaster System // Magla Architecture Suite
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'An unhandled server exception crashed the transmission.' },
      { status: 500 }
    );
  }
}