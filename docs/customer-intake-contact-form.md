# Customer intake contact form

This repository includes a static contact form for Super User Holdings.

## What the form does

- Captures a visitor's name, email, optional phone number, and request.
- Adds a browser-generated idempotency key so repeat submissions can be deduplicated by the intake backend.
- Sends only structured JSON to the public customer-intake adapter configured at build time.
- Shows a safe acknowledgement after the backend accepts the request.
- Fails closed if no public intake endpoint is configured.

## What the form must not contain

- No passwords.
- No OAuth tokens.
- No private customer-intake token.
- No local Mini PC URL.
- No private infrastructure address.
- No bank, payment, or account data.

The private intake token remains inside the server-side n8n / Mini PC workflow. The browser form must only call a public adapter endpoint that validates the payload and forwards it internally.

## Required build-time setting

Set this environment variable before building the public site:

```sh
NEXT_PUBLIC_CUSTOMER_INTAKE_URL="https://<public-intake-host>/webhook/suh-customer-intake-v1"
```

The value must be an HTTPS URL for the public n8n/customer-intake adapter. If it is missing, the form remains visible but will not submit.

## Verification checklist

Before deploying:

1. Confirm the public adapter URL is zero-cost and approved.
2. Confirm the public adapter does not expose private tokens.
3. Run `npm test`.
4. Submit one harmless synthetic lead.
5. Confirm the backend:
   - stores the lead durably;
   - returns a unique submission ID;
   - deduplicates the same idempotency key;
   - sends the customer acknowledgement;
   - sends the owner alert;
   - keeps status at `pending_approval`;
   - does not create customer work before owner approval.

## Rollback

Revert the pull request that introduced the contact form or unset `NEXT_PUBLIC_CUSTOMER_INTAKE_URL` and rebuild the site. The form fails closed when the endpoint is absent.
