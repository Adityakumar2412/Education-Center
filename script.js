// Expanded course data with 100+ courses
const courses = [
    // Programming (30 courses)
    { id: 1, title: "Python Programming Basics", description: "Learn Python from scratch", category: "programming" },
    { id: 2, title: "Advanced Python Concepts", description: "Master advanced Python features", category: "programming" },
    { id: 3, title: "Web Development with Django", description: "Build web apps with Django", category: "programming" },
    { id: 4, title: "JavaScript Fundamentals", description: "Learn core JavaScript concepts", category: "programming" },
    { id: 5, title: "React.js Complete Guide", description: "Master React for frontend development", category: "programming" },
    { id: 6, title: "Node.js Backend Development", description: "Build server-side applications", category: "programming" },
    { id: 7, title: "Java Programming", description: "Learn Java from basics to advanced", category: "programming" },
    { id: 8, title: "C++ for Beginners", description: "Introduction to C++ programming", category: "programming" },
    { id: 9, title: "Data Structures & Algorithms", description: "Master fundamental CS concepts", category: "programming" },
    { id: 10, title: "Mobile App Development with Flutter", description: "Build cross-platform apps", category: "programming" },
    { id: 11, title: "Swift for iOS Development", description: "Create iOS applications", category: "programming" },
    { id: 12, title: "Kotlin for Android", description: "Android app development", category: "programming" },
    { id: 13, title: "PHP & MySQL Web Development", description: "Server-side web programming", category: "programming" },
    { id: 14, title: "Ruby on Rails Fundamentals", description: "Web development with Rails", category: "programming" },
    { id: 15, title: "Go Programming Language", description: "Learn Google's Go language", category: "programming" },
    { id: 16, title: "TypeScript Masterclass", description: "Advanced JavaScript with types", category: "programming" },
    { id: 17, title: "Angular Framework", description: "Build enterprise applications", category: "programming" },
    { id: 18, title: "Vue.js Complete Course", description: "Modern frontend framework", category: "programming" },
    { id: 19, title: "Rust Programming", description: "Systems programming language", category: "programming" },
    { id: 20, title: "Functional Programming", description: "Learn functional paradigms", category: "programming" },
    { id: 21, title: "Game Development with Unity", description: "Create 2D/3D games", category: "programming" },
    { id: 22, title: "C# Programming", description: ".NET development", category: "programming" },
    { id: 23, title: "Scala Programming", description: "JVM functional language", category: "programming" },
    { id: 24, title: "Perl Scripting", description: "Text processing and more", category: "programming" },
    { id: 25, title: "Haskell Fundamentals", description: "Pure functional programming", category: "programming" },
    { id: 26, title: "Assembly Language", description: "Low-level programming", category: "programming" },
    { id: 27, title: "Shell Scripting", description: "Automate tasks with bash", category: "programming" },
    { id: 28, title: "Blockchain Development", description: "Smart contracts & DApps", category: "programming" },
    { id: 29, title: "Quantum Computing Basics", description: "Introduction to Q#", category: "programming" },
    { id: 30, title: "Embedded Systems Programming", description: "C for embedded devices", category: "programming" },
    
    // Marketing (20 courses)
    { id: 31, title: "Digital Marketing Fundamentals", description: "Introduction to online marketing", category: "marketing" },
    { id: 32, title: "SEO Mastery", description: "Search engine optimization", category: "marketing" },
    { id: 33, title: "Social Media Marketing", description: "Marketing on social platforms", category: "marketing" },
    { id: 34, title: "Content Marketing Strategy", description: "Create engaging content", category: "marketing" },
    { id: 35, title: "Email Marketing", description: "Effective email campaigns", category: "marketing" },
    { id: 36, title: "Google Ads Certification", description: "Master Google advertising", category: "marketing" },
    { id: 37, title: "Facebook Advertising", description: "Ads on Facebook/Instagram", category: "marketing" },
    { id: 38, title: "Inbound Marketing", description: "Attract and retain customers", category: "marketing" },
    { id: 39, title: "Marketing Analytics", description: "Measure campaign performance", category: "marketing" },
    { id: 40, title: "Brand Management", description: "Build strong brands", category: "marketing" },
    { id: 41, title: "Copywriting for Marketers", description: "Persuasive writing skills", category: "marketing" },
    { id: 42, title: "Marketing Psychology", description: "Understand consumer behavior", category: "marketing" },
    { id: 43, title: "Video Marketing", description: "Create engaging video content", category: "marketing" },
    { id: 44, title: "Affiliate Marketing", description: "Earn through referrals", category: "marketing" },
    { id: 45, title: "Growth Hacking", description: "Rapid business growth", category: "marketing" },
    { id: 46, title: "Marketing Automation", description: "Streamline marketing tasks", category: "marketing" },
    { id: 47, title: "LinkedIn Marketing", description: "B2B lead generation", category: "marketing" },
    { id: 48, title: "Influencer Marketing", description: "Leverage social influence", category: "marketing" },
    { id: 49, title: "Mobile Marketing", description: "Reach mobile users", category: "marketing" },
    { id: 50, title: "Marketing for Startups", description: "Marketing on a budget", category: "marketing" },
    
    // Design (20 courses)
    { id: 51, title: "Graphic Design Fundamentals", description: "Core design principles", category: "design" },
    { id: 52, title: "UI/UX Design", description: "User interface and experience", category: "design" },
    { id: 53, title: "Adobe Photoshop Masterclass", description: "Photo editing and more", category: "design" },
    { id: 54, title: "Illustrator for Beginners", description: "Vector graphics creation", category: "design" },
    { id: 55, title: "Web Design", description: "Design beautiful websites", category: "design" },
    { id: 56, title: "Typography Essentials", description: "Art of type design", category: "design" },
    { id: 57, title: "Logo Design", description: "Create memorable logos", category: "design" },
    { id: 58, title: "Motion Graphics", description: "Animation with After Effects", category: "design" },
    { id: 59, title: "3D Modeling with Blender", description: "3D design fundamentals", category: "design" },
    { id: 60, title: "Figma for UI Design", description: "Collaborative design tool", category: "design" },
    { id: 61, title: "Adobe XD Prototyping", description: "Interactive prototypes", category: "design" },
    { id: 62, title: "Color Theory", description: "Psychology of color", category: "design" },
    { id: 63, title: "Print Design", description: "Design for print media", category: "design" },
    { id: 64, title: "Packaging Design", description: "Product packaging", category: "design" },
    { id: 65, title: "Illustration Techniques", description: "Digital illustration", category: "design" },
    { id: 66, title: "Design Thinking", description: "Creative problem solving", category: "design" },
    { id: 67, title: "Infographic Design", description: "Visual data presentation", category: "design" },
    { id: 68, title: "Sketching for Designers", description: "Drawing fundamentals", category: "design" },
    { id: 69, title: "Game Design", description: "Video game creation", category: "design" },
    { id: 70, title: "Interior Design Basics", description: "Space planning", category: "design" },
    
    // Business (20 courses)
    { id: 71, title: "Business Fundamentals", description: "Core business concepts", category: "business" },
    { id: 72, title: "Entrepreneurship", description: "Start your own business", category: "business" },
    { id: 73, title: "Financial Accounting", description: "Business finance basics", category: "business" },
    { id: 74, title: "Project Management", description: "Manage projects effectively", category: "business" },
    { id: 75, title: "Digital Transformation", description: "Business in digital age", category: "business" },
    { id: 76, title: "Leadership Skills", description: "Lead teams effectively", category: "business" },
    { id: 77, title: "Negotiation Strategies", description: "Win-win negotiations", category: "business" },
    { id: 78, title: "Business Analytics", description: "Data-driven decisions", category: "business" },
    { id: 79, title: "Supply Chain Management", description: "Logistics and operations", category: "business" },
    { id: 80, title: "Human Resources", description: "People management", category: "business" },
    { id: 81, title: "Sales Techniques", description: "Effective selling", category: "business" },
    { id: 82, title: "Business Law", description: "Legal aspects", category: "business" },
    { id: 83, title: "International Business", description: "Global commerce", category: "business" },
    { id: 84, title: "E-commerce Business", description: "Online stores", category: "business" },
    { id: 85, title: "Business Strategy", description: "Long-term planning", category: "business" },
    { id: 86, title: "Risk Management", description: "Identify and mitigate risks", category: "business" },
    { id: 87, title: "Corporate Finance", description: "Financial management", category: "business" },
    { id: 88, title: "Business Communication", description: "Professional communication", category: "business" },
    { id: 89, title: "Startup Funding", description: "Raise capital", category: "business" },
    { id: 90, title: "Business Ethics", description: "Ethical decision making", category: "business" },
    
    // Data Science (10 courses)
    { id: 91, title: "Data Science Fundamentals", description: "Introduction to data science", category: "data" },
    { id: 92, title: "Machine Learning", description: "AI and predictive models", category: "data" },
    { id: 93, title: "Python for Data Analysis", description: "Pandas and NumPy", category: "data" },
    { id: 94, title: "SQL for Data Science", description: "Database querying", category: "data" },
    { id: 95, title: "Data Visualization", description: "Present data effectively", category: "data" },
    { id: 96, title: "Big Data Technologies", description: "Hadoop and Spark", category: "data" },
    { id: 97, title: "Deep Learning", description: "Neural networks", category: "data" },
    { id: 98, title: "Natural Language Processing", description: "Text analysis", category: "data" },
    { id: 99, title: "Data Engineering", description: "Data pipelines", category: "data" },
    { id: 100, title: "Business Intelligence", description: "Data for decisions", category: "data" }
];

