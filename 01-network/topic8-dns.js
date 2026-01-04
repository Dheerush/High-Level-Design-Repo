// ================================ 07-dns.js ================================

/**
 * DNS = Domain Name System: DNS converts HUMAN-READABLE NAMES into MACHINE-READABLE IPs.
 *Example: google.com  →  142.250.xx.xx *
 * Without DNS: - We would need to remember IP addresses
 */


/**
 * ================================ WHY DNS EXISTS ================================
 * PROBLEM:
 * - Computers understand IP addresses
 * - Humans understand names
 *
 * SOLUTION: 
 * - DNS acts like the PHONEBOOK of the Internet
 */


/**
 * ================================ REAL-LIFE ANALOGY ================================
 *
 * You want to call "Dheeru Coffee"
 * But phone system only understands numbers.
 *
 * Phonebook: "Dheeru Coffee → +91-98xxxxxx"
 * DNS works EXACTLY like this.
 */


/**
 * ================================ DNS HIERARCHY (VERY IMPORTANT) ================================
 * - DNS is NOT a single server. It is a DISTRIBUTED, HIERARCHICAL system.
 * - Hierarchy: *
 *       Root DNS Servers
 *             ↓
 *       TLD Servers (.com, .org, .in)
 *             ↓
 *       Authoritative DNS Servers
 */


/**
 * 1️⃣ ROOT DNS SERVERS
 * ---------------------------------------------------------
 * - Top of the DNS hierarchy
 * - Know where TLD servers are
 *
 * They do NOT know IP addresses.
 *
 * Question they answer:
 * - "Who handles .com?"
 */


/**
 * 2️⃣ TLD (Top-Level Domain) SERVERS
 * ---------------------------------------------------------
 * Examples:
 * - .com
 * - .org
 * - .in
 *
 * They know:
 * - Which AUTHORITATIVE server owns a domain
 *
 * Question they answer:
 * - "Who handles google.com?"
 */


/**
 * 3️⃣ AUTHORITATIVE DNS SERVERS
 * ---------------------------------------------------------
 * - FINAL source of truth
 * - Stores actual DNS records
 *
 * Question they answer:
 * - "google.com = which IP?"
 */


/**
 * ================================ DNS RECORDS ================================
 *
 * DNS records tell WHAT a domain points to.
 */


/**
 * A RECORD
 * ---------------------------------------------------------
 * - Maps domain → IPv4 address
 *
 * Example:
 *   google.com → 142.250.xx.xx
 */


/**
 * AAAA RECORD
 * ---------------------------------------------------------
 * - Maps domain → IPv6 address
 */


/**
 * CNAME RECORD
 * ---------------------------------------------------------
 * - Alias for another domain
 *
 * Example:
 *   www.google.com → google.com
 */


/**
 * MX RECORD
 * ---------------------------------------------------------
 * - Mail servers
 *
 * Used for email delivery
 */


/**
 * ================================ DNS LOOKUP (STEP-BY-STEP) ================================
 *
 * User types:
 *   https://google.com
 *
 * QUESTION:
 * - How does browser get IP?
 */


/**
 * STEP 1: BROWSER CACHE
 * ---------------------------------------------------------
 * - Browser checks:
 *   "Do I already know google.com?"
 *
 * If YES:
 * - Use cached IP
 * - STOP
 */


/**
 * STEP 2: OS CACHE
 * ---------------------------------------------------------
 * - Operating system cache
 *
 * If found:
 * - Return IP
 * - STOP
 */


/**
 * STEP 3: DNS RESOLVER (ISP / PUBLIC)
 * ---------------------------------------------------------
 * - If not cached locally
 * - Request goes to DNS Resolver
 *
 * Examples:
 * - ISP DNS
 * - Public DNS (Google / Cloudflare)
 */


/**
 * ================================ RECURSIVE LOOKUP (CORE CONCEPT) ================================
 *
 * Resolver does the HARD WORK for you.
 *
 * Resolver:
 * ---------------------------------------------------------
 * 1) Ask Root server:
 *    "Who handles .com?"
 *
 * 2) Ask TLD server:
 *    "Who handles google.com?"
 *
 * 3) Ask Authoritative server:
 *    "What is IP of google.com?"
 *
 * 4) Return IP to browser
 */


