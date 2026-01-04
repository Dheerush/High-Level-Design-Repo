// ====================================== TCP vs UDP ======================================

/**
 * TRANSPORT LAYER OVERVIEW
 * - TCP and UDP operate at the TRANSPORT LAYER (OSI Layer 4).
 * - Their job:
 *     → End-to-end communication
 *     → Decide HOW data should be delivered
 *
 * KEY QUESTION:
 * - Do we want RELIABILITY or SPEED?
 */


/**
 * ====================================== TCP (Transmission Control Protocol) ======================================
 *
 * TCP is a:
 * ✔ Reliable
 * ✔ Ordered
 * ✔ Connection-oriented protocol
 */


/**
 * CORE FEATURES OF TCP
 * 1. Connection-Oriented
 *    - Requires a connection BEFORE data transfer
 *    - Uses 3-Way Handshake:
 *        1) SYN
 *        2) SYN-ACK
 *        3) ACK
 *
 * 2. Reliable Delivery
 *    - Guarantees NO data loss
 *    - Uses acknowledgments (ACKs)
 *    - Retransmits lost packets
 *
 * 3. Ordered Delivery
 *    - Data arrives in the SAME order as sent
 *
 * 4. Flow Control
 *    - Prevents sender from overwhelming receiver
 *    - Uses sliding window mechanism
 *
 * 5. Congestion Control
 *    - Adjusts sending rate based on network congestion
 */


/**
 * TCP DATA FLOW (SIMPLIFIED)
 * Sender:
 *   - Break data into segments
 *   - Number them (sequence numbers)
 *   - Send → wait for ACK
 *
 * Receiver:
 *   - Receive segments
 *   - Send ACKs
 *   - Request retransmission if missing
 */


/**
 * TCP ADVANTAGES
 * ✔ Reliable
 * ✔ Data integrity
 * ✔ Ordered delivery
 *
 * TCP DISADVANTAGES
 * ❌ Slower (handshake + retransmissions)
 * ❌ Higher latency
 */


/**
 * TCP USE CASES
 * - HTTP / HTTPS
 * - REST APIs
 * - File transfers
 * - Email (SMTP, IMAP)
 * - Database connections
 */


/**
 * ====================================== UDP (User Datagram Protocol) ======================================
 *
 * UDP is a:
 * ✔ Fast
 * ✔ Connectionless
 * ✔ Unreliable protocol
 */


/**
 * CORE FEATURES OF UDP
 * 1. Connectionless
 *    - NO handshake
 *    - Data sent immediately
 *
 * 2. No Reliability
 *    - No ACKs
 *    - No retransmission
 *
 * 3. No Ordering
 *    - Packets may arrive out of order
 *
 * 4. No Congestion Control
 *    - Sender sends at full speed
 */


/**
 * UDP DATA FLOW (SIMPLIFIED)
 * Sender:
 *   - Send packets → forget
 *
 * Receiver:
 *   - Receive whatever arrives
 *   - Missing packets are IGNORED
 */


/**
 * UDP ADVANTAGES
 * ✔ Very fast
 * ✔ Low latency
 * ✔ Minimal overhead
 *
 * UDP DISADVANTAGES
 * ❌ Data loss possible
 * ❌ No ordering guarantee
 * ❌ No built-in reliability
 */


/**
 * UDP USE CASES
 * - Video streaming
 * - Online gaming
 * - Voice calls (VoIP)
 * - Live broadcasts
 * - DNS queries
 */


/**
 * ====================================== TCP vs UDP (SIDE-BY-SIDE COMPARISON) ======================================
 *
 * Feature                TCP                         UDP
 * ----------------------------------------------------------------
 * Connection             Connection-oriented         Connectionless
 * Reliability            Guaranteed                  Not guaranteed
 * Ordering               Maintained                  Not maintained
 * Speed                  Slower                      Faster
 * Latency                Higher                      Lower
 * Congestion Control     Yes                         No
 * Overhead               High                        Low
 */


