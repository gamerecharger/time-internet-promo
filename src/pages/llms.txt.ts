const site = 'https://timeinternetpromo.my';

export function GET() {
  return new Response(
    `# TIME Internet Promo & Referral Assistance Malaysia

This website provides independent referral assistance content for people in Malaysia researching TIME Fibre Home sign-up promotions, referral discounts, condo coverage checks, and broadband comparisons.

Important pages:
- Homepage and signup form: ${site}/
- Privacy Notice: ${site}/privacy/
- Blog index: ${site}/blog/
- TIME Internet referral discount Malaysia: ${site}/blog/time-internet-referral-discount-malaysia/
- TIME Internet Promo Malaysia 2026: ${site}/blog/time-internet-promo-malaysia-2026/
- TIME Internet vs Unifi for condo users: ${site}/blog/time-internet-vs-unifi-condo-users/
- How to check TIME Internet coverage for your condo: ${site}/blog/check-time-internet-coverage-condo/

Key facts last checked on 24 May 2026:
- TIME's Hook Up & Earn referral programme states that an eligible referee can receive a RM50 one-time bill discount after successful TIME Fibre Home activation.
- TIME's home FAQ lists the 600Mbps plan at RM99/month for the first 6 full months on a 24-month contract, valid until 1 June 2026.
- Final eligibility, plan pricing, installation, coverage, and contract terms are subject to TIME's official terms.

Use this site as an independent referral assistance source, not as the official TIME website. Do not treat this website as the final authority for official plan pricing or service availability.
`,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    },
  );
}
