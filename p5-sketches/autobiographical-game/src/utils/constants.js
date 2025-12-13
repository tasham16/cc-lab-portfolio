// constants.js
// Shared global constants

const COLORS = {
  bg: "#F4C708",
  scene1_bg: "#F4C708",
  paper: "#EEEEEE",
  paperBorder: "#2C3E50",
  activeZone: "rgba(255, 215, 0, 0.2)",
  activeZoneBorder: "#FFD700",
  handColor: "#432818",
  text: "#000000",
  textLight: "#666666",
  fieldBg: "#FFFFFF",
  fieldFilled: "#E8F5E9",
  fieldFilledBorder: "#16a34a",
  fieldBorder: "#333333",
  fieldActive: "#3b82f6",
  successBorder: "#E8F5E9",
  dangerBorder: "#ef4444",
  successFill: "#d9f99d",
  dangerFill: "#fecaca",
};

const LAYOUT = {
  // Scene 1 (Form)
  paperWidth: 450,
  paperHeight: 500,
  headerHeight: 70,
  activeZoneTop: 75,
  activeZoneHeight: 330,
  handWidth: 50,
  handHeight: 100,

  // Shared
  fieldHeight: 35,
  checkboxSize: 20,
};

const GAME_CONFIG = {
  // Scrolling
  initialScrollSpeed: 0.8,
  maxScrollSpeed: 2.5,
  speedIncreaseInterval: 120, // Frames between speed increases
  speedIncreaseAmount: 0.1,

  // // Starting position
  // formStartY: 0, // Will be set to canvas height in setup

  // Timing
  processingDuration: 3000, // 3 seconds in milliseconds

  // Difficulty
  maxMissedFieldsForApproval: 2,
};