// Sample quiz questions
const quizQuestions = {
    1: [
        {
            question: "What is the correct way to declare a variable in Python?",
            options: ["var x", "x = variable", "x = 5", "declare x"],
            answer: 2
        },
        {
            question: "Which of these is NOT a Python data type?",
            options: ["int", "float", "char", "str"],
            answer: 2
        },
        {
            question: "What does the 'print()' function do?",
            options: ["Reads user input", "Outputs text to the console", "Creates a new file", "Performs mathematical calculations"],
            answer: 1
        },
        {
            question: "How do you start a single-line comment in Python?",
            options: ["//", "#", "--", "/*"],
            answer: 1
        },
        {
            question: "Which operator is used for exponentiation in Python?",
            options: ["^", "**", "*", "^^"],
            answer: 1
        },
        {
            question: "What is the output of '3 + 2 * 4' in Python?",
            options: ["20", "11", "14", "Error"],
            answer: 1
        },
        {
            question: "Which function converts a string to an integer in Python?",
            options: ["str()", "int()", "float()", "parse()"],
            answer: 1
        },
        {
            question: "How do you create an empty list in Python?",
            options: ["list()", "[]", "{}", "new List()"],
            answer: 1
        },
        {
            question: "What does the 'len()' function do?",
            options: ["Converts to lowercase", "Returns the length of an object", "Performs division", "Imports a module"],
            answer: 1
        },
        {
            question: "Which keyword is used to define a function in Python?",
            options: ["def", "function", "func", "define"],
            answer: 0
        }
    ],
    2: [
        {
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language"],
            answer: 0
        },
        {
            question: "Which tag is used to link a CSS file to an HTML document?",
            options: ["<script>", "<css>", "<style>", "<link>"],
            answer: 3
        },
        {
            question: "What is the correct way to comment in CSS?",
            options: ["// comment", "/* comment */", "<!-- comment -->", "# comment"],
            answer: 1
        },
        {
            question: "Which property is used to change the text color in CSS?",
            options: ["font-color", "text-color", "color", "font-style"],
            answer: 2
        },
        {
            question: "How do you select an element with id 'header' in CSS?",
            options: [".header", "*header", "#header", "header"],
            answer: 2
        },
        {
            question: "Which JavaScript method is used to select an HTML element by its id?",
            options: ["document.querySelector()", "document.getElementById()", "document.getElementByClass()", "document.findElement()"],
            answer: 1
        },
        {
            question: "What does CSS stand for?",
            options: ["Computer Style Sheets", "Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"],
            answer: 2
        },
        {
            question: "Which HTML tag is used for the largest heading?",
            options: ["<h6>", "<heading>", "<h1>", "<head>"],
            answer: 2
        },
        {
            question: "How do you declare a JavaScript variable?",
            options: ["variable x", "v x", "var x", "let x"],
            answer: 3
        },
        {
            question: "Which property is used to change the font of an element?",
            options: ["font-style", "font-family", "font-weight", "text-font"],
            answer: 1
        }
    ]
};

