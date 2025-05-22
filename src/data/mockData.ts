import { Course, QuizQuestion, User } from "@/lib/types";

export const mockCourses: Course[] = [
  {
    id: "1",
    title: "Introduction to Web Development",
    description: "Learn the fundamentals of web development, including HTML, CSS, and JavaScript. Build responsive websites from scratch and understand core web concepts.",
    category: "Programming",
    instructor: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
    duration: "6 weeks",
    level: "Beginner"
  },
  {
    id: "2",
    title: "Business Analytics Fundamentals",
    description: "Master the basics of business analytics. Learn data analysis, visualization techniques, and how to make data-driven business decisions.",
    category: "Business",
    instructor: "Robert Johnson",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80",
    duration: "8 weeks",
    level: "Intermediate"
  },
  {
    id: "3",
    title: "UI/UX Design Principles",
    description: "Develop skills in creating user-centered designs. Learn design thinking, wireframing, prototyping, and user testing methodologies.",
    category: "Design",
    instructor: "Maya Patel",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80",
    duration: "5 weeks",
    level: "Beginner"
  },
  {
    id: "4",
    title: "Financial Planning & Analysis",
    description: "Learn comprehensive financial planning techniques, including budgeting, forecasting, and financial modeling for personal and business applications.",
    category: "Finance",
    instructor: "David Wilson",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2011&q=80",
    duration: "7 weeks",
    level: "Advanced"
  },
  {
    id: "5",
    title: "Digital Marketing Strategy",
    description: "Master digital marketing channels including social media, SEO, content marketing, and PPC. Create comprehensive marketing campaigns.",
    category: "Marketing",
    instructor: "Elena Rodriguez",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    duration: "6 weeks",
    level: "Intermediate"
  },
  {
    id: "6",
    title: "Python for Data Science",
    description: "Learn to use Python for data analysis, visualization, and machine learning. Build practical data science projects and models.",
    category: "Programming",
    instructor: "Alex Zhang",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2089&q=80",
    duration: "8 weeks",
    level: "Intermediate"
  },
  {
    id: "7",
    title: "Product Management Essentials",
    description: "Learn the core skills of product management including product strategy, roadmapping, and working with development teams.",
    category: "Business",
    instructor: "Nisha Sharma",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    duration: "6 weeks",
    level: "Beginner"
  },
  {
    id: "8",
    title: "Graphic Design Fundamentals",
    description: "Master the principles of graphic design including typography, color theory, layout design, and branding concepts.",
    category: "Design",
    instructor: "Carlos Mendez",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    duration: "5 weeks",
    level: "Beginner"
  },
  {
    id: "9",
    title: "Machine Learning Fundamentals",
    description: "Learn the basics of machine learning, including supervised and unsupervised learning, neural networks, and practical applications.",
    category: "Programming",
    instructor: "James Wilson",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    duration: "10 weeks",
    level: "Advanced"
  },
  {
    id: "10",
    title: "Social Media Marketing",
    description: "Master the art of social media marketing across platforms. Learn content creation, community management, and analytics.",
    category: "Marketing",
    instructor: "Sophia Garcia",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80",
    duration: "4 weeks",
    level: "Beginner"
  },
  {
    id: "11",
    title: "Mobile App Development",
    description: "Learn to build cross-platform mobile applications using React Native. Create apps that work on both iOS and Android devices.",
    category: "Programming",
    instructor: "Thomas Lee",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    duration: "8 weeks",
    level: "Intermediate"
  },
  {
    id: "12",
    title: "Leadership and Team Management",
    description: "Develop essential leadership skills to effectively manage teams, resolve conflicts, and drive organizational success.",
    category: "Business",
    instructor: "Michelle Clark",
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2047&q=80",
    duration: "5 weeks",
    level: "Intermediate"
  }
];

export const mockUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    enrolledCourses: [
      {
        courseId: "1",
        enrollmentDate: "2023-05-15",
        quizCompleted: true,
        quizScore: 95,
        certificateIssued: true
      },
      {
        courseId: "3",
        enrollmentDate: "2023-06-10",
        quizCompleted: false
      }
    ]
  }
];

