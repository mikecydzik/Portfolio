// ============================================================
// PROJECT DATA
// ============================================================
// To add a new project, copy one object and add it to either
// featuredProjects or additionalProjects below.
//
// Fields:
//   id          — unique number
//   category    — "Work Project" or "Academic Project"
//   title       — project name
//   description — 1–2 sentence description
//   tools       — array of tool/tech strings
//   link        — URL to project, or "#" as placeholder
// ============================================================

export const featuredProjects = [
  {
    id: 1,
    category: "Work Project",
    title: "Shop Rejection App",
    description:
      "Power Apps solution for tracking and managing shop rejections and approvals across maintenance operations.",
    tools: ["Power Apps", "Power Automate", "SharePoint", "Power BI", "SQL"],
    link: "/projects/Redacted_Shop_Rejection_App_Project.pdf",
  },
  {
    id: 2,
    category: "Academic Project",
    title: "Business Analytics Tableau Project",
    description:
      "Interactive dashboards and visualizations built to uncover key business insights from structured datasets.",
    tools: ["Tableau", "Excel", "Business Analytics"],
    link: "#", // TODO: Replace with Tableau Public link or project file
  },
  {
    id: 3,
    category: "Academic Project",
    title: "JFK Airport Wait-Time Forecaster",
    description:
      "End-to-end forecasting system predicting 72-hour security wait time surges across JFK terminals using real-time scraping, feature engineering, and an explainable baseline model.",
    tools: ["Python", "Streamlit", "Pandas", "Plotly", "Selenium", "Forecasting"],
    link: "https://github.com/dhillonvo/jfk-wait-forecaster",
  },
];

export const additionalProjects = [
  {
    id: 11,
    category: "Academic Project",
    title: "NovoCare AI — Global Patient Companion",
    description:
      "Strategic AI initiative for Novo Nordisk proposing a multilingual patient adherence companion deployed across 170+ countries, with a 36-month phased rollout, $800M+ ROI analysis, AI ethics framework, and competitive landscape assessment.",
    tools: ["AI Strategy", "Global IT Strategy", "Business Analysis", "Healthcare", "PowerPoint"],
    link: "/projects/NovoCare_AI_Final_Project.pdf",
    website: "https://global-it-zezgwrmbjxpwtrufcymvck.streamlit.app/",
  },
  {
    id: 4,
    category: "Academic Project",
    title: "NYPD Criminal Court Summons Analysis",
    description:
      "Data-driven consulting analysis of 88,905 NYC criminal court summons (Jan–Sep 2025), identifying precinct enforcement hotspots, seasonal volume trends, and legal category distributions across Brooklyn and Manhattan.",
    tools: ["Data Analysis", "Data Visualization", "Business Analytics", "PowerPoint"],
    link: "/projects/NYPD_Summons_Analysis.pdf",
  },
  {
    id: 12,
    category: "Academic Project",
    title: "Tesla: Acquire Electrify America",
    description:
      "Strategic recommendation for Tesla to acquire Electrify America and expand its EV charging infrastructure beyond proprietary vehicles, supported by Porter's 5 Forces, internal/external analysis, and a phased implementation roadmap.",
    tools: ["Business Strategy", "Porter's 5 Forces", "Strategic Analysis", "PowerPoint"],
    link: "/projects/Tesla_Strategy_Essay.pdf",
  },
  {
    id: 5,
    category: "Academic Project",
    title: "Data Mining Project",
    description:
      "Applied data mining techniques to extract meaningful patterns and actionable insights from large datasets.",
    tools: ["Data Mining", "Excel", "Analytics"],
    link: "#", // TODO: Replace with project file or write-up
  },
  {
    id: 6,
    category: "Academic Project",
    title: "S&P 500 Stock Valuation — ML Forecasting",
    description:
      "Multi-model machine learning project identifying undervalued and overvalued S&P 500 stocks using financial fundamentals (P/E, EPS, Market Cap, EBITDA). Built five models: MLP neural network regressor, Decision Tree, Naive Bayes (73% accuracy), K-Means clustering, and DB-Scan outlier detection — in both Python and KNIME.",
    tools: ["Python", "KNIME", "scikit-learn", "MLP Neural Network", "Decision Tree", "Naive Bayes", "K-Means", "Pandas"],
    link: "/projects/ML_Stock_Forecasting_Report.pdf",
  },
  {
    id: 7,
    category: "Academic Project",
    title: "Retail Store Replenishment System",
    description:
      "Information systems proposal for optimizing retail inventory replenishment processes and supply chain efficiency.",
    tools: ["Process Design", "Operations", "Information Systems"],
    link: "#", // TODO: Replace with proposal document
  },
  {
    id: 8,
    category: "Work Project",
    title: "SQL Data Validation Project",
    description:
      "SQL-based data validation workflows to ensure accuracy and integrity across operational data systems.",
    tools: ["SQL", "Data Validation", "Power BI"],
    link: "#", // TODO: Replace with project link — review for MTA content before sharing
  },
  {
    id: 9,
    category: "Work Project",
    title: "Power BI Warehouse & Inventory Dashboard",
    description:
      "Operational Power BI dashboard for warehouse inventory tracking, reporting, and decision support.",
    tools: ["Power BI", "SQL", "SharePoint", "Data Visualization"],
    link: "#", // TODO: Replace with project link — review for MTA content before sharing
  },
  {
    id: 10,
    category: "Work Project",
    title: "Power Automate Document Generation",
    description:
      "Automated document generation flow using Power Automate to streamline operational reporting and reduce manual effort.",
    tools: ["Power Automate", "SharePoint", "Microsoft 365"],
    link: "#", // TODO: Replace with project link — review for MTA content before sharing
  },
  {
    id: 15,
    category: "Academic Project",
    title: "Chipotle Consulting — Pickup Locker Proposal",
    description:
      "Semester-long consulting cup project analyzing Chipotle's mobile order pickup inefficiencies (declining digital sales, security gaps, food waste) and proposing a heated pickup locker system for major-city locations — with full market analysis, financial review, competitive landscape, and social media strategy.",
    tools: ["Marketing Strategy", "Business Consulting", "Financial Analysis", "Competitive Analysis", "PowerPoint"],
    link: "/projects/Chipotle_Consulting_Report.pdf",
  },
  {
    id: 13,
    category: "Academic Project",
    title: "Angel's Heavenly Puppies — E-commerce Website",
    description:
      "Full-cycle web development project for a Brooklyn-based Maltipoo breeder, delivering an e-commerce site with puppy browsing, PayPal/Zelle/Venmo payment integration, an owner management portal, and complete systems documentation including ERD, data dictionary, and use case models.",
    tools: ["Web Development", "Squarespace", "UI/UX Design", "Systems Analysis", "ERD"],
    link: "/projects/Heavenly_Pups_Final_Report.pdf",
  },
  {
    id: 14,
    category: "Academic Project",
    title: "Syllaparse — Syllabus-to-Calendar Automation",
    description:
      "Systems analysis project proposing and prototyping Syllaparse, a tool that automatically extracts key dates and assignments from academic syllabi and syncs them to Google Calendar, reducing manual scheduling effort for students.",
    tools: ["Systems Analysis", "Requirements Gathering", "Google Calendar API", "AI/NLP", "Process Modeling"],
    link: "/projects/Syllaparse_Systems_Analysis.pdf",
  },
];
