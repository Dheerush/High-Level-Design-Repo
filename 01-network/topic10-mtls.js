// ======================================= MUTUAL TLS (mTLS) =======================================

/**
 * WHAT IS mTLS?
 * ---------------------------------------------------------
 * mTLS = Mutual Transport Layer Security
 *
 * - Normal TLS:
 *   ✔ Client verifies SERVER identity
 *   ❌ Server does NOT verify client identity at TLS level
 *
 * - Mutual TLS:
 *   ✔ Client verifies SERVER certificate
 *   ✔ Server verifies CLIENT certificate
 *
 * ➜ BOTH sides authenticate each other.
 */


/**
 * ======================================= WHY NORMAL TLS IS NOT ENOUGH =======================================
 *
 * In standard HTTPS:
 * - Client identity is usually verified using:
 *   → API keys
 *   → JWT tokens
 *   → OAuth access tokens
 *
 * Problems:
 * ❌ Tokens can be leaked
 * ❌ Tokens can be replayed
 * ❌ Application code must handle auth logic
 *
 * mTLS moves authentication DOWN to the TRANSPORT layer.
 */


/**
 * ======================================= CLIENT CERTIFICATES =======================================
 *
 * Client Certificate:
 * - A digital certificate issued to a CLIENT (service / application)
 *
 * Contains:
 * - Client identity (service name / workload identity)
 * - Client public key
 * - Issuer (trusted CA)
 * - Validity period
 *
 * Purpose:
 * - Prove the identity of the CLIENT to the SERVER
 *
 * Think of it as:
 * - A machine-verifiable identity card for services
 */


/**
 * ======================================= HOW mTLS WORKS (HIGH LEVEL FLOW) =======================================
 *
 * 1️⃣ Client initiates TLS handshake
 *
 * 2️⃣ Server sends:
 * - Server certificate
 * - Request for client certificate
 *
 * 3️⃣ Client sends:
 * - Client certificate
 *
 * 4️⃣ BOTH sides verify certificates:
 * - Issued by trusted CA?
 * - Not expired?
 * - Identity allowed?
 *
 * 5️⃣ Secure channel established
 *
 * Result:
 * ✔ Encrypted communication
 * ✔ Bidirectional authentication
 */


/**
 * ======================================= SERVICE-TO-SERVICE TRUST =======================================
 *
 * In microservices:
 * - Services communicate over the network constantly
 * - Network is assumed to be UNTRUSTED
 *
 * Service-to-service trust means:
 * - Service A must PROVE it is really Service A
 * - Service B must PROVE it is really Service B
 *
 * mTLS provides:
 * ✔ Strong service identity
 * ✔ Cryptographic proof
 * ✔ No shared secrets
 */


/**
 * ======================================= WHY mTLS IS CRITICAL IN MICROSERVICES =======================================
 *
 * 1) Zero Trust Architecture
 * - No service is trusted by default
 * - Every request must be authenticated
 *
 * 2) Stronger than Tokens
 * - Certificates cannot be replayed easily
 * - Private keys never leave the service
 *
 * 3) No Per-Request Auth Logic
 * - Authentication happens during handshake
 * - Application code stays simpler
 *
 * 4) Prevents Lateral Movement
 * - Compromised service cannot freely call others
 */


/**
 * ======================================= REAL-WORLD MICROSERVICES EXAMPLE =======================================
 *
 * Scenario:
 * - Order Service → Payment Service
 *
 * With mTLS:
 * - Payment Service checks:
 *   ✔ Certificate identity = "order-service"
 *   ✔ Issued by trusted internal CA
 *
 * If identity is invalid:
 * ❌ Connection is rejected BEFORE request is processed
 */


/**
 * ======================================= mTLS vs API TOKENS =======================================
 *
 * API Tokens:
 * - Application-level security
 * - Easy to leak
 * - Requires rotation logic
 *
 * mTLS:
 * - Transport-level security
 * - Hard to forge
 * - Automatic authentication
 *
 * Best practice:
 * 👉 mTLS for service identity
 * 👉 Tokens/JWT for user identity
 */


/**
 * ======================================= CERTIFICATE MANAGEMENT (IMPORTANT) =======================================
 *
 * Challenges:
 * - Certificate issuance
 * - Rotation
 * - Revocation
 *
 * Solutions:
 * - Internal Certificate Authority
 * - Automated rotation
 *
 * Common tools:
 * - Service Mesh (Istio, Linkerd)
 * - Cloud providers (AWS ACM, GCP CA)
 */


/**
 * ======================================= WHERE mTLS IS USED =======================================
 *
 * - Service-to-service communication
 * - API Gateway ↔ Backend
 * - Internal admin APIs
 * - Financial & healthcare systems
 */


/**
 * ======================================= SYSTEM DESIGN TAKEAWAYS =======================================
 *
 * - mTLS provides:
 *   ✔ Encryption
 *   ✔ Mutual authentication
 *   ✔ Strong service identity
 *
 * - Essential for:
 *   ✔ Microservices
 *   ✔ Zero-trust networks
 *   ✔ High-security systems
 *
 * Interview one-liner:
 * 👉 "mTLS ensures services authenticate each other at the transport layer."
 */
