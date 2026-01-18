// ===========================
// Investigation Page - JavaScript
// ===========================

// Investigation Data
const investigationData = {
    1: {
        title: "One Click Away: How Data Breaches Turn Users into Scam Victims",
        author: "Yasmin Damia",
        category: "Data Breach",
        date: "January 17, 2026",
        excerpt: "Online Scams Target Victims Through Hacked Accounts and Malicious Links",
        body: `
            <h2>Data Breaches and Scam Victims in Malaysia</h2>
            <p>In Malaysia, data breaches have become a major contributor to the increasing number of scam cases affecting both individuals and businesses.</p>

            <h2>How Stolen Data is Exploited</h2>
            <p>When personal data such as names, identification numbers, phone numbers, bank details, and home addresses are leaked due to cyberattacks, insider misuse or weak data protection practices, the information often ends up in the hands of criminal networks.</p>

            <h2>Common Scam Methods</h2>
            <p>Scammers exploit this stolen data to carry out various forms of fraud including:</p>
            <ul>
                <li>Phishing emails crafted with personal information</li>
                <li>Scam calls impersonating trusted organizations</li>
                <li>Fake investment schemes targeting specific demographics</li>
                <li>Identity theft using leaked identification numbers</li>
                <li>Online impersonation through compromised accounts</li>
            </ul>

            <h2>How Your Data Gets Compromised</h2>
            <p>Data breaches occur through multiple vectors:</p>
            <ul>
                <li>Cyberattacks on company servers and databases</li>
                <li>Insider threats from employees with malicious intent</li>
                <li>Weak data protection practices and poor security measures</li>
                <li>Ransomware attacks that expose sensitive information</li>
                <li>Third-party vendor vulnerabilities</li>
            </ul>

            <h2>The Impact on Victims</h2>
            <p>When personal information is exposed, individuals become targets for scammers who use the data to craft convincing fraudulent schemes. The combination of personal knowledge and access to multiple data points makes these scams highly effective and difficult for victims to identify as fraudulent.</p>

            <h2>Protecting Yourself</h2>
            <ul>
                <li>Monitor your accounts regularly for unauthorized activity</li>
                <li>Use strong, unique passwords for each online account</li>
                <li>Enable two-factor authentication wherever available</li>
                <li>Be cautious of unsolicited calls, emails, or messages</li>
                <li>Register with the National Do Not Call Registry (NDNCR)</li>
                <li>Check your credit report regularly</li>
                <li>Report suspicious activity to the authorities immediately</li>
            </ul>

            <h2>What to Do If You're Compromised</h2>
            <p>If you believe your data has been compromised:</p>
            <ul>
                <li>Change all your passwords immediately</li>
                <li>Contact your bank and financial institutions</li>
                <li>Monitor your credit reports for fraud</li>
                <li>Report the incident to the Malaysian Police (PDRM)</li>
                <li>Seek assistance from the AKPK (Credit Counselling and Debt Management Agency) if needed</li>
                <li>Document all fraudulent transactions and communications</li>
            </ul>
        `,
        stats: {
            breaches: "500K+",
            victims: "Ongoing",
            recovered: "In Progress"
        },
        tags: ["data-breach", "scam", "fraud", "cybercrime", "protection"]
    },
    2: {
        title: "Data Breach Investigation",
        category: "Investigation",
        date: "January 15, 2026",
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
    },
    3: {
        title: "Phishing Campaign Exposed",
        category: "Investigation",
        date: "January 12, 2026",
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
    },
    4: {
        title: "Credential Theft Ring Exposed",
        category: "Investigation",
        date: "January 8, 2026",
        excerpt: "A comprehensive investigation into organized credential theft operations targeting businesses across Southeast Asia.",
        body: `
            <h2>Overview</h2>
            <p>Our digital forensics team conducted an extensive investigation into a sophisticated credential theft operation that targeted businesses across Southeast Asia. The investigation revealed a well-organized criminal network stealing login credentials and selling them on the dark web.</p>

            <h2>Key Findings</h2>
            <ul>
                <li>Identified 156,000+ stolen credentials in dark web marketplaces</li>
                <li>Traced theft infrastructure across 8 countries</li>
                <li>Discovered connection to 4 major criminal organizations</li>
                <li>Recovered command and control servers with forensic evidence</li>
                <li>Documented the complete theft-to-sale pipeline</li>
            </ul>

            <h2>Investigation Methodology</h2>
            <p>Our investigation included:</p>
            <ul>
                <li>Dark web marketplace monitoring and infiltration</li>
                <li>Credential database forensics</li>
                <li>Malware analysis and reverse engineering</li>
                <li>Network infrastructure mapping</li>
                <li>Criminal network relationship analysis</li>
            </ul>

            <h2>Impact and Results</h2>
            <p>This investigation led to coordinated takedown operations across multiple jurisdictions, with 23 arrests and the seizure of operational infrastructure.</p>

            <h2>Recommendations</h2>
            <ul>
                <li>Implement multi-factor authentication organization-wide</li>
                <li>Deploy credential monitoring and dark web scanning</li>
                <li>Conduct regular password audits and updates</li>
                <li>Implement zero-trust security models</li>
                <li>Deploy advanced detection for compromised credentials</li>
            </ul>
        `,
        stats: {
            compromised: "156K",
            recovered: "1.2 TB",
            days: "52"
        },
        tags: ["credential-theft", "dark-web", "cybercrime", "forensics", "investigation"]
    },
};