export const mockQuizQuestions: Record<string, QuizQuestion[]> = {
  "1": [
    {
      id: "q1-1",
      question: "Which language is used for styling web pages?",
      options: ["HTML", "CSS", "JavaScript", "Python"],
      correctAnswer: "CSS"
    },
    {
      id: "q1-2",
      question: "Which HTML element is used to create a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      correctAnswer: "<a>"
    },
    {
      id: "q1-3",
      question: "Which CSS property controls text size?",
      options: ["text-size", "font-size", "text-style", "font-style"],
      correctAnswer: "font-size"
    },
    {
      id: "q1-4",
      question: "Which JavaScript method is used to add an element at the end of an array?",
      options: ["push()", "append()", "addToEnd()", "insert()"],
      correctAnswer: "push()"
    },
    {
      id: "q1-5",
      question: "What does DOM stand for?",
      options: ["Document Object Model", "Data Object Model", "Document Oriented Model", "Digital Object Model"],
      correctAnswer: "Document Object Model"
    },
    {
      id: "q1-6",
      question: "Which property is used to change the background color in CSS?",
      options: ["bgcolor", "background-color", "color-background", "bg-color"],
      correctAnswer: "background-color"
    },
    {
      id: "q1-7",
      question: "Which HTML tag is used to define an unordered list?",
      options: ["<ul>", "<ol>", "<li>", "<list>"],
      correctAnswer: "<ul>"
    },
    {
      id: "q1-8",
      question: "Which CSS property is used to add space between elements?",
      options: ["spacing", "margin", "padding", "gap"],
      correctAnswer: "margin"
    },
    {
      id: "q1-9",
      question: "What is the correct way to comment in JavaScript?",
      options: ["/* comment */", "// comment", "<!-- comment -->", "# comment"],
      correctAnswer: "// comment"
    },
    {
      id: "q1-10",
      question: "What does the 'viewport' meta tag control?",
      options: ["Website speed", "Browser caching", "Display dimensions", "SEO ranking"],
      correctAnswer: "Display dimensions"
    }
  ],
  "2": [
    {
      id: "q2-1",
      question: "What is the primary purpose of business analytics?",
      options: ["Creating financial reports", "Making data-driven decisions", "Automating business processes", "Market research"],
      correctAnswer: "Making data-driven decisions"
    },
    {
      id: "q2-2",
      question: "Which of the following is NOT a common data visualization tool?",
      options: ["Bar charts", "Pie charts", "Line graphs", "Binary trees"],
      correctAnswer: "Binary trees"
    },
    {
      id: "q2-3",
      question: "What does KPI stand for in business analytics?",
      options: ["Key Performance Indicator", "Knowledge Process Integration", "Key Progress Insight", "Knowledge Performance Index"],
      correctAnswer: "Key Performance Indicator"
    },
    {
      id: "q2-4",
      question: "Which of the following is a descriptive analytics technique?",
      options: ["Regression analysis", "Data mining", "Cluster analysis", "Predictive modeling"],
      correctAnswer: "Cluster analysis"
    },
    {
      id: "q2-5",
      question: "What is the purpose of A/B testing in business analytics?",
      options: ["Comparing two versions to determine which performs better", "Testing software for bugs", "Analyzing competitor strategies", "Creating business forecasts"],
      correctAnswer: "Comparing two versions to determine which performs better"
    },
    {
      id: "q2-6",
      question: "Which of the following is NOT a typical business analytics tool?",
      options: ["Tableau", "Power BI", "Excel", "Photoshop"],
      correctAnswer: "Photoshop"
    },
    {
      id: "q2-7",
      question: "What is data cleansing in the context of business analytics?",
      options: ["Removing duplicate records", "Creating backups of data", "Generating new data", "Encrypting sensitive data"],
      correctAnswer: "Removing duplicate records"
    },
    {
      id: "q2-8",
      question: "Which term refers to the practice of examining large data sets to uncover patterns?",
      options: ["Data mining", "Data cleansing", "Data migration", "Data archiving"],
      correctAnswer: "Data mining"
    },
    {
      id: "q2-9",
      question: "What is the difference between structured and unstructured data?",
      options: ["Structured data follows a predefined format, unstructured does not", "Structured data is always numerical", "Unstructured data is always textual", "There is no difference"],
      correctAnswer: "Structured data follows a predefined format, unstructured does not"
    },
    {
      id: "q2-10",
      question: "Which of the following is an example of prescriptive analytics?",
      options: ["Recommending actions based on predictions", "Summarizing historical data", "Creating charts of past performance", "Describing current business conditions"],
      correctAnswer: "Recommending actions based on predictions"
    }
  ],
  "3": [
    {
      id: "q3-1",
      question: "What is the primary focus of UX design?",
      options: ["Visual appeal", "User experience and satisfaction", "Technical functionality", "Brand consistency"],
      correctAnswer: "User experience and satisfaction"
    },
    {
      id: "q3-2",
      question: "Which of these is NOT typically part of the UX design process?",
      options: ["User research", "Wireframing", "Server configuration", "Usability testing"],
      correctAnswer: "Server configuration"
    },
    {
      id: "q3-3",
      question: "What is a wireframe in UI/UX design?",
      options: ["A high-fidelity mockup", "A basic visual guide that represents the skeletal framework of a website", "3D model of a product", "A finalized design"],
      correctAnswer: "A basic visual guide that represents the skeletal framework of a website"
    },
    {
      id: "q3-4",
      question: "What does the term 'responsive design' refer to?",
      options: ["Fast-loading websites", "Designs that adjust to different screen sizes", "Interactive elements", "Animation in UI"],
      correctAnswer: "Designs that adjust to different screen sizes"
    },
    {
      id: "q3-5",
      question: "Which research method involves observing users interacting with a product?",
      options: ["Surveys", "Focus groups", "Usability testing", "A/B testing"],
      correctAnswer: "Usability testing"
    },
    {
      id: "q3-6",
      question: "What is a user persona?",
      options: ["A fictional character in a product demo", "A representation of a user type based on research", "The developer behind a product", "A customer service representative"],
      correctAnswer: "A representation of a user type based on research"
    },
    {
      id: "q3-7",
      question: "What does the term 'information architecture' refer to in UI/UX design?",
      options: ["The technical infrastructure of a website", "The organization and structure of content", "The visual hierarchy of elements", "The database design"],
      correctAnswer: "The organization and structure of content"
    },
    {
      id: "q3-8",
      question: "Which principle states that related elements should be grouped together?",
      options: ["Contrast", "Proximity", "Alignment", "Repetition"],
      correctAnswer: "Proximity"
    },
    {
      id: "q3-9",
      question: "What is a heatmap used for in UX design?",
      options: ["Showing which parts of an interface receive the most attention", "Demonstrating the color palette", "Measuring website loading speed", "Tracking server performance"],
      correctAnswer: "Showing which parts of an interface receive the most attention"
    },
    {
      id: "q3-10",
      question: "What is the purpose of accessibility design?",
      options: ["To make products usable by people with the widest range of abilities", "To increase website loading speed", "To improve aesthetics", "To enhance brand recognition"],
      correctAnswer: "To make products usable by people with the widest range of abilities"
    }
  ],
  "4": [
    {
      id: "q4-1",
      question: "What is the purpose of a budget in financial planning?",
      options: ["To track past spending only", "To plan future income and expenses", "To calculate taxes", "To evaluate investment returns"],
      correctAnswer: "To plan future income and expenses"
    },
    {
      id: "q4-2",
      question: "What is the difference between assets and liabilities?",
      options: ["Assets generate income, liabilities create expenses", "Assets are physical items, liabilities are digital", "Assets are long-term, liabilities are short-term", "There is no difference"],
      correctAnswer: "Assets generate income, liabilities create expenses"
    },
    {
      id: "q4-3",
      question: "What is the Rule of 72 used for in finance?",
      options: ["Calculating compound interest", "Estimating how long it takes for an investment to double", "Determining tax brackets", "Calculating depreciation"],
      correctAnswer: "Estimating how long it takes for an investment to double"
    },
    {
      id: "q4-4",
      question: "What is a cash flow statement?",
      options: ["A record of past cash transactions", "A projection of future expenses", "A document showing the flow of cash in and out during a specific period", "A bank statement"],
      correctAnswer: "A document showing the flow of cash in and out during a specific period"
    },
    {
      id: "q4-5",
      question: "What does ROI stand for in financial analysis?",
      options: ["Rate of Inflation", "Return on Investment", "Risk of Investment", "Revenue on Income"],
      correctAnswer: "Return on Investment"
    },
    {
      id: "q4-6",
      question: "What is a financial model used for?",
      options: ["Organizing receipts", "Making financial forecasts and projections", "Filing taxes", "Recording transactions"],
      correctAnswer: "Making financial forecasts and projections"
    },
    {
      id: "q4-7",
      question: "What is the difference between fixed and variable costs?",
      options: ["Fixed costs remain constant regardless of production, variable costs change", "Fixed costs are always higher than variable costs", "Fixed costs apply to products, variable costs to services", "There is no difference"],
      correctAnswer: "Fixed costs remain constant regardless of production, variable costs change"
    },
    {
      id: "q4-8",
      question: "What is the purpose of scenario analysis in financial planning?",
      options: ["To develop creative stories", "To evaluate how different variables might affect outcomes", "To compare competitors", "To organize financial data"],
      correctAnswer: "To evaluate how different variables might affect outcomes"
    },
    {
      id: "q4-9",
      question: "What is a break-even analysis used for?",
      options: ["Determining when revenue equals costs", "Calculating profit margins", "Analyzing stock market trends", "Setting salary levels"],
      correctAnswer: "Determining when revenue equals costs"
    },
    {
      id: "q4-10",
      question: "Which financial statement shows a company's assets, liabilities, and shareholders' equity?",
      options: ["Income statement", "Cash flow statement", "Balance sheet", "Profit and loss statement"],
      correctAnswer: "Balance sheet"
    }
  ],
  "5": [
    {
      id: "q5-1",
      question: "What is the difference between SEO and SEM?",
      options: ["SEO is paid, SEM is organic", "SEO is organic, SEM includes paid search", "They are the same thing", "SEM is for social media only"],
      correctAnswer: "SEO is organic, SEM includes paid search"
    },
    {
      id: "q5-2",
      question: "What does CTR stand for in digital marketing?",
      options: ["Click-Through Rate", "Content Target Rating", "Commercial Transaction Record", "Campaign Tracking Result"],
      correctAnswer: "Click-Through Rate"
    },
    {
      id: "q5-3",
      question: "What is the purpose of a marketing funnel?",
      options: ["To filter out unqualified leads", "To visualize and track the customer journey", "To collect email addresses", "To create website traffic"],
      correctAnswer: "To visualize and track the customer journey"
    },
    {
      id: "q5-4",
      question: "What is a key difference between inbound and outbound marketing?",
      options: ["Inbound attracts customers to you, outbound interrupts audiences", "Inbound is digital, outbound is traditional", "Inbound is free, outbound is paid", "There is no difference"],
      correctAnswer: "Inbound attracts customers to you, outbound interrupts audiences"
    },
    {
      id: "q5-5",
      question: "What is remarketing in digital advertising?",
      options: ["Rebranding a product", "Targeting ads to people who have previously visited your website", "Selling used products", "Changing market demographics"],
      correctAnswer: "Targeting ads to people who have previously visited your website"
    },
    {
      id: "q5-6",
      question: "What does CPA stand for in marketing?",
      options: ["Content Production Assistant", "Cost Per Acquisition", "Customer Profile Analysis", "Creative Process Automation"],
      correctAnswer: "Cost Per Acquisition"
    },
    {
      id: "q5-7",
      question: "Which metric measures the percentage of visitors who take a desired action?",
      options: ["Bounce rate", "Conversion rate", "Click-through rate", "Impression share"],
      correctAnswer: "Conversion rate"
    },
    {
      id: "q5-8",
      question: "What is A/B testing in marketing?",
      options: ["Testing alphabetical order of products", "Comparing two versions of content to see which performs better", "Analyzing competitors A and B", "Testing products in different markets"],
      correctAnswer: "Comparing two versions of content to see which performs better"
    },
    {
      id: "q5-9",
      question: "What is content marketing?",
      options: ["Only selling products online", "Creating and sharing valuable content to attract a target audience", "Advertising on content websites", "Charging for access to content"],
      correctAnswer: "Creating and sharing valuable content to attract a target audience"
    },
    {
      id: "q5-10",
      question: "What is the primary goal of social media marketing?",
      options: ["Only to increase sales", "To directly compete with other businesses", "To build brand awareness and engage with customers", "To reach only new customers"],
      correctAnswer: "To build brand awareness and engage with customers"
    }
  ],
  "6": [
    {
      id: "q6-1",
      question: "Which of these is NOT a Python data type?",
      options: ["List", "Dictionary", "Tuple", "Schema"],
      correctAnswer: "Schema"
    },
    {
      id: "q6-2",
      question: "What does NumPy primarily provide to Python?",
      options: ["Web development framework", "Support for arrays and matrices", "Database connectivity", "Text processing"],
      correctAnswer: "Support for arrays and matrices"
    },
    {
      id: "q6-3",
      question: "Which library is commonly used for data visualization in Python?",
      options: ["NumPy", "Requests", "Matplotlib", "BeautifulSoup"],
      correctAnswer: "Matplotlib"
    },
    {
      id: "q6-4",
      question: "What is Pandas primarily used for in data science?",
      options: ["Data manipulation and analysis", "Machine learning algorithms", "Web scraping", "Database management"],
      correctAnswer: "Data manipulation and analysis"
    },
    {
      id: "q6-5",
      question: "What is a Jupyter Notebook?",
      options: ["A physical notebook for data scientists", "An interactive computing environment for creating documents", "A database management system", "A machine learning algorithm"],
      correctAnswer: "An interactive computing environment for creating documents"
    },
    {
      id: "q6-6",
      question: "Which Python library would you use for machine learning?",
      options: ["Requests", "Scikit-learn", "Beautiful Soup", "Flask"],
      correctAnswer: "Scikit-learn"
    },
    {
      id: "q6-7",
      question: "What does the 'fit' method do in Scikit-learn?",
      options: ["Adjusts data to fit the screen", "Trains the model on the data", "Resizes images", "Formats text data"],
      correctAnswer: "Trains the model on the data"
    },
    {
      id: "q6-8",
      question: "What is a DataFrame in Pandas?",
      options: ["A 2D labeled data structure", "A machine learning algorithm", "A type of graph", "A method of data encryption"],
      correctAnswer: "A 2D labeled data structure"
    },
    {
      id: "q6-9",
      question: "What is the purpose of data normalization?",
      options: ["To organize data in normal form", "To adjust values to a common scale", "To remove all duplicate values", "To convert data into text format"],
      correctAnswer: "To adjust values to a common scale"
    },
    {
      id: "q6-10",
      question: "What is a confusion matrix used for?",
      options: ["Visualizing the performance of a classification algorithm", "Testing if users are confused by data", "Encrypting sensitive data", "Organizing complex datasets"],
      correctAnswer: "Visualizing the performance of a classification algorithm"
    }
  ],
  "7": [
    {
      id: "q7-1",
      question: "What is a product roadmap?",
      options: ["A physical map showing where products are sold", "A high-level visual summary of the product vision and direction", "A technical document for developers only", "A marketing plan for product launches"],
      correctAnswer: "A high-level visual summary of the product vision and direction"
    },
    {
      id: "q7-2",
      question: "What does MVP stand for in product management?",
      options: ["Most Valuable Professional", "Minimum Viable Product", "Maximum Value Proposition", "Market Value Potential"],
      correctAnswer: "Minimum Viable Product"
    },
    {
      id: "q7-3",
      question: "What is the primary responsibility of a product manager?",
      options: ["Managing the development team", "Defining the product strategy and features", "Designing the user interface", "Writing code for the product"],
      correctAnswer: "Defining the product strategy and features"
    },
    {
      id: "q7-4",
      question: "What is a user story in product management?",
      options: ["A narrative about a product's history", "A description of functionality from an end user's perspective", "A customer testimonial", "A fictional use case"],
      correctAnswer: "A description of functionality from an end user's perspective"
    },
    {
      id: "q7-5",
      question: "What is the purpose of a product backlog?",
      options: ["To track bugs and issues", "To prioritize the work that needs to be done on a product", "To document product history", "To store old product versions"],
      correctAnswer: "To prioritize the work that needs to be done on a product"
    },
    {
      id: "q7-6",
      question: "What is the difference between a product manager and a project manager?",
      options: ["Product managers focus on what and why, project managers focus on how and when", "They are different terms for the same role", "Product managers focus on technical aspects, project managers on business aspects", "There is no difference"],
      correctAnswer: "Product managers focus on what and why, project managers focus on how and when"
    },
    {
      id: "q7-7",
      question: "What is a KPI in product management?",
      options: ["Knowledge Processing Interface", "Key Performance Indicator", "Kinetic Product Interface", "Knowledge Product Integration"],
      correctAnswer: "Key Performance Indicator"
    },
    {
      id: "q7-8",
      question: "What is the purpose of a product vision statement?",
      options: ["To outline the technical specifications", "To communicate the essence of a product and its intended impact", "To list all product features", "To detail the development timeline"],
      correctAnswer: "To communicate the essence of a product and its intended impact"
    },
    {
      id: "q7-9",
      question: "What is feature prioritization in product management?",
      options: ["Deciding which features to build first", "Advertising the most popular features", "Listing all possible product features", "Removing features from a product"],
      correctAnswer: "Deciding which features to build first"
    },
    {
      id: "q7-10",
      question: "What is a product requirement document (PRD)?",
      options: ["A list of customer requests", "A technical specification for developers", "A comprehensive document detailing what a product should do", "A marketing plan for a product"],
      correctAnswer: "A comprehensive document detailing what a product should do"
    }
  ],
  "8": [
    {
      id: "q8-1",
      question: "What is the purpose of a grid system in graphic design?",
      options: ["To create 3D effects", "To organize and align elements consistently", "To add texture to designs", "To create gradients"],
      correctAnswer: "To organize and align elements consistently"
    },
    {
      id: "q8-2",
      question: "What does CMYK stand for in printing?",
      options: ["Cyan, Magenta, Yellow, Key (Black)", "Color, Module, Yield, Contrast", "Create, Manage, Yield, Know", "Content, Material, Year, Kind"],
      correctAnswer: "Cyan, Magenta, Yellow, Key (Black)"
    },
    {
      id: "q8-3",
      question: "What is kerning in typography?",
      options: ["The height of a font", "The width of a font", "The spacing between individual characters", "The style of a font"],
      correctAnswer: "The spacing between individual characters"
    },
    {
      id: "q8-4",
      question: "What is the difference between vector and raster graphics?",
      options: ["Vector uses pixels, raster uses mathematical formulas", "Vector uses mathematical formulas, raster uses pixels", "Vector is for web only, raster is for print only", "There is no difference"],
      correctAnswer: "Vector uses mathematical formulas, raster uses pixels"
    },
    {
      id: "q8-5",
      question: "What is a color wheel used for in design?",
      options: ["To physically mix paints", "To show relationships between colors", "To calibrate monitors", "To store design templates"],
      correctAnswer: "To show relationships between colors"
    },
    {
      id: "q8-6",
      question: "What is white space in graphic design?",
      options: ["Only areas that are colored white", "Empty or negative space intentionally left in a design", "Space reserved for text only", "A design trend from the 1980s"],
      correctAnswer: "Empty or negative space intentionally left in a design"
    },
    {
      id: "q8-7",
      question: "What is the rule of thirds in design composition?",
      options: ["Using only three colors maximum", "Dividing an image into thirds for balanced composition", "Using three different typefaces", "Making the design in three versions"],
      correctAnswer: "Dividing an image into thirds for balanced composition"
    },
    {
      id: "q8-8",
      question: "What file format would be best for graphics with transparency?",
      options: ["JPEG", "PNG", "BMP", "GIF"],
      correctAnswer: "PNG"
    },
    {
      id: "q8-9",
      question: "What does RGB color mode primarily used for?",
      options: ["Print design", "Digital design for screens", "Black and white printing", "Textile design"],
      correctAnswer: "Digital design for screens"
    },
    {
      id: "q8-10",
      question: "What is a style guide in graphic design?",
      options: ["A fashion magazine", "A document defining design standards and brand elements", "A collection of fonts", "A list of popular design trends"],
      correctAnswer: "A document defining design standards and brand elements"
    }
  ],
  "9": [
    {
      id: "q9-1",
      question: "What is the difference between supervised and unsupervised learning?",
      options: ["Supervised learning requires a teacher, unsupervised does not", "Supervised learning uses labeled data, unsupervised learning does not", "Supervised is faster, unsupervised is more accurate", "There is no difference"],
      correctAnswer: "Supervised learning uses labeled data, unsupervised learning does not"
    },
    {
      id: "q9-2",
      question: "What is a neural network in machine learning?",
      options: ["A network of computers working together", "A series of nodes and connections modeled after the human brain", "A database structure", "A specialized programming language"],
      correctAnswer: "A series of nodes and connections modeled after the human brain"
    },
    {
      id: "q9-3",
      question: "What does overfitting refer to in machine learning?",
      options: ["When a model performs perfectly on training data but poorly on new data", "When a model is too large to run efficiently", "When there is too much training data", "When hardware requirements exceed available resources"],
      correctAnswer: "When a model performs perfectly on training data but poorly on new data"
    },
    {
      id: "q9-4",
      question: "What is the purpose of the activation function in a neural network?",
      options: ["To initialize weights", "To introduce non-linearity into the network", "To save the trained model", "To clean input data"],
      correctAnswer: "To introduce non-linearity into the network"
    },
    {
      id: "q9-5",
      question: "What is k-means clustering in machine learning?",
      options: ["A supervised learning algorithm", "An unsupervised algorithm that groups similar data points", "A way to reduce dimensions in data", "A type of neural network"],
      correctAnswer: "An unsupervised algorithm that groups similar data points"
    },
    {
      id: "q9-6",
      question: "What is the purpose of cross-validation in machine learning?",
      options: ["To ensure data security", "To assess how well a model generalizes to new data", "To validate user credentials", "To check data format consistency"],
      correctAnswer: "To assess how well a model generalizes to new data"
    },
    {
      id: "q9-7",
      question: "What is a decision tree in machine learning?",
      options: ["A flowchart-like model for decision making", "A type of database structure", "The organizational chart of an ML team", "A visualization of neural networks"],
      correctAnswer: "A flowchart-like model for decision making"
    },
    {
      id: "q9-8",
      question: "What does the term 'feature extraction' refer to in machine learning?",
      options: ["Removing features from a dataset", "The process of reducing data dimensions while preserving important information", "Extracting machine learning models from a database", "Creating new data from existing datasets"],
      correctAnswer: "The process of reducing data dimensions while preserving important information"
    },
    {
      id: "q9-9",
      question: "What is gradient descent used for in machine learning?",
      options: ["Data visualization", "Finding optimal parameters by minimizing an error function", "Creating test datasets", "Validating model accuracy"],
      correctAnswer: "Finding optimal parameters by minimizing an error function"
    },
    {
      id: "q9-10",
      question: "What is the difference between classification and regression in machine learning?",
      options: ["Classification predicts continuous values, regression predicts discrete categories", "Classification predicts discrete categories, regression predicts continuous values", "Classification is supervised, regression is unsupervised", "There is no difference"],
      correctAnswer: "Classification predicts discrete categories, regression predicts continuous values"
    }
  ],
  "10": [
    {
      id: "q10-1",
      question: "What is a key difference between organic and paid social media marketing?",
      options: ["Organic requires posting daily, paid does not", "Organic is free but takes more time, paid costs money but provides quicker results", "Organic is for B2B, paid is for B2C", "Organic is only for Instagram, paid is for all platforms"],
      correctAnswer: "Organic is free but takes more time, paid costs money but provides quicker results"
    },
    {
      id: "q10-2",
      question: "What is a social media algorithm?",
      options: ["A mathematical formula used to create posts", "A set of rules that determine what content users see in their feeds", "A tool to schedule posts", "A method to create viral content"],
      correctAnswer: "A set of rules that determine what content users see in their feeds"
    },
    {
      id: "q10-3",
      question: "What is the main purpose of a social media content calendar?",
      options: ["To track holidays", "To plan and organize content in advance", "To measure performance only", "To schedule meetings with the social media team"],
      correctAnswer: "To plan and organize content in advance"
    },
    {
      id: "q10-4",
      question: "What is a social media influencer?",
      options: ["Someone who works at a social media platform", "An individual with a large following who can affect purchasing decisions", "A paid employee of a brand", "A software tool for automation"],
      correctAnswer: "An individual with a large following who can affect purchasing decisions"
    },
    {
      id: "q10-5",
      question: "What is engagement rate in social media marketing?",
      options: ["The percentage of followers who interact with content", "The cost of advertising", "The number of new followers gained", "The time spent creating content"],
      correctAnswer: "The percentage of followers who interact with content"
    },
    {
      id: "q10-6",
      question: "What is a hashtag used for in social media?",
      options: ["To encrypt messages", "To categorize content and make it discoverable", "To tag people only", "To increase character count in posts"],
      correctAnswer: "To categorize content and make it discoverable"
    },
    {
      id: "q10-7",
      question: "What is a social media audit?",
      options: ["Deleting old posts", "A comprehensive review of social media performance and strategy", "A legal requirement for businesses", "Counting the number of followers"],
      correctAnswer: "A comprehensive review of social media performance and strategy"
    },
    {
      id: "q10-8",
      question: "What does UGC stand for in social media marketing?",
      options: ["Universal Graphics Content", "User-Generated Content", "Ultimate Growth Campaign", "Unified General Communication"],
      correctAnswer: "User-Generated Content"
    },
    {
      id: "q10-9",
      question: "What is a social media conversion?",
      options: ["Changing a post from one platform to another", "When a user takes a desired action from social media content", "Converting images to text", "Switching from one social platform to another"],
      correctAnswer: "When a user takes a desired action from social media content"
    },
    {
      id: "q10-10",
      question: "What is the purpose of a social listening tool?",
      options: ["To create audio content", "To monitor mentions and conversations about a brand across social media", "To improve sound quality in videos", "To automatically respond to all comments"],
      correctAnswer: "To monitor mentions and conversations about a brand across social media"
    }
  ],
  "11": [
    {
      id: "q11-1",
      question: "What is the main advantage of React Native for mobile development?",
      options: ["It creates the fastest possible apps", "It allows code sharing between iOS and Android platforms", "It provides direct access to native APIs", "It eliminates the need for testing"],
      correctAnswer: "It allows code sharing between iOS and Android platforms"
    },
    {
      id: "q11-2",
      question: "What is a component in React Native?",
      options: ["A mobile phone part", "A reusable piece of UI", "A database element", "A testing tool"],
      correctAnswer: "A reusable piece of UI"
    },
    {
      id: "q11-3",
      question: "What is the purpose of state in React Native?",
      options: ["To store the user's location", "To check if the app is active or backgrounded", "To hold data that may change over time and affect the UI", "To track the device battery level"],
      correctAnswer: "To hold data that may change over time and affect the UI"
    },
    {
      id: "q11-4",
      question: "What is the difference between props and state in React Native?",
      options: ["Props are external and passed from parent, state is internal and managed within a component", "Props are for iOS, state is for Android", "Props are visual elements, state is for data only", "There is no difference"],
      correctAnswer: "Props are external and passed from parent, state is internal and managed within a component"
    },
    {
      id: "q11-5",
      question: "What is a ScrollView in React Native?",
      options: ["A component that provides a scrolling container", "A tool to view scroll events", "A scroll analytics dashboard", "A special effect for transitions"],
      correctAnswer: "A component that provides a scrolling container"
    },
    {
      id: "q11-6",
      question: "What are Native Modules in React Native?",
      options: ["Pre-installed libraries", "Built-in UI components", "A bridge to native platform code and APIs", "Third-party packages"],
      correctAnswer: "A bridge to native platform code and APIs"
    },
    {
      id: "q11-7",
      question: "What is AsyncStorage in React Native used for?",
      options: ["Running code asynchronously", "Storing data persistently on the device", "Managing app memory", "Processing images in the background"],
      correctAnswer: "Storing data persistently on the device"
    },
    {
      id: "q11-8",
      question: "What is the purpose of the FlatList component?",
      options: ["To display flat design elements", "To efficiently render scrollable lists", "To flatten the component hierarchy", "To convert 3D elements to 2D"],
      correctAnswer: "To efficiently render scrollable lists"
    },
    {
      id: "q11-9",
      question: "What is the React Native CLI used for?",
      options: ["Cleaning the app code", "Creating and managing React Native projects", "Converting JavaScript to native code", "Optimizing images"],
      correctAnswer: "Creating and managing React Native projects"
    },
    {
      id: "q11-10",
      question: "What does the term 'Hot Reloading' refer to in React Native development?",
      options: ["Keeping devices from overheating", "Restarting the app when it crashes", "Updating the app without full recompilation while preserving state", "Quickly deploying to app stores"],
      correctAnswer: "Updating the app without full recompilation while preserving state"
    }
  ],
  "12": [
    {
      id: "q12-1",
      question: "What is the difference between management and leadership?",
      options: ["Management is about tasks, leadership is about vision and inspiring people", "Management is strategic, leadership is tactical", "Management is informal, leadership is formal", "They are the same thing with different names"],
      correctAnswer: "Management is about tasks, leadership is about vision and inspiring people"
    },
    {
      id: "q12-2",
      question: "What is situational leadership?",
      options: ["Leading only in specific situations", "Adapting leadership style based on the situation and team members' needs", "Delegating all decisions to the team", "Leading from a specific physical location"],
      correctAnswer: "Adapting leadership style based on the situation and team members' needs"
    },
    {
      id: "q12-3",
      question: "What is the main purpose of delegation in leadership?",
      options: ["To avoid responsibility", "To empower team members and develop their skills", "To reduce the leader's workload only", "To test if team members follow instructions"],
      correctAnswer: "To empower team members and develop their skills"
    },
    {
      id: "q12-4",
      question: "What is emotional intelligence in leadership?",
      options: ["Being emotional when leading", "The ability to recognize and manage your own emotions and those of others", "Avoiding all emotions in the workplace", "Using emotions to manipulate team members"],
      correctAnswer: "The ability to recognize and manage your own emotions and those of others"
    },
    {
      id: "q12-5",
      question: "What is a key characteristic of transformational leadership?",
      options: ["Maintaining the status quo", "Focusing only on short-term goals", "Inspiring and motivating followers to exceed expectations", "Avoiding change whenever possible"],
      correctAnswer: "Inspiring and motivating followers to exceed expectations"
    },
    {
      id: "q12-6",
      question: "What is the purpose of a SMART goal in team management?",
      options: ["To create only technology-related goals", "To ensure goals are specific, measurable, achievable, relevant, and time-bound", "To make simple goals more complex", "To focus only on long-term objectives"],
      correctAnswer: "To ensure goals are specific, measurable, achievable, relevant, and time-bound"
    },
    {
      id: "q12-7",
      question: "What is constructive feedback?",
      options: ["Criticism that focuses only on mistakes", "Only positive comments", "Specific, issue-focused feedback aimed at improvement", "Annual performance reviews"],
      correctAnswer: "Specific, issue-focused feedback aimed at improvement"
    },
    {
      id: "q12-8",
      question: "What is conflict resolution in team management?",
      options: ["Avoiding all conflicts", "The process of addressing and resolving disputes constructively", "Punishing those who cause conflicts", "Ignoring disagreements until they resolve themselves"],
      correctAnswer: "The process of addressing and resolving disputes constructively"
    },
    {
      id: "q12-9",
      question: "What is the purpose of team building activities?",
      options: ["To take breaks from work", "To improve communication, build trust, and enhance team dynamics", "To identify the weakest team members", "To create competition between team members"],
      correctAnswer: "To improve communication, build trust, and enhance team dynamics"
    },
    {
      id: "q12-10",
      question: "What is servant leadership?",
      options: ["Leading by doing all the work yourself", "A leadership philosophy where the leader's main goal is to serve the team", "Following all team members' requests without question", "A hierarchical leadership approach"],
      correctAnswer: "A leadership philosophy where the leader's main goal is to serve the team"
    }
  ]
};