// DOM elements
const authForms = document.getElementById('auth-forms');
const profileSection = document.getElementById('profile-section');
const aboutSection = document.getElementById('about-section');
const coursesSection = document.getElementById('courses-section');
const contactSection = document.getElementById('contact-section');
const coursesList = document.getElementById('courses-list');
const quizContainer = document.getElementById('quiz-container');
const quizQuestionsDiv = document.getElementById('quiz-questions');
const quizResult = document.getElementById('quiz-result');
const submitQuizBtn = document.getElementById('submit-quiz');
const certificate = document.getElementById('certificate');
const downloadCertificateBtn = document.getElementById('download-certificate');
const userInfoDiv = document.getElementById('user-info');

// Profile elements
const profileForm = document.getElementById('profile-form');
const editProfileBtn = document.getElementById('edit-profile');
const saveProfileBtn = document.getElementById('save-profile');
const cancelEditBtn = document.getElementById('cancel-edit');
const editNameInput = document.getElementById('edit-name');
const editEmailInput = document.getElementById('edit-email');
const editPhoneInput = document.getElementById('edit-phone');
const editPhotoInput = document.getElementById('edit-photo');
const profileName = document.getElementById('profile-name');
const profileEmail = document.getElementById('profile-email');
const profilePhone = document.getElementById('profile-phone');
const profilePicLarge = document.getElementById('profile-pic-large');
const navProfilePic = document.createElement('img');
navProfilePic.className = 'profile-pic';