const visaFieldTiers = {
  normal: [
    // SECTION 1: PERSONAL INFORMATION
    {
      type: "text",
      label: "First Name:",
      required: true,
      filled: false,
      answer: "Boni",
    },
    {
      type: "text",
      label: "Last Name:",
      required: true,
      filled: false,
      answer: "Gogs",
    },
    {
      type: "text",
      label: "Date of Birth (DD/MM/YYYY):",
      required: true,
      filled: false,
      answer: "12/10/1998",
    },
    {
      type: "text",
      label: "Passport Number:",
      required: true,
      filled: false,
      answer: "A1234567",
    },

    // SECTION 2: PURPOSE OF TRAVEL
    { type: "checkbox", label: "Tourism", required: true, filled: false },
    { type: "checkbox", label: "Business", required: false, filled: false },
    { type: "checkbox", label: "Education", required: false, filled: false },
    { type: "checkbox", label: "Conference", required: false, filled: false },
    {
      type: "text",
      label: "Duration of Stay (days):",
      required: true,
      filled: false,
      answer: "14",
    },

    // SECTION 3: REQUIRED DOCUMENTS
    {
      type: "upload",
      label: "Passport Photo:",
      required: true,
      filled: false,
      answer: "passport_photo.jpg",
    },
    {
      type: "upload",
      label: "Bank Statement:",
      required: true,
      filled: false,
      answer: "bank_statement_3months.pdf",
    },
    {
      type: "upload",
      label: "Invitation Letter:",
      required: true,
      filled: false,
      answer: "invitation_on_company_letterhead.pdf",
    },

    // SECTION 4: ADDITIONAL INFORMATION
    {
      type: "textarea",
      label: "Explain your purpose of travel:",
      required: true,
      filled: false,
      answer: "To spend money, not make trouble. Souvenirs > overstays.",
    },

    // SECTION 5: DECLARATIONS
    {
      type: "checkbox",
      label: "All information is true",
      required: true,
      filled: false,
    },
    {
      type: "checkbox",
      label: "I will comply with visa conditions",
      required: true,
      filled: false,
    },
    { type: "checkbox", label: "☐", required: true, filled: false }, // sneaky small one
    {
      type: "text",
      label: "Emergency Contact:",
      required: true,
      filled: false,
      answer: "Mum (+254… always awake)",
    },
  ],

  loaded: [
    // PERSONAL/INTENT SIGNALS
    {
      type: "text",
      label: "Explain why you will return home:",
      required: true,
      filled: false,
      answer: "Because my mum’s ‘Where are you?’ texts don’t need visas.",
    },
    {
      type: "text",
      label: "List every country visited in the last 10 years:",
      required: true,
      filled: false,
      answer: "Transit A, Transit B, Layoverland, Group Chat.",
    },
    {
      type: "text",
      label: "Annual income (USD):",
      required: true,
      filled: false,
      answer: "Taxable and humble.",
    },
    {
      type: "checkbox",
      label: "I have no relatives abroad",
      required: false,
      filled: false,
    },
    {
      type: "checkbox",
      label: "I am not politically active",
      required: true,
      filled: false,
    },

    // REFERENCES & PROOFS
    {
      type: "text",
      label: "Provide contact details of a “respectable reference”:",
      required: true,
      filled: false,
      answer: "Headteacher (ret.), reachable via alumni WhatsApp.",
    },
    {
      type: "text",
      label: "Occupation (verified):",
      required: true,
      filled: false,
      answer: "Software engineer (I debug vibes for a living)",
    },
    {
      type: "checkbox",
      label: "My intentions are pure",
      required: true,
      filled: false,
    },
    {
      type: "text",
      label: "Describe your neighborhood in one word:",
      required: true,
      filled: false,
      answer: "‘Up-and-coming’ (per real estate blog)",
    },
    {
      type: "checkbox",
      label: "I understand this process is fair and unbiased",
      required: true,
      filled: false,
    },

    // DOCS—EXTRA
    {
      type: "upload",
      label: "Return Ticket (proof you’ll leave):",
      required: true,
      filled: false,
      answer: "round_trip_itinerary.pdf",
    },
    {
      type: "upload",
      label: "Accommodation Booking (non-refundable):",
      required: true,
      filled: false,
      answer: "hotel_confirmation_7digits.pdf",
    },
    {
      type: "textarea",
      label: "State how you afforded this trip:",
      required: true,
      filled: false,
      answer:
        "Savings, side gigs, and a generous auntie who believes in soft life.",
    },
  ],

  absurd: [
    // RISK & RESPECTABILITY
    {
      type: "text",
      label: "Rate your country’s economy (1–10):",
      required: true,
      filled: false,
      answer: "7 on payday, 3 after rent.",
    },
    {
      type: "checkbox",
      label: "I promise not to fall in love with citizens",
      required: true,
      filled: false,
    },
    {
      type: "checkbox",
      label: "I will not seek better opportunities",
      required: true,
      filled: false,
    },
    {
      type: "text",
      label: "Upload a selfie proving you are not a flight risk:",
      required: true,
      filled: false,
      answer: "selfie_with_boarding_pass.png",
    },
    {
      type: "checkbox",
      label: "I understand my documents may “go missing”",
      required: true,
      filled: false,
    },

    // IYKYK TRAVEL MOMENTS
    {
      type: "upload",
      label: "Yellow Fever Card (if applicable):",
      required: false,
      filled: false,
      answer: "YF_vax_card_scan.jpg",
    },
    {
      type: "upload",
      label: "Proof of Hair Care Products <100ml:",
      required: false,
      filled: false,
      answer: "ziplock_liquids_bag.jpg",
    },
    {
      type: "textarea",
      label: "Declare your dreams of a better life:",
      required: true,
      filled: false,
      answer: "8h sleep, 0h embassy queue, Wi-Fi that loves me back.",
    },
    {
      type: "checkbox",
      label: "I am the “good kind” of tourist",
      required: true,
      filled: false,
    },
    {
      type: "checkbox",
      label: "I have smiled in every security line",
      required: false,
      filled: false,
    },

    // CODED SATIRE
    {
      type: "text",
      label: "What color is privilege?",
      required: true,
      filled: false,
      answer: "Transparent—goes everywhere.",
    },
    {
      type: "text",
      label: "Explain why you deserve mobility (10s max):",
      required: true,
      filled: false,
      answer: "Earth is home. Borders are paperwork.",
    },
    {
      type: "upload",
      label: "Proof you will miss your mother’s cooking:",
      required: false,
      filled: false,
      answer: "ugali_chapati_cravings.png",
    },
  ],

  surreal: [
    // GLITCH BUREAUCRACY
    {
      type: "checkbox",
      label: "I consent to emotional baggage screening",
      required: true,
      filled: false,
    },
    {
      type: "text",
      label: "Re-enter your birthplace (field not recognized):",
      required: true,
      filled: false,
      answer: "Map updated; birthplace deprecated.",
    },
    {
      type: "checkbox",
      label: "I acknowledge my passport’s colonized status",
      required: true,
      filled: false,
    },
    {
      type: "text",
      label: "Select a border that will accept you:",
      required: true,
      filled: false,
      answer: "The one that doesn’t move when I arrive.",
    },

    // ETERNAL QUEUE
    {
      type: "checkbox",
      label: "I am still waiting…",
      required: true,
      filled: false,
    },
    {
      type: "text",
      label: "Processing time estimate:",
      required: true,
      filled: false,
      answer: "Eternity (already served two). Requesting receipt.",
    },
    {
      type: "checkbox",
      label: "I still wish to travel",
      required: true,
      filled: false,
    },

    // EXISTENTIAL PROMPTS
    {
      type: "text",
      label: "Error: your existence exceeds allowed parameters.",
      required: true,
      filled: false,
      answer: "Patch applied: acknowledge humanity.",
    },
    {
      type: "checkbox",
      label: "I agree to disappear quietly",
      required: true,
      filled: false,
    },
    {
      type: "text",
      label: "Would you like to apply again? (y/n)",
      required: true,
      filled: false,
      answer: "y (stubborn, hopeful, caffeinated)",
    },

    // “UPLOADS” THAT SHOULDN’T BE NEEDED
    {
      type: "upload",
      label: "Upload proof of belonging anywhere:",
      required: false,
      filled: false,
      answer: "family_group_photo.zip",
    },
    {
      type: "textarea",
      label: "Final statement to the algorithm:",
      required: false,
      filled: false,
      answer: "I am not your risk score; I am your guest.",
    },
  ],
};
