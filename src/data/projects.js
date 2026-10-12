// All project content lives here. Add a new project by appending an object.
// category: "coding" | "data" | "research" | "uiux"  (drives the Work filter tabs)
// linkType: "code" | "site" | "prototype" | "paper" | "poster" | "caseStudy"
// optional: image (path under public/, URL-encode spaces as %20), approach, opportunity, impact, teamSize, url (omit for no button)

export const projects = [
  {
    category: "coding",
    title: "NestFlow",
    subtitle: "Full-Stack Web App | React, TypeScript, Node.js, Supabase",
    tags: ["React", "TypeScript", "Node.js", "Express", "Supabase (PostgreSQL)", "Claude API", "Tailwind", "Leaflet"],
    overview:
      "A full-stack housing platform that brings four listing sources, including Zillow and Airbnb, into one search, with a conversational AI agent for real-time neighborhood and listing insights. Users can find roommates through a matching algorithm that pairs them by budget and lifestyle (95% user satisfaction in testing), then save and compare homes together in shared collections.",
    challenge:
      "Finding a short-term or furnished rental means opening four tabs and comparing listings manually across platforms, and finding compatible roommates to share it with is just as hard.",
    approach:
      "Built a unified listing feed that aggregates four platforms through source-specific adapters, with card, list, and map (Leaflet) views. Added natural language search with Claude Haiku so users can type what they want instead of filling out a form, and a scoring engine that ranks every listing 0 to 100 based on fit. Also built shared collections where groups can save and comment on listings, smart email alerts for new listings that match saved searches, Claude-powered roommate matching that scores compatibility and explains it, and Supabase Auth with Google OAuth. Frontend in React, TypeScript, Vite, Tailwind, and Framer Motion; backend in Node.js and Express on Supabase (PostgreSQL).",
    linkType: "site",
    url: "https://project-short-term-rental-aggregation.onrender.com",
  },
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
    url: "https://github.com/Beliganza/Ganza-CSProjects/tree/main/lab2c",
  },
  {
    category: "coding",
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
    url: "https://github.com/Beliganza/Ganza-CSProjects/tree/main/Kevin%20Bacon%20Game",
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
    url: "https://github.com/Beliganza/Ganza-CSProjects/tree/main/editor",
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
    url: "https://github.com/Beliganza/Ganza-CSProjects/tree/main/Map%20Pathfinder",
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
    url: "https://github.com/Beliganza/Ganza-CSProjects/tree/main/Huffman%20Coding",
  },
  {
    category: "research",
    title: "Evaluating LLM Alignment for Patient Message Response Drafting",
    subtitle: "ACL 2026 (Main Conference, Long Paper)",
    tags: ["NLP", "LLMs", "Healthcare AI", "Python", "Fine-tuning"],
    image: "/patient%20portal%20research.jpeg",
    overview:
      "LLMs are increasingly used to draft replies to patient portal messages. We evaluated how closely these drafts match what individual clinicians would actually write, and how much editing they’d need.",
    challenge:
      "It’s unclear whether AI drafts actually save clinicians time, or just create more editing work.",
    approach:
      "Cleaned 146,000 patient-doctor messages and partnered with clinicians to annotate what defines a strong clinical response. Fine-tuned 5 AI models in Python to draft patient replies and evaluated their clinical accuracy against physician responses.",
    impact:
      "Co-authored a paper accepted to ACL 2026. It found that LLMs handle some parts of a response well but struggle with others, especially asking patients follow-up questions, and that theme-driven adaptation improves alignment.",
    teamSize: "Seegmiller, Gatto, Greer, Isingizwe, Ray, Burdick, Preum (Dartmouth)",
    linkType: "paper",
    url: "https://aclanthology.org/2026.acl-long.1505/",
  },
  {
    category: "research",
    title: "Benchmarking Large Language Models for Clinical Quality Assessment in Patient Portal Messaging",
    subtitle: "Independent Research | LLM-as-a-Judge, Clinical NLP",
    tags: ["LLM-as-a-Judge", "Healthcare AI", "NLP", "Model Evaluation", "Data Annotation", "LangChain"],
    overview:
      "A follow-up to my ACL 2026 work that shifts the focus from generating patient replies to evaluating them: can off-the-shelf foundation models act as reliable zero-shot judges of the clinical quality of AI-generated responses?",
    challenge:
      "Without a reliable way to evaluate AI drafts, clinical communication risks spreading inaccurate or unsafe advice at scale, and manual audits don’t scale. Earlier work relied on a fine-tuned judge; it was unclear whether general-purpose models could do the job without task-specific training.",
    approach:
      "Curated 60 patient-doctor interactions from r/AskDocs (verified-doctor responses with 10+ upvotes) and generated 60 zero-shot replies with Claude Sonnet 4, GPT, and Llama (20 each). Manually annotated 243 doctor-sentence units under a strict binary clinical-equivalence standard, then benchmarked four judge models (Llama, GPT, Qwen, Claude) against this ground truth using accuracy, confusion matrices, precision/recall/F1, and a check for hallucinated matches.",
    impact:
      "GPT was the most accurate judge (85.6%), followed by Qwen (81.1%), Claude (71.6%, or 80.6% excluding 27 pipeline errors), and Llama (37.9%). No model reached perfect agreement. The judges differed mostly in the kinds of errors they made: Llama caught 95% of real matches but about two-thirds of its claimed matches were wrong, and it fabricated 3.5% of them, while Claude had the highest precision (0.87) but missed about half of real matches. The results suggest zero-shot models should assist, not replace, expert clinical review.",
    teamSize: "Individual (1) · Advisors: Professor Sarah Preum, Parker Seegmiller (PhD)",
    linkType: "paper",
    url: "/Math_90%20(6).pdf",
  },
  {
    category: "research",
    title: "Vitality Monitoring in Older Kenyan Adults Using Wearables and Ecological Momentary Assessments",
    subtitle: "Poster, The Future of Dementia in Africa conference · Aga Khan University Brain and Mind Institute",
    tags: ["Global Health", "Wearables", "Aging", "Data Analysis", "Psychometrics"],
    image: "/DEMENTIA%20RESEARCH.jpeg",
    overview:
      "Research on resilient aging and vitality. We built and validated a toolkit that tracks how vitality changes over time, using weekly phone-based check-ins and Fitbit data (steps, sleep, heart rate variability, breathing rate).",
    challenge:
      "Vitality is essential to healthy aging but hard to define and measure, and static, infrequent measurements miss its day-to-day fluctuations.",
    impact:
      "The 30-person pilot showed 85% average weekly adherence, and the Vitality Index proved internally consistent (Cronbach’s α = 0.80) and reliable (r = 0.71). The toolkit is now being scaled to 300 participants.",
    teamSize: "Aga Khan University, Dartmouth, Wake Forest, and University College London collaborators",
  },
  {
    category: "research",
    title: "Cross-Model Universal Adversarial Perturbations in Medical Imaging",
    subtitle: "Course project, The Dark Side of AI",
    tags: ["Adversarial ML", "Federated Learning", "Medical Imaging", "PyTorch", "Computer Vision"],
    overview:
      "Can adversarial images crafted on one model fool other unseen models trained on different data and architectures? I tested this in a simulated federated learning setup for pneumonia detection on chest X-rays.",
    challenge:
      "Federated learning requires shared model architectures across sites, which may make every site vulnerable to the same attack.",
    approach:
      "Simulated 4 hospital sites using the NIH Chest X-ray and RSNA Pneumonia datasets. Trained 15 models (ResNet50, DenseNet121, InceptionV3; 12 local plus 3 global via federated averaging). Crafted FGSM attacks on one site’s ResNet50 and tested how far they transferred.",
    impact:
      "Attacks transferred most to models sharing the same architecture: ResNet50 accuracy dropped 54.6%, DenseNet121 35.2%, InceptionV3 17.9%. Global models were the most resistant. Architectural similarity increases systemic risk.",
    linkType: "poster",
    url: "/federated%20learning.pdf",
  },
  {
    category: "uiux",
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
    url: "https://hcinetworking.onrender.com/",
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
    url: "https://github.com/Beliganza/Ganza-CSProjects/tree/main/LAB4",
  },
  {
    category: "coding",
    title: "Portfolio Website",
    subtitle: "Front-End | React, Vite, Sass",
    tags: ["React", "Vite", "Sass (SCSS)", "JavaScript", "Responsive Design", "Git/GitHub"],
    overview:
      "This site: a personal portfolio built with React and Vite to showcase my projects across coding, research, UI/UX, and data analysis.",
    challenge: "Create a professional portfolio website that effectively showcases projects while learning web development fundamentals.",
    approach:
      "Built reusable React components for each section, with every project stored in a single data file that drives the filterable Work tabs and expandable project cards. Styled everything in Sass with shared design tokens, a light/dark theme toggle that remembers the visitor’s choice, and responsive layouts for mobile. Version-controlled with Git/GitHub.",
    impact: "Developed a functional portfolio website while gaining hands-on experience with web development best practices.",
    teamSize: "Individual (1)",
  },
  {
    category: "uiux",
    title: "Sound Travels",
    subtitle: "UX Research + UI Design | Figma Prototype",
    tags: ["UX Research", "UI Design", "Figma", "Prototyping", "Interaction Design"],
    overview:
      "“Sound travels. So do we. Explore the world through music.” An interactive music exploration platform that lets users discover instruments, cultures, and communities from around the world.",
    challenge:
      "Most music apps focus almost entirely on Western instruments like piano or guitar. Traditional non-Western instruments are often passed down orally, so they get overlooked and their techniques risk being lost. 3.6 million students have no access to diverse or non-Western music programs, and only 25% finish traditional, non-interactive music courses.",
    opportunity:
      "How might we design a platform that transforms how people discover, learn, and value music from cultures other than their own?",
    approach:
      "Designed an interconnected app with four tabs: Home, Explore, Live Jam, and My Profile. In Explore, users pick a region (e.g. Armenia) and dive into its traditional instruments (duduk, dhol, shvi, qanun, kamancha) to learn their stories and sounds. A modular, bite-sized learning flow breaks complex history and technique into short steps with visible progress (e.g. “The duduk is 3,000 years older than the Roman Empire”). Local practitioners share their knowledge directly through recordings and video, giving an authentic first-hand view of each instrument’s cultural meaning. Live Jam lets users join live sessions that mix traditions, like “Strings of the Wind” (Japanese × Armenian, koto + duduk).",
    teamSize: "Team of 3 (Aulanni Kidd, Ganza Belise, Aron Markovics) · 3 weeks",
    linkType: "caseStudy",
    url: "/case%20study.pdf",
  },
  {
    category: "data",
    title: "Using Game Theory to Analyze the Hard-to-Get Strategy in Dating",
    subtitle: "Evolutionary Game Theory | Python, Survey Analysis",
    tags: ["Game Theory", "Replicator Dynamics", "Python", "NumPy", "SymPy", "Matplotlib", "Survey Design"],
    overview:
      "Modeled “playing hard to get” as a signaling game in Dartmouth dating culture, asking whether deliberate ambiguity can spread and stabilize across a whole community, not just win over one person.",
    challenge:
      "Prior research shows playing hard to get can make one person more appealing, but not whether it survives when many people use it, or whether Greek and non-Greek social spaces reward it differently.",
    approach:
      "Built a payoff matrix for two strategies, Signaling Interest and Signaling Distance, driven by how often the signal is read correctly (p), the emotional cost of uncertainty (c), and the reputational gain from seeming selective (r). Surveyed 41 Dartmouth undergraduates with questions mapped to each parameter, then simulated replicator dynamics in Python (NumPy, SymPy, Matplotlib) with the survey estimates (p ≈ 0.15, c ≈ 0.7, r ≈ 0.5) and swept p to find the survival threshold.",
    impact:
      "Found a sender–receiver mismatch: 58.5% of respondents intentionally delay replies, but only 14.6% read a slow reply as hard-to-get, while 56.1% read it as disinterest. In the simulation, the population always converged to clear communication; the strategy only survives once p rises above about 0.77. Greek affiliation made no meaningful difference. People play hard to get because they assume it works on others, not because it works on them.",
    teamSize: "Team of 4 (Raúl, Ganza, Despoina, James)",
    linkType: "paper",
    url: "/math_30_final_paper%20(2).pdf",
  },
];

export const filters = [
  { id: "coding", label: "Coding Projects", icon: "code" },
  { id: "research", label: "Research", icon: "flask" },
  { id: "uiux", label: "UI/UX", icon: "layout" },
  { id: "data", label: "Data Analysis", icon: "chart" },
];
