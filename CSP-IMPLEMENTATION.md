# Content Security Policy (CSP) Implementation

## Overview
This document explains the Content Security Policy implementation for Revvmed website to address the HTTP Observatory Report security requirements.

## Implementation Method
Since the application uses `output: "export"` for static generation, CSP is implemented using HTML meta tags in the layout.tsx file. This approach works for static sites where server-side headers cannot be configured.

## CSP Directives Implemented

### Core Security Directives
- **default-src 'self'**: Only allow resources from the same origin by default
- **object-src 'none'**: Prevent loading of plugins (Flash, Java, etc.)
- **frame-ancestors 'none'**: Prevent the page from being framed by other sites
- **base-uri 'self'**: Restrict the base URI to same origin
- **upgrade-insecure-requests**: Automatically upgrade HTTP requests to HTTPS

### Script Security
- **script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com**
  - `'self'`: Allow scripts from same origin
  - `'unsafe-inline'`: Required for React inline event handlers and Next.js
  - `'unsafe-eval'`: Required for Next.js build tools
  - `https://fonts.googleapis.com`: Allow Google Fonts scripts

### Style Security
- **style-src 'self' 'unsafe-inline' https://fonts.googleapis.com**
  - `'self'`: Allow stylesheets from same origin
  - `'unsafe-inline'`: Required for Tailwind CSS and component styles
  - `https://fonts.googleapis.com`: Allow Google Fonts stylesheets

### Font Security
- **font-src 'self' https://fonts.gstatic.com data:**
  - `'self'`: Allow fonts from same origin
  - `https://fonts.gstatic.com`: Allow Google Fonts
  - `data:`: Allow data URI fonts

### Image Security
- **img-src 'self' data: blob:**
  - `'self'`: Allow images from same origin
  - `data:`: Allow data URI images
  - `blob:`: Allow blob URLs for dynamic images

### Frame Security
- **frame-src 'self' https://www.google.com**
  - `'self'`: Allow frames from same origin
  - `https://www.google.com`: Allow Google Maps iframe

### Form Security
- **form-action 'self' https://formspree.io**
  - `'self'`: Allow form submissions to same origin
  - `https://formspree.io`: Allow Formspree form submissions

### Network Security
- **connect-src 'self' https://formspree.io**
  - `'self'`: Allow connections to same origin
  - `https://formspree.io`: Allow API calls to Formspree

## Additional Security Headers

### X-Frame-Options
- **Value**: `DENY`
- **Purpose**: Prevents the page from being displayed in frames/iframes on other sites

### X-Content-Type-Options
- **Value**: `nosniff`
- **Purpose**: Prevents browsers from MIME-type sniffing responses

### Referrer-Policy
- **Value**: `strict-origin-when-cross-origin`
- **Purpose**: Controls how much referrer information is sent with requests

### Permissions-Policy
- **Value**: `camera=(), microphone=(), geolocation=()`
- **Purpose**: Restricts access to browser APIs that could be privacy-sensitive

## Testing Your CSP

1. **Build and serve your application**:
   ```bash
   npm run build
   npm run start
   ```

2. **Check browser console**: Look for CSP violation errors

3. **Test all functionality**:
   - Google Fonts should load properly
   - Google Maps should display correctly
   - Formspree forms should submit successfully
   - All images should display
   - Navigation and interactions should work

4. **Use online CSP analyzers**:
   - [CSP Evaluator](https://csp-evaluator.withgoogle.com/)
   - [HTTP Observatory](https://observatory.mozilla.org/)

## For Production Deployment

### If using a web server (Apache/Nginx)
You can configure these headers at the server level for better security:

**Apache (.htaccess)**:
```apache
Header always set Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob:; media-src 'self'; object-src 'none'; frame-src 'self' https://www.google.com; frame-ancestors 'none'; form-action 'self' https://formspree.io; connect-src 'self' https://formspree.io; base-uri 'self'; upgrade-insecure-requests;"
Header always set X-Frame-Options "DENY"
Header always set X-Content-Type-Options "nosniff"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
```

**Nginx**:
```nginx
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob:; media-src 'self'; object-src 'none'; frame-src 'self' https://www.google.com; frame-ancestors 'none'; form-action 'self' https://formspree.io; connect-src 'self' https://formspree.io; base-uri 'self'; upgrade-insecure-requests;" always;
add_header X-Frame-Options "DENY" always;
add_header X-Content-Type-Options "nosniff" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
```

### If using CDN/Hosting Services
- **Vercel**: Use vercel.json configuration
- **Netlify**: Use _headers file
- **Cloudflare**: Use Page Rules or Workers

## Future Improvements

1. **Reduce 'unsafe-inline'**: 
   - Use nonces for inline scripts
   - Move inline styles to CSS files

2. **Implement Subresource Integrity (SRI)**:
   - Add integrity hashes to external scripts/styles

3. **Monitor CSP violations**:
   - Set up CSP reporting to track violations

## Troubleshooting

If you encounter issues after implementing CSP:

1. Check browser console for CSP violation errors
2. Temporarily add `report-only` mode for testing
3. Gradually tighten policies as you identify requirements
4. Use CSP violation reporting to identify legitimate resources

## Impact on HTTP Observatory Score

This implementation should significantly improve your HTTP Observatory score by:
- ✅ Implementing Content Security Policy
- ✅ Adding X-Frame-Options header
- ✅ Adding X-Content-Type-Options header
- ✅ Setting proper Referrer Policy
- ✅ Restricting permissions via Permissions Policy

The previously failing "Content Security Policy (CSP) −25 Failed" should now pass.
