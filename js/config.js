/* =========================================================
   FINQUBE SERVICES — SITE SETTINGS
   This is the only file you need to edit for day-to-day changes.
   Save the file, upload it to GitHub, and the site updates.
   ========================================================= */

window.FINQUBE = {

  /* ---------- Contact details ---------- */
  phone: "+91 93849 24523",
  whatsapp: "919384924523",            // country code + number, no spaces or +
  email: "info@finqubeservices.com",
  city: "Bengaluru, Karnataka",
  address: "",                          // optional full office address; leave "" to show city only
  hours: "Mon – Sat, 10:00 am – 7:00 pm IST",

  /* ---------- Social links ----------
     Leave a link as "" and its icon is hidden automatically. */
  social: {
    instagram: "https://www.instagram.com/finqube_services/",
    facebook: "",
    linkedin: "",
    youtube: "",
    twitter: ""
  },

  /* ---------- WhatsApp chat topics ----------
     Shown when a visitor taps "Chat on WhatsApp". Each topic opens WhatsApp
     with the message on the right already typed in. Edit freely. */
  whatsappTopics: [
    ["GST registration or returns", "Hello Finqube Services, I need help with GST registration / GST returns."],
    ["Income tax return (ITR)", "Hello Finqube Services, I would like to file my income tax return."],
    ["TDS returns", "Hello Finqube Services, I need help with TDS payments / TDS returns."],
    ["Accounting, bookkeeping & MIS", "Hello Finqube Services, I am looking for accounting and bookkeeping support for my business."],
    ["Start a company or LLP", "Hello Finqube Services, I want to register a company / LLP. Please guide me."],
    ["I received a tax notice", "Hello Finqube Services, I have received a tax notice and need help with it."],
    ["Something else", "Hello Finqube Services, I would like to know more about your services."]
  ],

  /* ---------- Enquiry form ----------
     Get a free key at https://web3forms.com using info@finqubeservices.com
     and paste it below. Until then, the form hands the enquiry to WhatsApp. */
  web3formsKey: "585a680c-2a4e-4981-9cea-c58e6b4724de",

  /* ---------- Global services ----------
     globalLive: false keeps all global pages OFF the site (menu, footer and home page).
     The pages are built and ready; change to true on launch day.
     status: "soon" shows a "Launching soon" tag; change to "live" when you start.
     To add a country: add an entry here, then copy usa.html to <slug>.html
     and change data-country="usa" to the new slug. That's it. */
  globalLive: false,

  countries: [
    {
      slug: "usa",
      code: "US",
      name: "United States",
      status: "soon",
      tagline: "Bookkeeping, payroll records and tax-ready books for US small businesses and CPA firms.",
      tools: ["QuickBooks Online", "Xero", "Gusto"],
      services: [
        ["Bookkeeping & reconciliations", "Monthly bank, card and merchant reconciliations with a clean general ledger every month."],
        ["Month-end close & MIS", "P&L, balance sheet, cash flow and KPI packs delivered within a fixed number of days after month-end."],
        ["Tax-ready workpapers", "Organised year-end files and schedules for your CPA to prepare Form 1120, 1120-S, 1065 or Schedule C."],
        ["Sales tax tracking", "State-wise sales tax reports from your sales data so filings are on time."],
        ["CPA firm back office", "White-label accounting support for US CPA and EA practices during tax season and year-round."]
      ]
    },
    {
      slug: "uk",
      code: "UK",
      name: "UK & Europe",
      status: "soon",
      tagline: "Making Tax Digital ready bookkeeping, VAT workings and management accounts.",
      tools: ["Xero", "QuickBooks", "Sage", "FreeAgent"],
      services: [
        ["Bookkeeping in MTD software", "Day-to-day bookkeeping in Making Tax Digital compatible software."],
        ["VAT return workings", "Quarterly VAT workings and reconciliations, ready for review and submission."],
        ["Management accounts", "Monthly or quarterly management accounts with commentary on variances."],
        ["Year-end packs", "Trial balance and supporting schedules for your accountant's year-end accounts."],
        ["Accounting firm support", "Outsourced preparation work for UK and European accounting practices."]
      ]
    },
    {
      slug: "uae",
      code: "AE",
      name: "UAE & GCC",
      status: "soon",
      tagline: "Books, VAT and Corporate Tax readiness for businesses in the UAE and wider Gulf.",
      tools: ["Zoho Books", "Tally", "QuickBooks", "Xero"],
      services: [
        ["Bookkeeping & accounts", "Monthly bookkeeping and IFRS-based financial statements."],
        ["VAT workings (5%)", "Return workings, input tax reconciliations and records kept ready for FTA review."],
        ["Corporate Tax readiness", "Accounts and schedules prepared for UAE Corporate Tax (9% above AED 375,000 taxable income)."],
        ["MIS & cash flow", "Monthly MIS, receivables ageing and cash flow forecasts for owners and lenders."],
        ["Free zone compliance support", "Records and reports in the format your free zone authority and auditors ask for."]
      ]
    },
    {
      slug: "australia",
      code: "AU",
      name: "Australia",
      status: "soon",
      tagline: "BAS-ready bookkeeping and management reporting for Australian small businesses.",
      tools: ["Xero", "MYOB", "QuickBooks"],
      services: [
        ["Bookkeeping & reconciliations", "Bank feeds coded and reconciled in Xero or MYOB every week or month."],
        ["BAS & GST workings", "GST (10%) and PAYG workings prepared for your BAS agent or accountant to lodge."],
        ["Payroll & super records", "Payroll processing records and superannuation reports kept up to date."],
        ["Management reports", "Monthly P&L, balance sheet and cash flow with plain-English commentary."],
        ["Accounting firm support", "Back-office preparation for Australian accounting and bookkeeping practices."]
      ]
    }
  ],

  /* ---------- Visitor statistics ----------
     Paste the token from Cloudflare Web Analytics here (see setup steps). */
  analyticsToken: "",

  /* ---------- Updates ----------
     Newest first. Two kinds:
     Video:  { title: "GST registration: documents you need", date: "2026-11-01", youtube: "VIDEO_ID" },
     Note:   { title: "New TDS form numbers from April 2026", date: "2026-11-05", summary: "One or two lines.", link: "" },
     VIDEO_ID is the part after watch?v= or youtu.be/ in the YouTube link. */
  updates: [
  ],

  /* ---------- Client reviews ----------
     Reviews submitted on the website come to your email first.
     Only reviews you add here appear on the website. Newest first.
     Example:
     { name: "Ravi K.", place: "Kakinada", service: "GST", rating: 5, text: "Their review text exactly as submitted." }, */
  reviews: [
  ]
};
