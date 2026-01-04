// ======================================= NETWORK MODELS: OSI vs TCP/IP =======================================

/**
 * WHY DO WE NEED NETWORK MODELS?
 * - Networking is complex → models divide responsibilities into layers.
 * - Each layer solves a specific problem.
 * - This provides:
 *    ✔ Abstraction
 *    ✔ Interoperability
 *    ✔ Easier debugging
 *    ✔ Vendor independence
 */


/**
 * ======================================= OSI MODEL =======================================
 *
 * OSI = Open Systems Interconnection
 * - Proposed by ISO (International Organization for Standardization) *
 * - Conceptual / Reference Model. NOT an implementation
 * - Used mainly for:
 *     → Learning
 *     → Teaching
 *     → Debugging (layer-wise thinking)
 *
 * Device 1                                                     Device 2
 * -----------------------------------------------------------------------------------------
 * 7. Application Layer ------------------------------------> 7. Application Layer
 * 6. Presentation Layer ----------------------------------> 6. Presentation Layer
 * 5. Session Layer ---------------------------------------> 5. Session Layer
 * 4. Transport Layer -------------------------------------> 4. Transport Layer
 * 3. Network Layer ---------------------------------------> 3. Network Layer
 * 2. Data Link Layer -------------------------------------> 2. Data Link Layer
 * 1. Physical Layer --------------------------------------> 1. Physical Layer
 */


/**
 * ============================== OSI LAYERS (TOP → BOTTOM) ==============================
 */

/**
 * 7️⃣ Application Layer
 * - Closest to the END USER
 * - Provides network services to applications
 *
 * Responsibilities:
 * - HTTP, HTTPS
 * - FTP
 * - SMTP
 * - DNS
 *
 * Examples:
 * - Browser making an HTTP request
 * - Email client sending mail
 *
 * NOTE:
 * - This is NOT the application itself (Chrome, WhatsApp)
 * - It is the NETWORK INTERFACE used by applications
 */


/**
 * 6️⃣ Presentation Layer
 * - Concerned with DATA FORMAT
 *
 * Responsibilities:
 * - Data encoding / decoding
 * - Encryption / Decryption
 * - Compression
 *
 * Examples:
 * - HTTPS encryption (TLS/SSL)
 * - JSON ↔ Binary conversion
 *
 * KEY IDEA:
 * - "How should the data LOOK?"
 */


/**
 * 5️⃣ Session Layer
 * - Manages communication SESSIONS
 *
 * Responsibilities:
 * - Session establishment
 * - Session maintenance
 * - Session termination
 *
 * Examples:
 * - Login session
 * - Video call session
 *
 * KEY IDEA:
 * - "Who is talking to whom, and for how long?"
 */


/**
 * 4️⃣ Transport Layer
 * - Ensures END-TO-END communication
 *
 * Responsibilities:
 * - Segmentation & reassembly
 * - Flow control
 * - Error control
 *
 * Protocols:
 * - TCP (reliable, ordered, connection-oriented)
 * - UDP (fast, connectionless)
 *
 * KEY QUESTION:
 * - "How should data be delivered?"
 */


/**
 * 3️⃣ Network Layer
 * - Responsible for ROUTING
 *
 * Responsibilities:
 * - Logical addressing (IP address)
 * - Path selection
 * - Packet forwarding
 *
 * Protocol:
 * - IP (Internet Protocol)
 *
 * Devices:
 * - Routers
 *
 * KEY QUESTION:
 * - "Which path should data take?"
 */


/**
 * 2️⃣ Data Link Layer
 * - Responsible for NODE-TO-NODE delivery
 *
 * Responsibilities:
 * - MAC addressing
 * - Frame creation
 * - Error detection
 *
 * Devices:
 * - Switches
 *
 * Examples:
 * - Ethernet
 * - ARP
 *
 * KEY QUESTION:
 * - "How do I reach the next hop?"
 */


/**
 * 1️⃣ Physical Layer
 * - Deals with PHYSICAL transmission
 *
 * Responsibilities:
 * - Bits (0s and 1s)
 * - Electrical signals
 * - Cables, connectors, voltages
 *
 * Examples:
 * - Fiber optics
 * - Copper wires
 * - Radio waves
 *
 * KEY QUESTION:
 * - "How are bits physically transmitted?"
 */