// Navigation links
document.getElementById('home-link').addEventListener('click', () => {
    coursesSection.classList.add('hidden');
    contactSection.classList.add('hidden');
    profileSection.classList.add('hidden');
    aboutSection.classList.add('hidden');
    authForms.classList.remove('hidden');
});

document.getElementById('courses-link').addEventListener('click', () => {
    if (currentUser) {
        authForms.classList.add('hidden');
        contactSection.classList.add('hidden');
        profileSection.classList.add('hidden');
        aboutSection.classList.add('hidden');
        coursesSection.classList.remove('hidden');
        loadCourses();
    } else {
        alert('Please login to view courses');
    }
});

document.getElementById('profile-link').addEventListener('click', () => {
    if (currentUser) {
        authForms.classList.add('hidden');
        coursesSection.classList.add('hidden');
        contactSection.classList.add('hidden');
        aboutSection.classList.add('hidden');
        profileSection.classList.remove('hidden');
        loadProfile();
    } else {
        alert('Please login to view profile');
    }
});

document.getElementById('about-link').addEventListener('click', () => {
    authForms.classList.add('hidden');
    coursesSection.classList.add('hidden');
    contactSection.classList.add('hidden');
    profileSection.classList.add('hidden');
    aboutSection.classList.remove('hidden');
});

document.getElementById('contact-link').addEventListener('click', () => {
    authForms.classList.add('hidden');
    coursesSection.classList.add('hidden');
    profileSection.classList.add('hidden');
    aboutSection.classList.add('hidden');
    contactSection.classList.remove('hidden');
});

// Current user
let currentUser = null;
let enrolledCourses = [];
let currentCategory = 'all';

// Login form
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // In a real app, you would validate against a database
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        alert('Login successful!');
        authForms.classList.add('hidden');
        coursesSection.classList.remove('hidden');
        updateUserInfo();
        loadCourses();
    } else {
        alert('Invalid email or password');
    }
});

// Register form
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const phone = document.getElementById('register-phone').value;
    
    // Validate
    if (!name || !email || !password || !phone) {
        alert('Please fill all fields');
        return;
    }
    
    // Check if user already exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.some(u => u.email === email)) {
        alert('User already exists');
        return;
    }
    
    // Create new user
    const newUser = { 
        name, 
        email, 
        password, 
        phone,
        photo: 'https://i.imgur.com/8Km9tLL.jpg' // Default profile photo
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Registration successful! Please login.');
    document.getElementById('register-form').reset();
});

