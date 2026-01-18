// Article 3 - Phishing Campaign Exposed
export const article3 = {
    title: "Phishing Campaign Exposed",
    category: "Investigation",
    date: "January 12, 2026",
    image: "https://via.placeholder.com/1000x600?text=Phishing+Attack+Investigation",
    excerpt: "A sophisticated phishing campaign targeting multiple industries has been exposed and dismantled through forensic analysis.",
    body: `
        <h2>Overview</h2>
        <p>Our digital forensics team investigated a widespread phishing campaign that affected organizations across healthcare, finance, and technology sectors.</p>

        <h2>Key Findings</h2>
        <ul>
            <li>Identified 8,500+ phishing emails across multiple campaigns</li>
            <li>Recovered email infrastructure and hosting details</li>
            <li>Traced credential theft from 2,300+ compromised accounts</li>
            <li>Documented infrastructure supporting the phishing operation</li>
            <li>Linked campaign to known threat group</li>
        </ul>

        <h2>Investigation Methodology</h2>
        <p>Our investigation included:</p>
        <ul>
            <li>Email forensics and artifact recovery</li>
            <li>Domain and hosting infrastructure analysis</li>
            <li>Malware analysis</li>
            <li>Infrastructure correlation analysis</li>
            <li>Attribution analysis</li>
        </ul>

        <h2>Impact and Results</h2>
        <p>The investigation helped coordinate takedown operations and victim notifications across multiple organizations.</p>

        <h2>Recommendations</h2>
        <ul>
            <li>Deploy email security solutions with machine learning</li>
            <li>Implement DMARC/SPF/DKIM authentication</li>
            <li>Conduct regular phishing awareness training</li>
            <li>Implement credential monitoring</li>
            <li>Deploy advanced email sandboxing</li>
        </ul>
    `,
    stats: {
        compromised: "2.3K",
        recovered: "850 GB",
        days: "35"
    },
    tags: ["phishing", "credential-theft", "forensics", "threat-intelligence", "investigation"]
};
