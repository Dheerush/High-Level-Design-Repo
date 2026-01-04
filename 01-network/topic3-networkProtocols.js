// ====================================== NETWORK PROTOCOLS ======================================

/**
 * WHAT IS A NETWORK PROTOCOL?
 * ---------------------------------------------------------
 * - A network protocol is a SET OF RULES that define:
 *    ✔ How data is formatted
 *    ✔ How data is transmitted
 *    ✔ How errors are handled
 *    ✔ How devices identify each other
 *
 * - Without protocols, different systems could not communicate reliably.
 */


/**
 * ====================================== APPLICATION LAYER PROTOCOLS ======================================
 *
 * - Application-layer protocols define how APPLICATIONS communicate over the network.
 * - They sit at:
 *     → OSI Layer 7
 *     → TCP/IP Application Layer
 *
 * - Used directly by:
 *     → Browsers
 *     → Email clients
 *     → File transfer tools
 *     → Backend services
 */


/**
 * --------------------------- 1) WEB & FILE TRANSFER PROTOCOLS ---------------------------
 */

/**
 * HTTP (HyperText Transfer Protocol)
 * - Stateless request-response protocol
 * - Used for communication between:
 *     Client (browser/app) ↔ Server
 *
 * Characteristics:
 * - Text-based
 * - Stateless (each request is independent)
 * - Uses TCP
 *
 * Common Methods:
 * - GET, POST, PUT, DELETE
 *
 * Used in:
 * - Websites
 * - REST APIs
 */


/**
 * HTTPS (HTTP Secure)
 * - HTTP + Encryption (TLS/SSL)
 *
 * Provides:
 * - Data encryption
 * - Data integrity
 * - Authentication
 *
 * WHY HTTPS?
 * - Prevents:
 *     ❌ Man-in-the-middle attacks
 *     ❌ Data tampering
 *
 * Mandatory for:
 * - Login forms
 * - Payments
 * - Modern browsers (SEO + security)
 */


/**
 * FTP (File Transfer Protocol)
 * - Used to transfer files between systems
 *
 * Characteristics:
 * - Separate control and data channels
 * - Less secure (credentials sent in plaintext)
 *
 * Use cases:
 * - File uploads/downloads
 * - Legacy systems
 */


/**
 * NFS (Network File System)
 * - Allows a system to access files over a network
 *   as if they were local files.
 *
 * Used in:
 * - Distributed systems
 * - Shared storage environments
 */


/**
 * --------------------------- 2) EMAIL & REMOTE COMMUNICATION PROTOCOLS ---------------------------
 */


/**
 * SMTP (Simple Mail Transfer Protocol)
 * - Used for SENDING emails
 *
 * Flow:
 * - Client → Mail Server → Recipient Mail Server
 *
 * NOTE:
 * - SMTP is only for sending, not retrieving emails
 */


/**
 * IMAP (Internet Message Access Protocol)
 * - Used for RECEIVING emails
 *
 * Characteristics:
 * - Emails remain on the server
 * - Syncs across multiple devices
 *
 * Used when:
 * - Same email account accessed on phone + laptop
 */


/**
 * POP3 (Post Office Protocol v3)
 * - Used for RECEIVING emails
 *
 * Characteristics:
 * - Downloads emails to local machine
 * - Often deletes from server
 *
 * Difference from IMAP:
 * - POP3 = local storage
 * - IMAP = server-based storage
 */


/**
 * Telnet
 * - Used for remote login to systems
 *
 * Characteristics:
 * - Sends data in PLAINTEXT
 * - NOT secure
 *
 * Status:
 * - Obsolete
 * - Replaced by SSH
 */


/**
 * SSH (Secure Shell)
 * - Secure remote login protocol
 *
 * Provides:
 * - Encrypted communication
 * - Secure command execution
 *
 * Used in:
 * - Server administration
 * - DevOps workflows
 */


/**
 * --------------------------- 3) NETWORK MANAGEMENT & CONFIGURATION PROTOCOLS ---------------------------
 */


/**
 * DNS (Domain Name System)
 * - Translates:
 *     Domain Name → IP Address
 *
 * Example:
 * - google.com → 142.250.x.x
 *
 * Why DNS?
 * - Humans remember names
 * - Computers use IPs
 *
 * DNS is:
 * - Hierarchical
 * - Distributed
 */


