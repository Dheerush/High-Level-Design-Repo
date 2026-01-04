// ================= topic06-domain-dns-https-trust.js =================

/**
 * REAL-LIFE STORY:
 * ---------------------------------------------------------
 * You built a website for a coffee shop:
 *   "Dheeru Coffee"
 *
 * Locally, it runs as:
 *   http://localhost:3000
 *
 * Goal:
 * - Anyone in the world should access it
 * - Users should TRUST it (HTTPS lock 🔒)
 */


/**
 * ================= STEP 1: LOCALHOST (YOUR LAPTOP ONLY) =================
 *
 * What localhost means:
 * - Website runs only on YOUR machine
 * - Browser talks to your laptop directly
 *
 * Analogy:
 * - You are cooking coffee at home
 * - Only YOU can drink it
 */


/**
 * ================= STEP 2: HOSTING (OPEN A PUBLIC SHOP) =================
 *
 * Problem:
 * - Customers can't come to your house
 *
 * Solution:
 * - Rent a SHOP in a public market (server)
 *
 * Technical meaning:
 * - Deploy your site to a server (Vercel / Cloud VM)
 *
 * Result:
 * - Your website now has a PUBLIC IP
 *
 * Example:
 * - 13.234.88.12
 *
 * Analogy:
 * - Your coffee shop now has a physical address
 */


/**
 * ================= STEP 3: DOMAIN NAME (SHOP NAME) =================
 *
 * Problem:
 * - Customers can't remember:
 *     "Shop at 13.234.88.12"
 *
 * Solution:
 * - Buy a DOMAIN NAME
 *
 * Example:
 * - dheerucoffee.com
 *
 * Domain Registrar:
 * - Acts like a government office
 * - Records:
 *     → You OWN this name
 *
 * Analogy:
 * - Naming your shop "Dheeru Coffee"
 */


/**
 * ================= STEP 4: DNS (PHONEBOOK OF INTERNET) =================
 *
 * DNS job:
 * - Convert:
 *     dheerucoffee.com → 13.234.88.12
 *
 * What you configure:
 * - DNS Records
 *
 * A Record:
 * - "This shop name points to this address"
 *
 * Analogy:
 * - Phonebook entry:
 *     "Dheeru Coffee → Street No. 13"
 */


/**
 * ================= STEP 5: CUSTOMER VISITS YOUR SITE =================
 *
 * User types:
 *   https://dheerucoffee.com
 *
 * What actually happens:
 * 1) Browser asks DNS:
 *    "Where is dheerucoffee.com?"
 *
 * 2) DNS replies:
 *    "13.234.88.12"
 *
 * 3) Browser connects to server
 */


/**
 * ================= STEP 6: HTTP PROBLEM (NO TRUST) =================
 *
 * If using HTTP:
 * - Data is open
 * - Anyone on the network can:
 *     ❌ Read data
 *     ❌ Modify data
 *
 * Analogy:
 * - Talking loudly in public
 */


/**
 * ================= STEP 7: HTTPS (LOCK THE COMMUNICATION) =================
 *
 * HTTPS = HTTP + TLS encryption
 *
 * What HTTPS guarantees:
 * ✔ Privacy
 * ✔ Integrity
 * ✔ Authenticity
 *
 * Browser shows 🔒 icon
 *
 * Analogy:
 * - Talking inside a locked room
 */


/**
 * ================= STEP 8: CERTIFICATE (PROOF OF IDENTITY) =================
 *
 * Problem:
 * - Anyone can claim:
 *     "I am Dheeru Coffee"
 *
 * Solution:
 * - CERTIFICATE
 *
 * Certificate Authority (CA):
 * - Trusted third party
 *
 * Example:
 * - Let's Encrypt (free CA)
 *
 * Certificate proves:
 * - This domain belongs to YOU
 *
 * Analogy:
 * - Shop license issued by government
 */


/**
 * ================= STEP 9: TLS HANDSHAKE (TRUST CHECK) =================
 *
 * When customer visits HTTPS site:
 *
 * 1) Server sends certificate
 * 2) Browser verifies CA signature
 * 3) Keys are exchanged
 * 4) Encrypted communication starts
 *
 * If certificate is invalid:
 * - Browser shows:
 *     "NOT SECURE"
 */


/**
 * ================= STEP 10: CERTIFICATE EXPIRY & RENEWAL =================
 *
 * Certificates expire (usually 90 days)
 *
 * WHY?
 * - Security best practice
 *
 * How renewal works:
 * - Automatic renewal (cron / platform-managed)
 *
 * Modern platforms handle this automatically
 */


/**
 * ================= FINAL COMPLETE FLOW =================
 *
 * localhost
 * → Public server (IP)
 * → Domain name
 * → DNS mapping
 * → Certificate issued
 * → HTTPS enabled
 * → TRUSTED website
 */


/**
 * ================= WHAT YOU SHOULD LEARN NEXT =================
 *
 * topic07-dns-deep-dive.js
 *   - DNS records
 *   - TTL
 *   - Caching
 *
 * topic08-https-tls-internals.js
 *   - TLS handshake
 *   - Trust chain
 *
 * topic09-load-balancer-basics.js
 *   - L4 vs L7
 *
 * topic10-cdn-and-edge.js
 *   - Global performance
 */
