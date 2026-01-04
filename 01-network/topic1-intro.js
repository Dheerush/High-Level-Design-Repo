// =============================== Introduction to Computer Networks ===============================

/**
 * WHAT IS A COMPUTER NETWORK?
 * - A computer network is a collection of interconnected devices (computers, servers, routers, switches)
 *   that communicate with each other to share data, resources, and services.
 * - The Internet is the largest network of networks (a global interconnection of smaller networks).
 */


/**
 * ====================================== HISTORICAL EVOLUTION ======================================
 *
 * 1. Cold War Era (1960s)
 * - The U.S. Department of Defense funded research to build a communication system that could survive partial failures (e.g., nuclear attacks). *
 * - This research was led by DARPA (Defense Advanced Research Projects Agency). *
 * - DARPA developed ARPANET, the first packet-switching network.
 *
 * - Unlike telephone networks (circuit switching),
 *   ARPANET used PACKET SWITCHING:
 *     → Data is broken into small packets
 *     → Packets travel independently via different paths
 *     → Destination reassembles them
 *
 * - This made the network:
 *     ✔ Fault-tolerant
 *     ✔ Scalable
 *     ✔ Efficient
 *
 * ➜ Packet switching became the foundation of the modern Internet.
 */


/**
 * 2. Key Milestones
 * - 1971: The first email was sent, introducing the '@' symbol for addressing.
 *
 * - 1983:
 *   ➜ Adoption of TCP/IP as the standard communication protocol for ARPANET.
 *   ➜ This date is considered the "birth of the Internet".
 *
 * - 1989–1990:
 *   Tim Berners-Lee invented the World Wide Web (WWW).
 *   ➜ Introduced:
 *     - URLs
 *     - HTTP
 *     - HTML
 *
 * - 1993:
 *   The first popular graphical web browser (Mosaic) was released,
 *   making the web accessible to non-technical users.
 *
 * - 1998: Google was founded, revolutionizing information discovery on the Internet.
 */


/**
 * ====================================== HOW INTERNET ACCESS WORKS ======================================
 *
 * The Internet is built in layers of ownership and responsibility.
 *
 * 1. Tier-1 ISPs (Internet Backbone)
 * ---------------------------------------------------------
 * - Large global providers that own massive infrastructure:
 *     → Undersea fiber-optic cables
 *     → High-capacity data links
 * - They peer with each other directly (no one pays anyone).
 *
 * - Example role:
 *     "They form the highways of the Internet."
 *
 *
 * 2. Tier-2 ISPs
 * ---------------------------------------------------------
 * - Regional or national providers.
 * - Buy bandwidth from Tier-1 ISPs.
 * - May also peer with other Tier-2 networks.
 * - Serve:
 *     → Enterprises
 *     → Governments
 *     → Smaller ISPs
 *
 *
 * 3. Tier-3 ISPs (Last Mile)
 * ---------------------------------------------------------
 * - Local ISPs that connect END USERS.
 * - Technologies:
 *     → Fiber
 *     → DSL
 *     → Cable
 *     → Mobile (4G / 5G)
 *
 * - This is known as the "last-mile connectivity" problem.
 */


/**
 * ====================================== EVOLUTION OF THE WEB ======================================
 *
 * NOTE:
 * - Internet ≠ Web
 * - Internet = Network infrastructure
 * - Web = Application layer built on top of the Internet
 */


/**
 * WEB 1.0 (1990s – early 2000s) — "READ-ONLY WEB"
 * - Static web pages
 * - One-way communication
 * - Content published by a few, consumed by many
 *
 * Examples:
 * - Personal websites
 * - Company information pages
 *
 * Tech Stack:
 * - HTML
 * - Basic HTTP
 */


/**
 * WEB 2.0 (2004 – Present) — "READ & WRITE WEB"
 * - Interactive and dynamic web
 * - User-generated content
 * - Social media and SaaS platforms
 *
 * Examples:
 * - YouTube
 * - Facebook
 * - Twitter
 * - Cloud-based applications
 *
 * Key Characteristics:
 * - Centralized servers
 * - Platforms own user data
 * - APIs, AJAX, REST
 */


/**
 * WEB 3.0 (Emerging) — "READ, WRITE & OWN"
 * - Decentralized web
 * - Users own their data and identity
 * - Trust enforced via cryptography instead of central authorities
 *
 * Core Ideas:
 * - Blockchain
 * - Smart contracts
 * - Decentralized identity (DID)
 *
 * Goals:
 * - Reduce dependency on centralized platforms
 * - Increase transparency and trust
 */


/**
 * ====================================== WHY NETWORKING MATTERS IN SYSTEM DESIGN ======================================
 *
 * - Every distributed system depends on networking:
 *     ✔ Latency
 *     ✔ Bandwidth
 *     ✔ Fault tolerance
 *     ✔ Scalability
 *
 * - Concepts like:
 *     → Load balancers
 *     → CDNs
 *     → Microservices
 *     → Caching
 *     → Messaging systems
 *
 *   are all BUILT on networking fundamentals.
 */





/**
 * ====================================== INTERVIEW QUESTIONS: COMPUTER NETWORKS (20) ======================================
 *
 * 1. What is a computer network, and why do we need it? 
 * 2. What is the difference between the Internet and the World Wide Web? 
 * 3. Why was ARPANET created, and what real-world problem was it solving? 
 * 4. What is packet switching, and how is it different from circuit switching? 
 * 5. Why is packet switching considered more fault-tolerant?*
 * 6. What role did DARPA play in the evolution of computer networks?
 * 7. Why is the adoption of TCP/IP in 1983 considered the birth of the Internet?
 * 8. What problems did TCP/IP solve compared to earlier networking approaches?
 * 9. What did Tim Berners-Lee invent, and why was it revolutionary?
 * 10. How did the invention of the web browser change Internet adoption?
 
 * 11. What are Tier-1, Tier-2, and Tier-3 ISPs, and how do they differ?
 * 12. What is meant by “last-mile connectivity,” and why is it challenging?
 * 13. How does data typically travel from a user’s device to a website server?
 * 14. Why do Tier-1 ISPs peer with each other instead of paying for traffic?
 * 15. What are the key differences between Web 1.0 and Web 2.0?
 * 16. What technical changes enabled the transition from Web 1.0 to Web 2.0?
 * 17. What problems of Web 2.0 does Web 3.0 aim to solve?
 * 18. Why is decentralization a core idea of Web 3.0?
 * 19. Why is networking knowledge critical for system design interviews?
 * 20. How do latency, bandwidth, and fault tolerance impact distributed systems?
 * 
 * 
 * INTERVIEW TIP:
 * - Always explain networking concepts using real-life analogies
 * - Connect fundamentals (packet switching, ISPs, TCP/IP) to system design components
 */





