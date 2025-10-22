# HSTS (HTTP Strict Transport Security) Implementation

## Overview
This document explains the HSTS implementation for Revvmed website to address the HTTP Observatory security requirement.

## What is HSTS?
HTTP Strict Transport Security (HSTS) is a web security policy mechanism that helps protect websites against man-in-the-middle attacks such as protocol downgrade attacks and cookie hijacking. It allows web servers to declare that web browsers should interact with them using only HTTPS connections.

## Implementation Details

### 1. Next.js Configuration (`next.config.ts`)
Added HSTS header in the Next.js headers configuration:

```typescript
{
  key: "Strict-Transport-Security",
  value: "max-age=31536000; includeSubDomains; preload",
}
```

### 2. Meta Tag Fallback (`app/layout.tsx`)
Added HSTS header as a meta tag for additional security:

```html
<meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains; preload" />
```

## HSTS Header Breakdown

- **max-age=31536000**: Specifies that the browser should enforce HTTPS for 1 year (31,536,000 seconds)
- **includeSubDomains**: Applies the HSTS policy to all subdomains
- **preload**: Indicates the site can be included in browsers' HSTS preload lists

## Deployment Considerations

### Static Export Mode
Since the application uses `output: "export"`, the HSTS headers will work when:
1. Served by a web server that respects Next.js header configuration
2. The meta tag provides a fallback for basic HSTS functionality

### Gradual Rollout (Recommended)
As suggested by [hstspreload.org](https://hstspreload.org/), consider starting with shorter periods:

1. **Initial deployment**: `max-age=300` (5 minutes)
2. **After testing**: `max-age=86400` (1 day)
3. **After confidence**: `max-age=31536000` (1 year)

To implement gradual rollout, modify the max-age value in both:
- `next.config.ts` headers configuration
- `app/layout.tsx` meta tag

## Testing HSTS Implementation

### 1. Browser Developer Tools
- Open Network tab
- Check response headers for `Strict-Transport-Security`

### 2. Online Tools
- [Mozilla HTTP Observatory](https://observatory.mozilla.org/)
- [Security Headers](https://securityheaders.com/)
- [SSL Labs SSL Test](https://www.ssllabs.com/ssltest/)

### 3. Command Line
```bash
curl -I https://yourdomain.com
```
Look for: `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`

## HSTS Preload List

To submit the domain to browser HSTS preload lists:
1. Visit [hstspreload.org](https://hstspreload.org/)
2. Enter your domain
3. Ensure all requirements are met
4. Submit for inclusion

## Important Notes

1. **HTTPS Required**: HSTS only works over HTTPS connections
2. **Irreversible**: Once implemented with long max-age, users cannot access the site over HTTP
3. **Subdomain Impact**: `includeSubDomains` affects all subdomains
4. **Testing**: Always test thoroughly before deploying with long max-age values

## Rollback Procedure

If you need to disable HSTS:
1. Set `max-age=0` in both configurations
2. Deploy the changes
3. Wait for the previous max-age period to expire
4. Remove the HSTS headers entirely

## Additional Security Headers

The implementation also maintains other security headers:
- Content Security Policy (CSP)
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

## Compliance

This implementation addresses the HTTP Observatory requirement:
- ✅ Strict-Transport-Security header implemented
- ✅ Appropriate max-age value (1 year)
- ✅ includeSubDomains directive
- ✅ preload directive for enhanced security
