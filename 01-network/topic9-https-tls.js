// ======================================= HTTPS & TLS (SSL) =======================================

/**
 * HTTPS = HTTP + TLS
 *
 * - HTTP defines HOW data is requested and sent
 * - TLS defines HOW data is PROTECTED during transfer
 *
 * HTTPS ensures:
 * ✔ Confidentiality (no eavesdropping)
 * ✔ Integrity (no tampering)
 * ✔ Authentication (you are talking to the real server)
 */


/**
 * ======================================= SSL vs TLS =======================================
 *
 * SSL = Secure Sockets Layer
 * TLS = Transport Layer Security
 *
 * - SSL is the OLDER protocol (deprecated, insecure)
 * - TLS is the MODERN, secure successor
 *
 * Timeline:
 * - SSL 2.0 / 3.0 → Broken (DO NOT USE)
 * - TLS 1.0 / 1.1 → Deprecated
 * - TLS 1.2 → Widely used
 * - TLS 1.3 → Current standard (faster & more secure)
 *
 * IMPORTANT:
 * - People still say "SSL certificate"
 * - In reality, ALL modern HTTPS uses TLS
 *
 * Interview line:
 * 👉 "SSL is obsolete; HTTPS today always uses TLS."
 */


/**
 * ======================================= WHAT PROBLEM TLS SOLVES =======================================
 *
 * Without TLS (plain HTTP):
 * ❌ Anyone on the network can read your data
 * ❌ Data can be modified in transit
 * ❌ Fake servers can impersonate real ones
 *
 * Real-life example:
 * - Public WiFi at airport / cafe
 * - Attacker can sniff or inject traffic
 *
 * TLS protects against:
 * - Eavesdropping
 * - Man-in-the-middle (MITM) attacks
 * - Data tampering
 */


/**
 * ======================================= CERTIFICATES =======================================
 *
 * A TLS Certificate proves:
 * 👉 "This server REALLY owns this domain"
 *
 * Certificate contains:
 * - Domain name (example.com)
 * - Public key of the server
 * - Issuer (Certificate Authority)
 * - Validity period
 * - Digital signature
 *
 * Think of a certificate like:
 * - A digitally signed government ID for a website
 *
 * If certificate is invalid:
 * - Browser shows ❌ "Not Secure"
 */


/**
 * ======================================= CERTIFICATE AUTHORITIES (CA) =======================================
 *
 * CA = Trusted third party that verifies identities
 *
 * Examples:
 * - DigiCert
 * - Let's Encrypt
 * - GlobalSign
 *
 * Role of CA:
 * 1) Verify ownership of domain
 * 2) Issue a signed certificate
 *
 * Browsers TRUST CAs:
 * - Browsers ship with a list of trusted CA public keys
 *
 * Real-life analogy (non-cartoon):
 * - Passport Office:
 *   - You don't personally verify every passport
 *   - You trust the issuing authority
 *
 * Same idea:
 * - Browser trusts CA
 * - CA vouches for website
 */


/**
 * ======================================= HOW TLS AUTHENTICATES A SERVER =======================================
 *
 * 1) Server sends its certificate to client
 * 2) Browser checks:
 *    ✔ Is certificate issued by a trusted CA?
 *    ✔ Is domain name matching?
 *    ✔ Is certificate expired?
 *
 * If ALL checks pass:
 * ✔ Server is authenticated
 *
 * If ANY check fails:
 * ❌ Browser blocks or warns user
 */


/**
 * ======================================= TLS HANDSHAKE (HIGH LEVEL) =======================================
 *
 * Goal:
 * - Authenticate server
 * - Agree on encryption parameters
 * - Establish a secure session key
 *
 * Steps (simplified):
 *
 * 1️⃣ Client Hello
 * - Client sends:
 *   → TLS version supported
 *   → Cipher suites
 *   → Random number
 *
 * 2️⃣ Server Hello
 * - Server responds with:
 *   → Chosen cipher suite
 *   → Certificate
 *   → Server random number
 *
 * 3️⃣ Certificate Verification
 * - Client verifies certificate via CA
 *
 * 4️⃣ Key Exchange
 * - Client & server derive a SHARED SESSION KEY
 * - Uses asymmetric crypto (RSA / ECDHE)
 *
 * 5️⃣ Secure Channel Established
 * - All further communication is ENCRYPTED
 * - Uses symmetric encryption (fast)
 */


/**
 * ======================================= WHY ASYMMETRIC + SYMMETRIC BOTH =======================================
 *
 * Asymmetric encryption:
 * - Secure but slow
 * - Used ONLY during handshake
 *
 * Symmetric encryption:
 * - Very fast
 * - Used for actual data transfer
 *
 * System design insight:
 * 👉 TLS combines both for security + performance
 */


/**
 * ======================================= TLS 1.3 IMPROVEMENTS =======================================
 *
 * - Fewer handshake steps
 * - Faster connection setup
 * - Removes weak cryptographic algorithms
 * - Forward secrecy by default
 *
 * Result:
 * ✔ Lower latency
 * ✔ Better security
 */


/**
 * ======================================= WHERE TLS IS USED (NOT JUST BROWSERS) =======================================
 *
 * - Browser ↔ Web server (HTTPS)
 * - Service ↔ Service (microservices)
 * - API Gateway ↔ Backend
 * - Database connections
 * - Message brokers
 *
 * System design note:
 * - Internal traffic is ALSO encrypted in production systems
 */


/**
 * ======================================= TLS TERMINATION =======================================
 *
 * TLS termination = Decrypting HTTPS traffic at a component
 *
 * Common places:
 * - Load balancer
 * - API Gateway
 *
 * Why terminate TLS early?
 * ✔ Reduce CPU load on backend servers
 * ✔ Centralized certificate management
 *
 * Trade-off:
 * - Internal traffic must still be secured
 */


/**
 * ======================================= INTERVIEW-READY SUMMARY =======================================
 *
 * - HTTPS = HTTP + TLS
 * - SSL is obsolete; TLS is used today
 * - Certificates prove server identity
 * - CAs are trusted verifiers
 * - TLS handshake establishes secure session
 * - Asymmetric crypto for handshake
 * - Symmetric crypto for data transfer
 * - TLS is critical in system design
 */