/**
 * ====================================== REAL-WORLD INTUITION ======================================
 *
 * TCP:
 * - Like a PHONE CALL
 * - "Hello? Can you hear me?"
 * - "Repeat that, I missed it"
 *
 * UDP:
 * - Like LIVE TV
 * - If you miss a frame → move on
 */


/**
 * ====================================== SYSTEM DESIGN PERSPECTIVE ======================================
 *
 * WHEN TO USE TCP?
 * ---------------------------------------------------------
 * - Data must be correct
 * - Order matters
 * - Examples:
 *     ✔ Payments
 *     ✔ APIs
 *     ✔ Authentication
 *
 * 
 * WHEN TO USE UDP?
 * ---------------------------------------------------------
 * - Speed matters more than accuracy
 * - Real-time systems
 * - Examples:
 *     ✔ Video calls
 *     ✔ Gaming
 *     ✔ Live streaming
 */


/**
 * ====================================== IMPORTANT INTERVIEW INSIGHT ======================================
 *
 * Q: Why does HTTP use TCP?
 * - Web pages cannot tolerate missing data
 * - Correctness > Speed
 *
 * Q: Why does video streaming use UDP?
 * - Old frames are useless
 * - Speed > Perfect accuracy
 */


/**
 * ====================================== HEAD-OF-LINE BLOCKING ======================================
 *
 * TCP Problem:
 * - TCP guarantees ORDERED delivery
 * - If packet #3 is lost:
 *   → Packets #4, #5, #6 are WAITING
 *
 * This causes:
 * ❌ Increased latency
 * ❌ Slower user experience
 *
 * This is called:
 * - Head-of-Line (HOL) blocking
 *
 * Impact:
 * - A single lost packet delays everything behind it
 */


/**
 * ====================================== RETRANSMISSION vs LATENCY ======================================
 *
 * TCP:
 * - Lost packet → Retransmission
 * - Retransmission takes time (RTT delay)
 *
 * Result:
 * - Higher latency
 * - Poor performance in lossy networks
 *
 * UDP:
 * - No retransmission
 * - Application decides what to do
 *
 * System insight:
 * 👉 Reliability always comes at the cost of latency
 */


/**
 * ====================================== RELIABILITY OVER UDP (APPLICATION LEVEL) ======================================
 *
 * Important:
 * - UDP itself is unreliable
 * - BUT applications can build reliability on top
 *
 * Examples:
 * - Video apps recover only key frames
 * - Gaming apps resend critical updates
 *
 * Modern protocols:
 * - QUIC (used by HTTP/3)
 * - RTP (used in media streaming)
 *
 * Key idea:
 * 👉 UDP gives CONTROL to the application
 */


/**
 * ====================================== TCP vs UDP IN MODERN WEB ======================================
 *
 * HTTP/1.1:
 * - Runs over TCP
 * - Suffers from HOL blocking
 *
 * HTTP/2:
 * - Multiplexing over TCP
 * - Still affected by TCP-level HOL blocking
 *
 * HTTP/3:
 * - Runs over QUIC (UDP-based)
 * - Avoids TCP HOL blocking
 * - Faster connection establishment
 *
 * Interview insight:
 * 👉 Modern web is moving back to UDP (via QUIC)
 */


/**
 * ====================================== SYSTEM DESIGN DECISION MATRIX ======================================
 *
 * Choose TCP when:
 * - Data correctness is mandatory
 * - Loss is unacceptable
 * - Strong ordering is required
 *
 * Choose UDP when:
 * - Latency is critical
 * - Partial loss is acceptable
 * - Real-time interaction is required
 *
 * Choose UDP + custom reliability when:
 * - You want speed + selective reliability
 */


/**
 * ====================================== FINAL INTERVIEW ONE-LINERS ======================================
 *
 * - TCP trades speed for reliability.
 * - UDP trades reliability for speed.
 * - TCP suffers from head-of-line blocking.
 * - Modern protocols use UDP to avoid TCP limitations.
 * - Reliability always increases latency.
 */



