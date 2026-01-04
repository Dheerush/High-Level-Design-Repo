// ================================ LOAD BALANCING (HLD VERSION) ================================

/**
 * ================================ REAL PROBLEM (START HERE) ================================
 *
 * You built:
 * - dheerucoffee.com
 *
 * Initial setup:
 * - Single server
 * - Monolith app
 *
 * Everything works.
 *
 * Then:
 * ---------------------------------------------------------
 * - Marketing campaign
 * - App goes viral
 * - Traffic spikes from 100 → 100,000 users/day
 */


/**
 * ================================ FAILURE WITHOUT LOAD BALANCING ================================
 *
 * What ACTUALLY breaks:
 *
 * 1️⃣ CPU Saturation
 * - Too many concurrent requests
 * - Server becomes slow
 *
 * 2️⃣ Memory Exhaustion
 * - Too many open connections
 * - App crashes
 *
 * 3️⃣ Single Point of Failure
 * - If server dies → BUSINESS DOWN
 *
 * 4️⃣ No Horizontal Scaling
 * - You cannot "add another server"
 *
 * This is NOT a scaling problem.
 * This is a TRAFFIC DISTRIBUTION problem.
 */


/**
 * ================================ LOAD BALANCING (REAL DEFINITION) ================================
 *
 * Load Balancing is NOT:
 * - Just "sending traffic to many servers"
 *
 * Load Balancing IS:
 * ---------------------------------------------------------
 * - A TRAFFIC CONTROL LAYER
 * - That decides:
 *     → WHICH server should handle THIS request
 *     → BASED ON system state
 */


/**
 * ================================ SYSTEM DESIGN VIEW ================================
 *
 * Client NEVER sees backend servers.
 *
 * Client
 *   ↓
 * Load Balancer (single public entry)
 *   ↓
 * Pool of backend servers
 *
 * Backend servers:
 * - Can be added
 * - Can be removed
 * - Can fail
 *
 * WITHOUT affecting users
 */


/**
 * ================================ WHY LOAD BALANCER IS A REVERSE PROXY ================================
 *
 * A reverse proxy:
 * - Represents servers
 * - Hides internal topology
 *
 * Load balancer is a SPECIALIZED reverse proxy
 * whose PRIMARY responsibility is:
 * ---------------------------------------------------------
 * - Traffic distribution
 */


/**
 * ================================ REAL PRODUCTION USE CASES ================================
 *
 * Use Case 1: Traffic Spike
 * ---------------------------------------------------------
 * - Flash sale
 * - Breaking news
 * - Viral post
 *
 * Load balancer:
 * - Smoothly spreads load
 * - Prevents server collapse
 *
 *
 * Use Case 2: Server Failure
 * ---------------------------------------------------------
 * - One backend crashes
 *
 * Load balancer:
 * - Stops routing traffic to it
 * - Users DON’T notice
 *
 *
 * Use Case 3: Zero-Downtime Deployment
 * ---------------------------------------------------------
 * - Deploy new version
 *
 * Load balancer:
 * - Gradually shifts traffic
 * - Old version drained safely
 */


/**
 * ================================ LOAD BALANCING ALGORITHMS (WHY THEY EXIST) ================================
 *
 * Algorithms exist because:
 * ---------------------------------------------------------
 * - NOT all servers are equal
 * - NOT all requests are equal
 */


/**
 * ROUND ROBIN (WHEN IT FAILS)
 * ---------------------------------------------------------
 * Good:
 * - Equal servers
 * - Short requests
 *
 * Bad:
 * - Long requests
 * - Mixed workloads
 *
 * HLD Insight:
 * - Simple ≠ correct
 */


/**
 * LEAST CONNECTIONS (WHY IT EXISTS)
 * ---------------------------------------------------------
 * Problem:
 * - Some requests take longer
 *
 * Solution:
 * - Send traffic to least busy server
 *
 * Used in:
 * - APIs
 * - Streaming
 */


/**
 * WEIGHTED ALGORITHMS (REALITY)
 * ---------------------------------------------------------
 * Reality:
 * - Servers have different CPU/RAM
 *
 * Weighted LB:
 * - Strong servers get more traffic
 *
 * This is COMMON in production.
 */


/**
 * IP HASH (SESSION PROBLEM)
 * ---------------------------------------------------------
 * Problem:
 * - User session stored in memory
 *
 * Solution:
 * - Route same user to same server
 *
 * Trade-off:
 * - Reduces load distribution quality
 *
 * HLD Insight:
 * - Better solution → external session store (Redis)
 */


/**
 * ================================ L4 vs L7 (ARCHITECTURAL DECISION) ================================
 *
 * THIS IS NOT THEORY — THIS IS A DESIGN CHOICE
 */


/**
 * L4 LOAD BALANCER
 * ---------------------------------------------------------
 * Operates at:
 * - TCP / UDP
 *
 * Pros:
 * - Extremely fast
 * - Low latency
 *
 * Cons:
 * - No routing logic
 *
 * Used when:
 * - Very high traffic
 * - Simple routing
 */


/**
 * L7 LOAD BALANCER
 * ---------------------------------------------------------
 * Operates at:
 * - HTTP / HTTPS
 *
 * Pros:
 * - Smart routing
 * - Path-based routing
 *
 * Cons:
 * - More overhead
 *
 * Used when:
 * - APIs
 * - Microservices
 */