// Get Investigation ID from URL
function getInvestigationId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id') || '1';
}

// Load Investigation Data
function loadInvestigation() {
    const id = getInvestigationId();
    const data = investigationData[id];

    if (!data) {
        document.querySelector('.investigation-page').innerHTML = '<p style="color: #00d4ff;">Investigation not found.</p>';
        return;
    }

    // Set title and meta
    document.getElementById('investigation-title').textContent = data.title;
    
    // Set author if it exists
    const authorElement = document.getElementById('investigation-author');
    if (data.author) {
        authorElement.textContent = 'By ' + data.author + ' • ';
        authorElement.style.display = 'inline';
    } else {
        authorElement.style.display = 'none';
    }
    
    document.getElementById('investigation-date').textContent = data.date + ' - 2:30 PM';
    document.querySelector('.investigation-category').textContent = data.category;

    // Set excerpt
    document.getElementById('investigation-excerpt').innerHTML = `<p>${data.excerpt}</p>`;

    // Set body
    document.getElementById('investigation-body').innerHTML = data.body;

    // Set stats
    document.querySelectorAll('.stat-value')[0].textContent = data.stats.compromised;
    document.querySelectorAll('.stat-value')[1].textContent = data.stats.recovered;
    document.querySelectorAll('.stat-value')[2].textContent = data.stats.days;

    // Set tags
    const tagsContainer = document.querySelector('.investigation-tags');
    tagsContainer.innerHTML = '';
    data.tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.className = 'tag';
        tagEl.textContent = tag;
        tagsContainer.appendChild(tagEl);
    });

    // Update page title
    document.title = data.title + ' - Digital Forensic HQ';

    // Set up share button
    const shareButton = document.querySelector('.share-button');
    shareButton.addEventListener('click', function() {
        const text = `Check out this investigation: ${data.title} on Digital Forensic HQ`;
        if (navigator.share) {
            navigator.share({
                title: data.title,
                text: text,
                url: window.location.href
            }).catch(err => console.log('Error sharing:', err));
        } else {
            alert('Share: ' + text + '\n\n' + window.location.href);
        }
    });
}

// Initialize mobile menu on investigation page
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (!hamburger) return;

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Set current date
function setCurrentDate() {
    const dateElement = document.getElementById('current-date');
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = today.toLocaleDateString('en-MY', options);
    if (dateElement) dateElement.textContent = dateString;
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    setCurrentDate();
    loadInvestigation();
    initMobileMenu();
});
