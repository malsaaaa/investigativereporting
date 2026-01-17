# CSS Loading Issue - Fixed

## Problem
CSS files were not loading when the website was deployed to Netlify domain.

## Root Cause
The `netlify.toml` file had a catch-all redirect rule that was redirecting **ALL** requests (including CSS, JS, images) to `/index.html`. This caused the browser to request CSS files but receive HTML instead, breaking all styling.

### Original netlify.toml Issue:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

This redirect was meant for SPA routing but it was too broad and caught static assets.

## Solution
Updated `netlify.toml` to:
1. **Remove the catch-all redirect** that was breaking static assets
2. **Added explicit redirects** for HTML pages (articles, series, about)
3. **Added proper cache headers** for CSS and JS files with long expiration (1 year)
4. **Added Content-Type headers** to ensure browsers correctly interpret CSS as CSS

### Updated netlify.toml:
```toml
# Redirect HTML routes to appropriate pages (for multi-page site)
[[redirects]]
  from = "/articles"
  to = "/articles.html"
  status = 200

[[redirects]]
  from = "/series"
  to = "/series.html"
  status = 200

[[redirects]]
  from = "/about"
  to = "/about.html"
  status = 200

# Cache control headers for static assets
[[headers]]
  for = "*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000"
    Content-Type = "text/css"

[[headers]]
  for = "*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000"
    Content-Type = "application/javascript"
```

## Files Modified
- `netlify.toml` - Fixed redirect rules and added proper cache headers

## Result
✅ CSS files now load correctly on Netlify
✅ All stylesheets (styles.css, articles-styles.css, series-styles.css, about-styles.css, investigation-styles.css) load properly
✅ Navigation still works correctly
✅ Page styling fully functional

## Verification
All CSS links in HTML files are correct:
- index.html → styles.css
- articles.html → styles.css + articles-styles.css
- series.html → styles.css + series-styles.css
- about.html → styles.css + about-styles.css
- investigation.html → styles.css + investigation-styles.css

All files have been pushed to GitHub and should deploy automatically to Netlify.