/**
 * ================================ HTTPS TERMINATION (WHY AT LOAD BALANCER) ================================
 *
 * Problem:
 * - Managing certificates on every server
 *
 * Solution:
 * - TLS termination at LB
 *
 * Benefits:
 * ---------------------------------------------------------
 * ✔ Centralized security
 * ✔ Easier certificate rotation
 * ✔ Backend simplicity
 */


/**
 * ================================ HEALTH CHECKS (NON-NEGOTIABLE) ================================
 *
 * Load balancer continuously checks:
 * - Is server responding?
 * - Is it healthy?
 *
 * If NOT:
 * - Traffic is stopped IMMEDIATELY
 *
 * This is why users don’t see failures.
 */


/**
 * ================================ WHAT LOAD BALANCER DOES NOT SOLVE ================================
 *
 * ❌ It does NOT fix bad code
 * ❌ It does NOT fix slow DB
 * ❌ It does NOT replace caching
 *
 * Load balancer solves:
 * ---------------------------------------------------------
 * - Traffic distribution
 * - Availability
 */


/**
 * ================================ REAL-WORLD TOOLS ================================
 *
 * You usually DO NOT write LB code.
 *
 * You use:
 * ---------------------------------------------------------
 * - NGINX / HAProxy
 * - Cloud-managed LBs
 *
 * Why?
 * - Battle-tested
 * - Highly optimized
 * - Fault tolerant
 */


/**
 * ================================ HLD SUMMARY (INTERVIEW READY) ================================
 *
 * Load Balancer:
 * ---------------------------------------------------------
 * - Entry point of system
 * - Traffic controller
 * - Failure isolator
 * - Scaling enabler
 *
 * If a system has NO load balancer:
 * ---------------------------------------------------------
 * ❌ It is not production-ready
 */





/**
 * ===================== INTERVIEW QUESTIONS (NETWORKING – HLD FOCUS) =====================
 *
 * These questions test:
 * - Architectural thinking
 * - Real-world trade-offs
 * - Common confusions
 * - Production experience
 */


/**
 * 1. Is an API Gateway a Load Balancer?
 *    - If not, how are they different?
 *    - Can an API Gateway internally use a load balancer?
 */


/**
 * 2. Why can’t DNS replace a Load Balancer?
 *    - DNS already returns IPs, so why do we still need LBs?
 */


/**
 * 3. DNS vs Load Balancer:
 *    - Who decides the REGION?
 *    - Who decides the SERVER?
 */


/**
 * 4. L4 vs L7 Load Balancer:
 *    - When would you choose L4 over L7?
 *    - Give a real production example.
 */


/**
 * 5. Why is HTTPS usually terminated at the Load Balancer?
 *    - Why not terminate TLS at every backend server?
 */


/**
 * 6. What problems does a Load Balancer NOT solve?
 *    - Why can’t it fix slow APIs or database bottlenecks?
 */


/**
 * 7. What happens if the Load Balancer itself goes down?
 *    - How do real systems avoid this single point of failure?
 */


/**
 * 8. Sticky Sessions:
 *    - Why do they exist?
 *    - Why are they considered a bad long-term solution?
 */


/**
 * 9. How does a CDN relate to DNS and Load Balancing?
 *    - Which one comes first in request flow?
 */


/**
 * 10. Why does DNS caching not break load balancing or failover?
 *     - How do TTL values affect availability?
 */


/**
 * 11. Can you build a highly available system without a Load Balancer?
 *     - In which rare cases might this be acceptable?
 */


/**
 * 12. Reverse Proxy vs Forward Proxy:
 *     - Who uses which and why?
 */


/**
 * 13. Why do microservices almost always use an API Gateway?
 *     - Why is a simple load balancer not enough?
 */


/**
 * 14. What is mTLS and why is it needed if HTTPS already exists?
 *     - Where is mTLS commonly used?
 */


/**
 * 15. Public vs Private IP:
 *     - Why are backend services usually private?
 *     - How do they access the internet?
 */


/**
 * 16. NAT Gateway:
 *     - Why does it exist?
 *     - What problem does it solve in cloud networking?
 */


/**
 * 17. Why does a system need both CDN and Load Balancer?
 *     - Aren’t they doing the same thing?
 */


/**
 * 18. How would you design request flow for:
 *     - A global e-commerce website
 *     - Millions of users
 */


/**
 * 19. What happens during a sudden traffic spike?
 *     - Which components protect the system first?
 */


/**
 * 20. Where does caching fit in networking?
 *     - Browser cache
 *     - CDN cache
 *     - Server cache
 */


/**
 * 21. Why is DNS considered a critical dependency?
 *     - What happens if DNS fails?
 */


/**
 * 22. How do services inside a cluster find each other?
 *     - Why can’t they rely on hard-coded IPs?
 */


/**
 * 23. What is Anycast DNS?
 *     - Why is it better than GeoDNS in some cases?
 */


/**
 * 24. How does zero-downtime deployment actually work?
 *     - Which networking components enable it?
 */


/**
 * 25. If a user reports “site is slow”, how do you debug it?
 *     - Network-level approach (step-by-step)
 */