/**
 * ======================================= TCP/IP MODEL =======================================
 *
 * TCP/IP = Transmission Control Protocol / Internet Protocol
 *
 * - Practical / Implementation model
 * - Used by the REAL Internet
 * - Developed by DARPA
 *
 * Consists of 4 layers
 */


/**
 * TCP/IP LAYERS
 * 4. Application Layer
 * 3. Transport Layer
 * 2. Internet Layer
 * 1. Network Access Layer
 */


/**
 * ============================== TCP/IP LAYER DETAILS ==============================
 */


/**
 * 4️⃣ Application Layer (TCP/IP)
 * - Combines:
 *     OSI Application + Presentation + Session
 *
 * Protocols:
 * - HTTP / HTTPS
 * - FTP
 * - SMTP
 * - DNS
 */


/**
 * 3️⃣ Transport Layer
 * - Same as OSI Transport layer
 *
 * Protocols:
 * - TCP
 * - UDP
 */


/**
 * 2️⃣ Internet Layer
 * - Equivalent to OSI Network Layer
 *
 * Responsibilities:
 * - Logical addressing
 * - Routing
 *
 * Protocol:
 * - IP
 */


/**
 * 1️⃣ Network Access Layer
 * - Combines:
 *     OSI Data Link + Physical layers
 *
 * Responsibilities:
 * - Framing
 * - MAC addressing
 * - Physical transmission
 */


/**
 * ======================================= OSI vs TCP/IP COMPARISON =======================================
 *
 * OSI Model                     TCP/IP Model
 * 7 Layers                      4 Layers
 * Conceptual                    Practical
 * Used for learning             Used in real networks
 * Protocol-independent          Protocol-specific
 */


/**
 * ======================================= DATA FLOW (ENCAPSULATION) =======================================
 *
 * Sender Side:
 * Application Data
 * → Segment (Transport)
 * → Packet (Network)
 * → Frame (Data Link)
 * → Bits (Physical)
 *
 * Receiver Side:
 * Bits
 * → Frame
 * → Packet
 * → Segment
 * → Application Data
 */


/**
 * ======================================= WHY THIS MATTERS FOR SYSTEM DESIGN =======================================
 *
 * - Debugging mindset:
 *     ❌ Page not loading → App layer?
 *     ❌ Slow response → Transport / latency?
 *     ❌ Packet loss → Network?
 *
 * - Design decisions:
 *     ✔ TCP vs UDP
 *     ✔ Load balancers (L4 vs L7)
 *     ✔ HTTPS termination
 *     ✔ CDN placement
 */






/**
 * ====================================== INTERVIEW QUESTIONS: OSI vs TCP/IP (20) ======================================
 *
 * 1. Why do we need layered network models instead of a single monolithic design? 
 * 2. What problem does the OSI model solve from a learning and debugging perspective? 
 * 3. Why is the OSI model considered a conceptual or reference model?
 * 4. Who proposed the OSI model, and why was it never fully implemented in real networks?
 * 5. Why is the TCP/IP model considered more practical than the OSI model?
 * 6. How do the layers of the TCP/IP model map to the OSI model?
 * 7. Why does the TCP/IP Application layer combine three OSI layers?
 * 8. What responsibilities belong strictly to the Transport layer?
 * 9. How does TCP differ from UDP, and when would you choose one over the other?
 * 10. What role does the Network (Internet) layer play in routing data?
 *
 * 11. Why are IP addresses handled at the Network layer and not at the Data Link layer?
 * 12. What is the difference between logical addressing and physical (MAC) addressing?
 * 13. Why are switches associated with the Data Link layer and routers with the Network layer?
 * 14. What happens at the Physical layer, and why is it still critical despite being “low-level”?
 * 15. What is encapsulation, and how does data flow through layers on the sender side?
 
 * 16. What is decapsulation, and how does the receiver reconstruct the original data?
 * 17. How does understanding OSI layers help in debugging network issues?
 * 18. How do load balancers operate differently at Layer 4 vs Layer 7?
 * 19. Where does HTTPS encryption logically fit in the OSI and TCP/IP models?
 * 20. In system design interviews, why is TCP/IP preferred over OSI for real-world explanations?
 *
 * INTERVIEW TIP:
 * - Always explain issues layer by layer
 * - Use OSI for reasoning and TCP/IP for implementation examples
 */