/**
 * ================================ ITERATIVE vs RECURSIVE ================================
 *
 * ITERATIVE:
 * ---------------------------------------------------------
 * - Server says:
 *   "I don't know, ask this server"
 *
 * RECURSIVE:
 * ---------------------------------------------------------
 * - Resolver finds FINAL answer for client
 *
 * Browser always makes RECURSIVE request.
 */


/**
 * ================================ DNS CACHING ================================
 *
 * DNS caching exists to:
 * ---------------------------------------------------------
 * ✔ Speed up requests
 * ✔ Reduce DNS traffic
 *
 * Caching layers:
 * ---------------------------------------------------------
 * 1) Browser
 * 2) OS
 * 3) DNS Resolver
 */


/**
 * ================================ TTL (Time To Live) ================================
 *
 * TTL:
 * ---------------------------------------------------------
 * - How long DNS result can be cached
 *
 * Example:
 * - TTL = 300 seconds
 *
 * After TTL expires:
 * - DNS lookup happens again
 *
 * WHY TTL EXISTS:
 * ---------------------------------------------------------
 * - Allows IP changes
 * - Balances freshness vs performance
 */


/**
 * ================================ WHAT DNS DOES NOT DO ================================
 *
 * ❌ DNS does NOT:
 * - Encrypt data
 * - Handle HTTPS
 * - Balance load directly
 *
 * DNS ONLY:
 * ---------------------------------------------------------
 * - Resolves name → IP
 */


/**
 * ================================ WHY DNS IS CRITICAL FOR SYSTEM DESIGN ================================
 *
 * DNS affects:
 * ---------------------------------------------------------
 * ✔ Latency
 * ✔ Availability
 * ✔ Global traffic routing
 *
 * DNS failure = WEBSITE DOWN
 */










/**
 * ================================ ONE-LINE SUMMARY ================================
 *
 * DNS:
 * - Distributed phonebook
 * - Hierarchical
 * - Cached aggressively
 * - FIRST step of every web request
 */




// ================================ 08-dns-advanced.js ================================

/**
 * This file builds ON TOP OF:
 * - 07-dns.js
 *
 * Focus:
 * - Global traffic routing
 * - Performance
 * - Availability
 *
 * DNS here is no longer just "name → IP"
 * DNS becomes a TRAFFIC CONTROL SYSTEM
 */


/**
 * ================================ QUICK RECAP (CONTEXT) ================================
 *
 * DNS basics:
 * - Domain → IP
 * - Hierarchical
 * - Cached
 *
 * Advanced DNS answers:
 * - WHICH IP?
 * - FROM WHERE?
 * - WHEN TO FAILOVER?
 */


/**
 * ================================ DNS LOOKUP (REAL INTERNET FLOW) ================================
 *
 * When user types:
 *   https://example.com
 *
 * Actual lookup path:
 *
 * Browser Cache
 *   ↓
 * OS Cache
 *   ↓
 * DNS Resolver (ISP / Public)
 *   ↓
 * Root Server
 *   ↓
 * TLD Server
 *   ↓
 * Authoritative DNS
 *
 * IMPORTANT:
 * - Resolver caches results aggressively
 * - Root/TLD are rarely hit
 */


/**
 * ================================ WHY DNS IS FAST (DESPITE LOOKUPS) ================================
 *
 * Reason:
 * - CACHING at multiple levels
 *
 * 90%+ DNS queries:
 * - Answered from cache
 *
 * Only cache MISS triggers full lookup
 */


/**
 * ================================ DNS CACHING (DEEP) ================================
 *
 * Caching Layers:
 * ---------------------------------------------------------
 * 1) Browser cache
 * 2) OS cache
 * 3) Resolver cache
 * 4) CDN DNS cache
 *
 * Each layer respects TTL
 */


/**
 * ================================ TTL TRADE-OFF ================================
 *
 * LOW TTL:
 * ---------------------------------------------------------
 * ✔ Faster failover
 * ❌ More DNS queries
 *
 * HIGH TTL:
 * ---------------------------------------------------------
 * ✔ Better performance
 * ❌ Slow changes propagation
 *
 * System design rule:
 * ---------------------------------------------------------
 * - Static IPs → High TTL
 * - Dynamic systems → Low TTL
 */