// Load courses with category filtering
function loadCourses() {
    coursesList.innerHTML = '';
    
    const filteredCourses = currentCategory === 'all' 
        ? courses 
        : courses.filter(course => course.category === currentCategory);
    
    filteredCourses.forEach(course => {
        const isEnrolled = enrolledCourses.includes(course.id);
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <p><small>Category: ${course.category.toUpperCase()}</small></p>
            <button class="enroll-btn" data-id="${course.id}" ${isEnrolled ? 'disabled' : ''}>
                ${isEnrolled ? 'Enrolled' : 'Enroll Now'}
            </button>
            ${isEnrolled ? `<button class="start-quiz" data-id="${course.id}">Start Quiz</button>` : ''}
        `;
        coursesList.appendChild(card);
    });
    
    // Add event listeners to enroll buttons
    document.querySelectorAll('.enroll-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const courseId = parseInt(e.target.getAttribute('data-id'));
            enrolledCourses.push(courseId);
            localStorage.setItem(`user_${currentUser.email}_courses`, JSON.stringify(enrolledCourses));
            loadCourses();
        });
    });
    
    // Add event listeners to quiz buttons
    document.querySelectorAll('.start-quiz').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const courseId = parseInt(e.target.getAttribute('data-id'));
            startQuiz(courseId);
        });
    });
}

// Category filter buttons
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentCategory = e.target.getAttribute('data-category');
        loadCourses();
    });
});

// Start quiz
function startQuiz(courseId) {
    const course = courses.find(c => c.id === courseId);
    document.getElementById('quiz-title').textContent = `${course.title} Quiz`;
    
    quizQuestionsDiv.innerHTML = '';
    const questions = quizQuestions[courseId] || quizQuestions[1]; // Default to first course if no questions
    
    questions.forEach((q, i) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';
        questionDiv.innerHTML = `
            <p><strong>Question ${i + 1}:</strong> ${q.question}</p>
            ${q.options.map((opt, j) => `
                <div>
                    <input type="radio" name="q${i}" id="q${i}o${j}" value="${j}">
                    <label for="q${i}o${j}">${opt}</label>
                </div>
            `).join('')}
        `;
        quizQuestionsDiv.appendChild(questionDiv);
    });
    
    quizContainer.style.display = 'block';
    window.scrollTo(0, quizContainer.offsetTop);
}

// Submit quiz
submitQuizBtn.addEventListener('click', () => {
    const courseTitle = document.getElementById('quiz-title').textContent.replace(' Quiz', '');
    const course = courses.find(c => c.title === courseTitle);
    const questions = quizQuestions[course.id] || quizQuestions[1];
    
    let correct = 0;
    questions.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) {
            correct++;
        }
    });
    
    const score = Math.round((correct / questions.length) * 100);
    quizResult.innerHTML = `You scored ${score}% (${correct} out of ${questions.length} correct)`;
    
    if (score >= 90) {
        quizResult.innerHTML += '<p>Congratulations! You earned a certificate.</p>';
        generateCertificate(course.title, score);
    } else {
        quizResult.innerHTML += '<p>You need at least 90% to get a certificate. Try again!</p>';
    }
});

// Generate certificate
function generateCertificate(courseTitle, score) {
    document.getElementById('certificate-name').textContent = currentUser.name;
    document.getElementById('certificate-course').textContent = courseTitle;
    document.getElementById('certificate-score').textContent = score;
    
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('certificate-date').textContent = today.toLocaleDateString('en-US', options);
    
    certificate.style.display = 'block';
    window.scrollTo(0, certificate.offsetTop);
    
    // Save certificate to user's profile
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    
    if (userIndex !== -1) {
        if (!users[userIndex].certificates) {
            users[userIndex].certificates = [];
        }
        
        const certificateData = {
            course: courseTitle,
            score: score,
            date: today.toISOString(),
            issuedBy: "Education Center"
        };
        
        users[userIndex].certificates.push(certificateData);
        localStorage.setItem('users', JSON.stringify(users));
        currentUser = users[userIndex];
    }
}

// Download certificate as PDF
downloadCertificateBtn.addEventListener('click', () => {
    const element = document.getElementById('certificate');
    const opt = {
        margin: 10,
        filename: 'EducationCenter_Certificate.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save();
});

// Load profile
function loadProfile() {
    profileName.textContent = currentUser.name;
    profileEmail.textContent = currentUser.email;
    profilePhone.textContent = currentUser.phone;
    
    editNameInput.value = currentUser.name;
    editEmailInput.value = currentUser.email;
    editPhoneInput.value = currentUser.phone;
    
    profilePicLarge.src = currentUser.photo || 'https://i.imgur.com/8Km9tLL.jpg';
    navProfilePic.src = currentUser.photo || 'https://i.imgur.com/8Km9tLL.jpg';
}

// Edit profile
editProfileBtn.addEventListener('click', () => {
    editNameInput.disabled = false;
    editPhoneInput.disabled = false;
    editPhotoInput.disabled = false;
    
    editProfileBtn.classList.add('hidden');
    saveProfileBtn.classList.remove('hidden');
    cancelEditBtn.classList.remove('hidden');
});

// Cancel edit
cancelEditBtn.addEventListener('click', () => {
    editNameInput.disabled = true;
    editPhoneInput.disabled = true;
    editPhotoInput.disabled = true;
    
    editProfileBtn.classList.remove('hidden');
    saveProfileBtn.classList.add('hidden');
    cancelEditBtn.classList.add('hidden');
    
    // Reset values
    editNameInput.value = currentUser.name;
    editPhoneInput.value = currentUser.phone;
    editPhotoInput.value = '';
});

// Save profile
profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = editNameInput.value;
    const phone = editPhoneInput.value;
    
    // Handle photo upload
    if (editPhotoInput.files && editPhotoInput.files[0]) {
        const file = editPhotoInput.files[0];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const photoData = e.target.result;
            
            // Update user data
            const users = JSON.parse(localStorage.getItem('users')) || [];
            const userIndex = users.findIndex(u => u.email === currentUser.email);
            
            if (userIndex !== -1) {
                users[userIndex].name = name;
                users[userIndex].phone = phone;
                users[userIndex].photo = photoData;
                
                localStorage.setItem('users', JSON.stringify(users));
                currentUser = users[userIndex];
                
                // Update UI
                profileName.textContent = name;
                profilePhone.textContent = phone;
                profilePicLarge.src = photoData;
                navProfilePic.src = photoData;
                
                // Disable inputs
                editNameInput.disabled = true;
                editPhoneInput.disabled = true;
                editPhotoInput.disabled = true;
                
                editProfileBtn.classList.remove('hidden');
                saveProfileBtn.classList.add('hidden');
                cancelEditBtn.classList.add('hidden');
                
                // Reset photo input
                editPhotoInput.value = '';
            }
        };
        
        reader.readAsDataURL(file);
    } else {
        // Update without changing photo
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userIndex = users.findIndex(u => u.email === currentUser.email);
        
        if (userIndex !== -1) {
            users[userIndex].name = name;
            users[userIndex].phone = phone;
            
            localStorage.setItem('users', JSON.stringify(users));
            currentUser = users[userIndex];
            
            // Update UI
            profileName.textContent = name;
            profilePhone.textContent = phone;
            
            // Disable inputs
            editNameInput.disabled = true;
            editPhoneInput.disabled = true;
            editPhotoInput.disabled = true;
            
            editProfileBtn.classList.remove('hidden');
            saveProfileBtn.classList.add('hidden');
            cancelEditBtn.classList.add('hidden');
        }
    }
});

// Update user info in nav
function updateUserInfo() {
    if (currentUser) {
        userInfoDiv.innerHTML = '';
        navProfilePic.src = currentUser.photo || 'https://i.imgur.com/8Km9tLL.jpg';
        userInfoDiv.appendChild(navProfilePic);
        
        const userName = document.createElement('span');
        userName.textContent = currentUser.name;
        userInfoDiv.appendChild(userName);
        
        // Load enrolled courses from localStorage
        const savedCourses = localStorage.getItem(`user_${currentUser.email}_courses`);
        enrolledCourses = savedCourses ? JSON.parse(savedCourses) : [];
    } else {
        userInfoDiv.innerHTML = '';
    }
}

// Initialize
updateUserInfo();