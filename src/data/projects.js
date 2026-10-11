// All project content lives here. Add a new project by appending an object.
// category: "coding" | "data" | "research" | "uiux"  (drives the Work filter tabs)
// linkType: "code" | "site"

export const projects = [
  {
    category: "coding",
    title: "MySQL-Based Manuscript Management System",
    subtitle: "Database | SQL, ER Diagrams, Business Logic",
    tags: ["MySQL", "SQL (DDL/DML)", "Stored Procedures", "Triggers", "ER Modeling", "3NF Normalization"],
    overview:
      "Designed and implemented a normalized (3NF) relational database to manage manuscripts, authors, reviewers, and submissions.",
    challenge:
      "Create a robust database system that enforces complex business rules while maintaining data integrity across multiple interconnected entities.",
    approach:
      "Modeled entities/relations with ER diagrams and translated them into SQL DDL. Implemented triggers and stored procedures to enforce business rules (e.g., status transitions, review assignment). Wrote SQL scripts for data loading, integrity checks, and common admin workflows.",
    impact:
      "Delivered a fully normalized database system that streamlines manuscript submission and review processes while maintaining complete data integrity.",
    teamSize: "Individual (1)",
    linkType: "code",
    url: "#",
  },
  {
    category: "data",
    title: "fMRI Music Genre Classifier",
    subtitle: "Machine Learning | Python, Scikit-learn",
    tags: ["Python", "scikit-learn", "NumPy", "pandas", "Model Selection", "Cross-validation"],
    overview:
      "Built a machine-learning pipeline to predict music genres from fMRI signals; reached ~97% accuracy on held-out data.",
    challenge:
      "Extract meaningful patterns from complex fMRI brain signals to accurately predict music genre preferences.",
    approach:
      "Preprocessed fMRI features and engineered summary statistics per region/time window. Trained and tuned classifiers (e.g., Logistic Regression/SVM/Random Forest) via cross-validation. Evaluated with accuracy/F1 and inspected feature importance to interpret brain-region signals.",
    impact:
      "Achieved 97% accuracy in genre prediction, demonstrating the potential for using neuroimaging data to understand music perception in the brain.",
    teamSize: "Individual (1)",
    linkType: "code",
    url: "#",
  },
  {
    category: "coding",
    title: "Six Degrees of Separation",
    subtitle: "Graph Theory | Java, BFS",
    tags: ["Java", "Graph Data Structures", "BFS Algorithm", "Queues", "UI Design"],
    overview:
      "Interactive 'Kevin Bacon' style tool that finds shortest connection paths between actors using graph search.",
    challenge:
      "Efficiently compute and visualize connection paths between actors in a large graph of co-appearances.",
    approach:
      "Modeled actors as nodes and co-appearances as edges; used BFS for unweighted shortest paths. Built a UI to query connections, visualize paths, and change the center actor. Optimized lookups with adjacency lists and precomputed indices.",
    impact:
      "Created an interactive tool that demonstrates graph theory concepts while providing engaging exploration of actor connections.",
    teamSize: "Individual (1)",
    linkType: "code",
    url: "#",
  },
  {
    category: "coding",
    title: "Collaborative Graphical Editor",
    subtitle: "Java | Multithreading, Sockets",
    tags: ["Java", "Sockets/Networking", "Multithreading", "Observer Pattern", "Serialization"],
    overview: "Real-time, multi-client drawing editor with synchronized state across users.",
    challenge:
      "Build a system that maintains consistency across multiple concurrent users editing a shared canvas in real-time.",
    approach:
      "Implemented a client/server architecture with message broadcasting and concurrency control. Used multithreading to handle simultaneous clients and maintain shared canvas consistency. Designed a simple protocol for shape creation, movement, and deletion.",
    impact:
      "Delivered a fully functional collaborative editor demonstrating expertise in concurrent programming and network communication.",
    teamSize: "Team of 2",
    linkType: "code",
    url: "#",
  },
  {
    category: "coding",
    title: "Map Pathfinder",
    subtitle: "Algorithms | Java, BFS",
    tags: ["Java", "Graph Algorithms", "BFS", "Dijkstra's Algorithm", "Priority Queues"],
    overview: "Computed shortest walking routes across a campus map using graph algorithms.",
    challenge: "Find optimal routes across a campus while accounting for different path types and distances.",
    approach:
      "Parsed map data into a weighted graph (locations as nodes, paths as edges). Ran BFS for hop-based routes and Dijkstra for distance-weighted paths. Displayed the resulting path with step-by-step directions.",
    impact: "Created a practical navigation tool that helps users find optimal routes across campus.",
    teamSize: "Individual (1)",
    linkType: "code",
    url: "#",
  },
  {
    category: "coding",
    title: "Huffman Encoding",
    subtitle: "Data Compression | Trees, Encoding",
    tags: ["Java", "Priority Queues", "Heaps", "Binary Trees", "Bit I/O"],
    overview: "End-to-end compressor/decompressor using Huffman coding.",
    challenge:
      "Implement an efficient compression algorithm that can compress and decompress files while maintaining data integrity.",
    approach:
      "Built frequency tables, constructed Huffman trees, and generated optimal bit codes. Implemented encoder/decoder pipelines with header metadata for faithful reconstruction. Benchmarked compression ratio and runtime on sample corpora.",
    impact: "Achieved significant compression ratios while maintaining perfect data fidelity through lossless compression.",
    teamSize: "Team of 2",
    linkType: "code",
    url: "#",
  },
  {
    category: "research",
    title: "Halo Team Networking Glasses",
    subtitle: "UX Research + Visual Design",
    tags: ["Prototyping", "UI/UX Design", "HTML", "CSS", "JavaScript", "AR Concepts"],
    overview:
      "Concept and prototype of AR eyewear that overlays real-time attendee info, name tags, and ice-breaker prompts to streamline networking.",
    challenge:
      "Design an AR interface that enhances networking experiences while respecting privacy and maintaining natural social interactions.",
    approach:
      "Explored face/marker detection and UI overlays for glanceable prompts. Designed flows for privacy-aware consent and quick contact exchange. Built a lightweight landing site to showcase the concept and gather feedback.",
    impact:
      "Created a compelling prototype demonstrating the potential of AR technology to improve professional networking experiences.",
    teamSize: "Team of 4",
    linkType: "site",
    url: "#",
  },
  {
    category: "coding",
    title: "Blogpost Management Application",
    subtitle: "Python | MongoDB | Dictionaries",
    tags: ["Python", "argparse", "JSON", "Data Structures", "CLI Design"],
    overview:
      "Command-line blog system supporting posts, comments, tags, search, and deletion with an interactive command loop.",
    challenge: "Build a flexible CLI system that manages complex nested data structures and supports full-text search.",
    approach:
      "Created data models for posts (title/body/tags) and nested comments. Added permalink generation and keyword search across posts/comments. Designed a robust CLI for create/read/search/delete flows.",
    impact: "Delivered a fully functional blog management system demonstrating proficiency in data structures and CLI design.",
    teamSize: "Individual (1)",
    linkType: "code",
    url: "#",
  },
  {
    category: "coding",
    title: "Portfolio Website",
    subtitle: "HTML | CSS",
    tags: ["HTML", "CSS", "Git/GitHub", "Vercel", "Responsive Design"],
    overview:
      "Personal website built as a learning project; iteratively refined layout, accessibility, and content structure.",
    challenge: "Create a professional portfolio website that effectively showcases projects while learning web development fundamentals.",
    approach:
      "Implemented responsive sections, project modals, and smooth navigation. Refactored CSS for consistency and theme cohesion. Deployed via GitHub/Vercel workflows as I continue to learn.",
    impact: "Developed a functional portfolio website while gaining hands-on experience with web development best practices.",
    teamSize: "Individual (1)",
    linkType: "code",
    url: "#",
  },
];

export const filters = [
  { id: "coding", label: "Coding Projects", icon: "code" },
  { id: "data", label: "Data Analysis", icon: "chart" },
  { id: "research", label: "Research", icon: "flask" },
  { id: "uiux", label: "UI/UX", icon: "layout" },
];