/**
 * DHCP (Dynamic Host Configuration Protocol)
 * - Automatically assigns:
 *     → IP address
 *     → Subnet mask
 *     → Default gateway
 *     → DNS server
 *
 * Used when:
 * - A device joins a network
 *
 * Eliminates:
 * - Manual IP configuration
 */


/**
 * ====================================== TRANSPORT LAYER PROTOCOLS ======================================
 *
 * - Responsible for END-TO-END communication
 */


/**
 * TCP (Transmission Control Protocol)
 * - Reliable
 * - Connection-oriented
 *
 * Guarantees:
 * - Ordered delivery
 * - No data loss
 * - Error correction
 *
 * Used in:
 * - HTTP/HTTPS
 * - Email
 * - File transfer
 */


/**
 * UDP (User Datagram Protocol)
 * - Fast
 * - Connectionless
 *
 * Characteristics:
 * - No delivery guarantee
 * - No ordering
 *
 * Used in:
 * - Video streaming
 * - Online gaming
 * - DNS queries
 */


/**
 * ====================================== NETWORK LAYER PROTOCOLS ======================================
 */


/**
 * IP (Internet Protocol)
 * - Responsible for routing packets across networks
 *
 * Characteristics:
 * - Best-effort delivery
 * - No guarantee of delivery
 *
 * Versions:
 * - IPv4
 * - IPv6
 */


/**
 * ICMP (Internet Control Message Protocol)
 * - Used for error reporting and diagnostics
 *
 * Example:
 * - ping command
 */


/**
 * ====================================== WHY PROTOCOLS MATTER IN SYSTEM DESIGN ======================================
 *
 * - Choosing correct protocol affects:
 *     ✔ Performance
 *     ✔ Reliability
 *     ✔ Security
 *
 * Examples:
 * - REST APIs → HTTP over TCP
 * - Real-time chat → WebSockets
 * - Video calls → UDP
 * - Secure systems → HTTPS + SSH
 */

/**
 * ====================================== REAL-TIME & MODERN API PROTOCOLS (DEEP UNDERSTANDING) ======================================
 */


/**
 * ================================ WEB SOCKETS =================================
 *
 * WHY WE NEEDED IT?
 * ---------------------------------------------------------
 * Problem with HTTP:
 * - HTTP is request → response
 * - Server CANNOT push data to client on its own
 *
 * This breaks real-time needs:
 * ❌ Chat messages
 * ❌ Live notifications
 * ❌ Stock prices
 *
 * Earlier workaround:
 * - Polling / Long polling
 * - Inefficient and wasteful
 *
 *
 * WHAT WEBSOCKETS FIXED
 * ---------------------------------------------------------
 * - Persistent connection
 * - Full-duplex (both sides talk anytime)
 * - No repeated HTTP handshakes
 *
 *
 * HOW IT SOLVES THE PROBLEM
 * ---------------------------------------------------------
 * - Single TCP connection stays OPEN
 * - Server can PUSH data instantly
 *
 *
 * WHERE YOU SEE THIS IN REAL LIFE
 * ---------------------------------------------------------
 * - WhatsApp Web
 * - Slack
 * - Live notifications
 * - Real-time dashboards
 *
 *
 * SYSTEM DESIGN INSIGHT
 * ---------------------------------------------------------
 * - Use when:
 *   ✔ Low latency updates
 *   ✔ Continuous data flow
 * - Do NOT use for simple CRUD APIs
 */


/**
 * ================================ gRPC =================================
 *
 * WHY gRPC WAS INTRODUCED
 * ---------------------------------------------------------
 * REST over HTTP/1.1 problems:
 * ❌ Text-based JSON (heavy payloads)
 * ❌ Multiple network calls
 * ❌ No strict contract
 * ❌ Slow service-to-service communication
 *
 * These issues appear at SCALE:
 * - 100s of microservices
 * - High internal traffic
 *
 *
 * WHAT gRPC FIXED
 * ---------------------------------------------------------
 * - Binary communication (Protocol Buffers)
 * - Strong API contracts
 * - Faster serialization/deserialization
 * - Built-in streaming
 *
 *
 * HOW gRPC SOLVES IT
 * ---------------------------------------------------------
 * - Uses HTTP/2:
 *   ✔ Multiplexing
 *   ✔ Header compression
 * - Uses .proto files:
 *   ✔ Strict schema
 *   ✔ Auto code generation
 *
 *
 * WHERE YOU SEE THIS IN REAL LIFE
 * ---------------------------------------------------------
 * - Google internal services
 * - Netflix backend
 * - Kubernetes internals
 * - Payment & recommendation engines
 *
 *
 * SYSTEM DESIGN INSIGHT
 * ---------------------------------------------------------
 * - REST → external APIs
 * - gRPC → internal microservices
 *
 * Interview line:
 * 👉 "gRPC exists because REST is inefficient at scale for service-to-service calls."
 */


