// =========================== COMMON NETWORK TERMINOLOGIES & CONCEPTS ===========================

/**
 * This section covers:
 * - Core networking terms
 * - IP versions (IPv4 / IPv6)
 * - Network topologies
 * - Network types (LAN, WAN, etc.)
 * - WWW and how it works
 *
 * These are FOUNDATION concepts for:
 * - Networking
 * - System Design
 * - Web Development
 */


/**
 * ====================================== HANDSHAKE ======================================
 *
 * Handshake = A process where two devices establish communication rules
 * before actual data transfer.
 *
 * Purpose:
 * - Verify both sides are reachable
 * - Agree on protocol parameters
 * - Ensure readiness for communication
 *
 * Example:
 * - TCP 3-way handshake
 *     1) SYN     → "Can we talk?"
 *     2) SYN-ACK → "Yes, ready"
 *     3) ACK     → "Let’s start"
 *
 * Used in:
 * - TCP connections
 * - HTTPS (TLS handshake)
 */


/**
 * ====================================== IP ADDRESS ======================================
 *
 * IP (Internet Protocol) Address:
 * - A UNIQUE identifier for a device on a network
 * - Works like a home address for computers
 *
 * Purpose:
 * - Identify sender and receiver
 * - Enable routing of packets
 */


/**
 * -------------------------------------- IPv4 --------------------------------------
 *
 * - 32-bit address
 * - Written as: 192.168.1.1
 * - ~4.3 billion addresses
 *
 * Problem:
 * - Address exhaustion
 */


/**
 * -------------------------------------- IPv6 --------------------------------------
 *
 * - 128-bit address
 * - Written as: 2001:0db8:85a3::8a2e:0370:7334
 *
 * Advantages:
 * - Huge address space
 * - Better security
 * - Efficient routing
 */


/**
 * ====================================== NETWORK TOPOLOGIES ======================================
 *
 * Network Topology = Physical or logical arrangement of devices
 */


/**
 * Bus Topology
 * - Single shared cable
 * - Cheap, but single point of failure
 */


/**
 * Star Topology
 * - Central hub/switch
 * - Most common today
 */


/**
 * Ring Topology
 * - Circular data flow
 * - Rare today
 */


/**
 * Mesh Topology
 * - Multiple connections between nodes
 * - High fault tolerance
 *
 * Used in:
 * - Data centers
 * - Distributed systems
 */


/**
 * Peer-to-Peer (P2P)
 * - No central server
 * - All nodes are equal
 *
 * Used in:
 * - File sharing
 * - Blockchain
 */


/**
 * ====================================== TYPES OF NETWORKS ======================================
 */


/**
 * LAN (Local Area Network)
 * - Home / Office network
 */


/**
 * WAN (Wide Area Network)
 * - Large geographic area
 * - Example: Internet
 */


/**
 * MAN (Metropolitan Area Network)
 * - City-level network
 */


/**
 * PAN (Personal Area Network)
 * - Very short range
 * - Bluetooth, Hotspot
 */


/**
 * ====================================== WWW (WORLD WIDE WEB) ======================================
 *
 * WWW (World Wide Web):
 * - A system of interlinked documents accessed over the Internet
 *
 * NOTE:
 * - Internet ≠ Web
 * - Internet = Infrastructure
 * - Web = Application layer
 */


/**
 * HOW WWW WORKS
 *
 * 1) User enters URL
 * 2) DNS resolves domain → IP
 * 3) Browser sends HTTP/HTTPS request
 * 4) Server processes request
 * 5) Response sent (HTML/CSS/JS)
 * 6) Browser renders page
 */


/**
 * ====================================== WHY THESE CONCEPTS MATTER ======================================
 *
 * - System design decisions depend on:
 *     ✔ Network type
 *     ✔ Latency
 *     ✔ Throughput
 *     ✔ Reliability
 *
 * - Debugging examples:
 *     ❌ Slow app → High latency?
 *     ❌ Timeout → Packet loss?
 *     ❌ No access → DNS / IP / Firewall?
 */