/**
 * ================================ DNS PROPAGATION (MYTH BUSTING) ================================
 *
 * MYTH:
 * - "DNS takes 24–48 hours to propagate"
 *
 * REALITY:
 * - DNS updates depend on TTL
 * - Some caches ignore TTL (bad actors)
 *
 * In practice:
 * - Minutes to hours
 */


/**
 * ================================ GEODNS (LOCATION-BASED ROUTING) ================================
 *
 * GeoDNS:
 * ---------------------------------------------------------
 * - Returns DIFFERENT IPs based on user location
 *
 * Example:
 * - User from India → India server IP
 * - User from US → US server IP
 *
 * How DNS knows location:
 * - Based on resolver IP
 */


/**
 * ================================ WHY GEODNS EXISTS ================================
 *
 * Problems it solves:
 * ---------------------------------------------------------
 * ✔ Lower latency
 * ✔ Faster response
 * ✔ Regional isolation
 *
 * Used by:
 * - Global websites
 * - CDNs
 */


/**
 * ================================ ANYCAST DNS (VERY IMPORTANT) ================================
 *
 * Anycast:
 * ---------------------------------------------------------
 * - SAME IP address
 * - Advertised from MULTIPLE locations
 *
 * Routing decides:
 * - Nearest server automatically
 *
 * User thinks:
 * - "Same IP"
 *
 * Network reality:
 * - Different physical server
 */


/**
 * ================================ ANYCAST vs GEODNS ================================
 *
 * GeoDNS:
 * - DNS decides IP
 * - Based on geography
 *
 * Anycast:
 * - Network routing decides
 * - Faster, simpler
 *
 * Modern systems:
 * - Use BOTH
 */


/**
 * ================================ FAILOVER DNS ================================
 *
 * Problem:
 * ---------------------------------------------------------
 * - Primary server goes down
 *
 * Failover DNS:
 * ---------------------------------------------------------
 * - DNS switches traffic to backup IP
 *
 * Methods:
 * - Health checks
 * - Low TTL
 */


/**
 * ================================ DNS + LOAD BALANCER RELATIONSHIP ================================
 *
 * IMPORTANT:
 * ---------------------------------------------------------
 * DNS ≠ Load Balancer
 *
 * DNS:
 * - Decides WHERE to go (region)
 *
 * Load Balancer:
 * - Decides WHICH server (inside region)
 *
 * Flow:
 * ---------------------------------------------------------
 * User → DNS → Region IP
 * User → Load Balancer → Backend server
 */


/**
 * ================================ DNS + CDN RELATIONSHIP ================================
 *
 * CDN heavily depends on DNS
 *
 * How CDN works at DNS level:
 * ---------------------------------------------------------
 * example.com
 *   ↓
 * CNAME → cdn-provider.net
 *   ↓
 * CDN DNS returns nearest edge IP
 *
 * CDN happens BEFORE load balancer
 */


/**
 * ================================ DNS SECURITY (BRIEF) ================================
 *
 * DNS threats:
 * ---------------------------------------------------------
 * - DNS spoofing
 * - Cache poisoning
 *
 * Mitigation:
 * ---------------------------------------------------------
 * - DNSSEC
 * - Trusted resolvers
 */


/**
 * ================================ WHEN DNS BECOMES A BOTTLENECK ================================
 *
 * DNS outages:
 * ---------------------------------------------------------
 * - Entire internet services go down
 *
 * Reason:
 * - DNS is a single point of entry
 *
 * Best practice:
 * ---------------------------------------------------------
 * - Multiple DNS providers
 * - Anycast
 * - Low TTL for critical services
 */


/**
 * ================================ ONE-LINE SUMMARY ================================
 *
 * Advanced DNS:
 * - Controls global traffic
 * - Enables CDN
 * - Enables failover
 * - Affects latency & availability
 *
 * DNS is NOT just a lookup system.
 * It is a TRAFFIC STEERING SYSTEM.
 */