/**
 * ================================ HTTP/2 =================================
 *
 * WHY HTTP/1.1 WAS NOT ENOUGH
 * ---------------------------------------------------------
 * - One request blocks another
 * - Multiple TCP connections needed
 * - High latency for modern web apps
 *
 *
 * WHAT HTTP/2 FIXED
 * ---------------------------------------------------------
 * - Multiplexing (many requests, one connection)
 * - Header compression
 * - Binary framing
 *
 *
 * LIMITATION STILL EXISTS
 * ---------------------------------------------------------
 * ❌ TCP Head-of-Line blocking
 *
 *
 * WHERE YOU SEE THIS
 * ---------------------------------------------------------
 * - Most modern websites today
 * - Browsers + CDNs
 */


/**
 * ================================ HTTP/3 (QUIC) =================================
 *
 * WHY HTTP/3 WAS INTRODUCED
 * ---------------------------------------------------------
 * Problem:
 * - TCP Head-of-Line blocking
 * - Packet loss slows everything
 *
 *
 * WHAT HTTP/3 FIXED
 * ---------------------------------------------------------
 * - Runs on QUIC (UDP-based)
 * - Independent streams
 * - Faster handshakes
 *
 *
 * HOW IT SOLVES IT
 * ---------------------------------------------------------
 * - Packet loss affects ONLY that stream
 * - No TCP retransmission blocking
 *
 *
 * WHERE YOU SEE THIS
 * ---------------------------------------------------------
 * - YouTube
 * - Google Search
 * - Cloudflare-backed sites
 *
 *
 * SYSTEM DESIGN INSIGHT
 * ---------------------------------------------------------
 * - Modern web is moving BACK to UDP
 * - Reliability handled at application layer
 */


/**
 * ================================ MQTT =================================
 *
 * WHY MQTT WAS INTRODUCED
 * ---------------------------------------------------------
 * Problem with HTTP:
 * ❌ Too heavy for small devices
 * ❌ Too much bandwidth usage
 *
 *
 * WHAT MQTT FIXED
 * ---------------------------------------------------------
 * - Extremely lightweight protocol
 * - Publish / Subscribe model
 * - Works on unreliable networks
 *
 *
 * HOW IT SOLVES IT
 * ---------------------------------------------------------
 * - Minimal packet size
 * - Asynchronous communication
 *
 *
 * WHERE YOU SEE THIS
 * ---------------------------------------------------------
 * - Smart home devices
 * - Sensors
 * - IoT platforms
 *
 *
 * SYSTEM DESIGN INSIGHT
 * ---------------------------------------------------------
 * - Designed for:
 *   ✔ Low power
 *   ✔ Low bandwidth
 */


/**
 * ====================================== PROTOCOL EVOLUTION SUMMARY ======================================
 *
 * HTTP        → Simple web pages
 * HTTP/2      → Faster web
 * HTTP/3      → Loss-resistant web
 *
 * REST        → Public APIs
 * gRPC        → Internal microservices
 *
 * Polling     → Inefficient real-time
 * WebSockets → Real-time communication
 *
 * HTTP        → Heavy for IoT
 * MQTT       → IoT-friendly
 */


/**
 * ====================================== INTERVIEW GOLD QUESTIONS ======================================
 *
 * Q: Why not use REST everywhere?
 * A: REST is inefficient for high-volume internal communication.
 *
 * Q: Why does gRPC use HTTP/2?
 * A: Multiplexing + performance.
 *
 * Q: Why HTTP/3 uses UDP?
 * A: To avoid TCP Head-of-Line blocking.
 *
 * Q: Why WebSockets instead of HTTP polling?
 * A: Real-time, server push, low latency.
 */
