// Article 2 - Data Breach Investigation
export const article2 = {
    title: "Data Breach Investigation",
    category: "Investigation",
    date: "January 15, 2026",
    image: "https://via.placeholder.com/1000x600?text=Database+Security+Breach",
    excerpt: "A major data breach affecting 500,000+ customer records has been thoroughly investigated and documented with complete forensic evidence.",
    body: `
        <h2>Overview</h2>
        <p>Our investigation team was engaged to analyze a critical data breach affecting a major financial institution. The investigation uncovered the attack vectors, compromised systems, and provided evidence for legal proceedings.</p>

        <h2>Key Findings</h2>
        <ul>
            <li>Identified 12 initial entry points used by threat actors</li>
            <li>Recovered deleted database logs spanning 8 months</li>
            <li>Traced data exfiltration to three different command servers</li>
            <li>Documented 500,000+ compromised customer records</li>
            <li>Established timeline of entire attack lifecycle</li>
        </ul>

        <h2>Investigation Methodology</h2>
        <p>Our team employed advanced forensic techniques including:</p>
        <ul>
            <li>Database forensics and recovery</li>
            <li>Network forensics analysis</li>
            <li>Log analysis and reconstruction</li>
            <li>Timeline analysis</li>
            <li>Attribution analysis</li>
        </ul>

        <h2>Impact and Results</h2>
        <p>The investigation results were used to support customer notifications, regulatory filings, and law enforcement coordination.</p>

        <h2>Recommendations</h2>
        <ul>
            <li>Implement multi-factor authentication</li>
            <li>Deploy database activity monitoring</li>
            <li>Conduct regular penetration testing</li>
            <li>Implement data encryption at rest and in transit</li>
            <li>Establish 24/7 security operations center</li>
        </ul>
    `,
    stats: {
        compromised: "500K+",
        recovered: "1.8 TB",
        days: "60"
    },
    tags: ["data-breach", "forensics", "investigation", "financial", "compliance"]
};
