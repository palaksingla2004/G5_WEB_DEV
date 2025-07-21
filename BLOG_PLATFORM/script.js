// Blog data
let blogs = [
    {
        id: '1',
        title: 'Getting Started with React',
        description: 'A comprehensive guide to starting your React journey with hooks, components, and modern best practices.',
        content: `React has revolutionized the way we build user interfaces. In this comprehensive guide, we'll explore the fundamentals of React development and get you started on your journey.

## What is React?

React is a JavaScript library for building user interfaces, particularly web applications. It was developed by Facebook and has become one of the most popular front-end libraries in the world.

## Key Concepts

### Components
Components are the building blocks of React applications. They let you split the UI into independent, reusable pieces.

### JSX
JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.

### State and Props
State allows components to manage their own data, while props let you pass data from parent to child components.

## Getting Started

1. **Install Node.js**: Make sure you have Node.js installed on your system
2. **Create React App**: Use create-react-app to bootstrap your project
3. **Start Building**: Begin creating components and building your application

## Best Practices

- Keep components small and focused
- Use meaningful names for components and variables
- Implement proper error handling
- Write tests for your components
- Use TypeScript for better type safety

React's ecosystem is vast and constantly evolving. Take time to explore the official documentation and community resources to deepen your understanding.`,
        url: 'https://reactjs.org',
        author: 'John Doe',
        category: 'React',
        date: '2024-01-15',
        createdAt: new Date('2024-01-15')
    },
    {
        id: '2',
        title: 'TypeScript Best Practices',
        description: 'Learn the best practices for writing clean, maintainable TypeScript code in modern web applications.',
        content: `TypeScript has become the go-to choice for building large-scale JavaScript applications. Here are the best practices that will help you write better TypeScript code.

## Why TypeScript?

TypeScript provides static type checking, better IDE support, and helps catch errors at compile time rather than runtime.

## Essential Best Practices

### 1. Use Strict Mode
Always enable strict mode in your TypeScript configuration:

\`\`\`json
{
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`

### 2. Define Interfaces for Objects
Create clear interfaces for your data structures:

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
}
\`\`\`

### 3. Use Union Types
Leverage union types for flexible yet type-safe code:

\`\`\`typescript
type Status = 'loading' | 'success' | 'error';
\`\`\`

### 4. Avoid 'any' Type
Try to avoid using 'any' as it defeats the purpose of TypeScript.

### 5. Use Generics
Generics provide reusable and type-safe code:

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}
\`\`\`

## Advanced Techniques

- Use mapped types for transformations
- Implement conditional types for complex logic
- Leverage utility types like Partial, Pick, and Omit
- Create custom type guards for runtime type checking

TypeScript's type system is powerful and can help you build more robust applications. Invest time in learning its advanced features.`,
        url: 'https://www.typescriptlang.org',
        author: 'Jane Smith',
        category: 'TypeScript',
        date: '2024-01-20',
        createdAt: new Date('2024-01-20')
    },
    {
        id: '3',
        title: 'Building Modern Web Apps',
        description: 'A comprehensive guide to building modern, scalable web applications using the latest technologies and patterns.',
        content: `Modern web development has evolved significantly in recent years. This guide covers the essential concepts and technologies for building scalable web applications.

## Architecture Patterns

### Single Page Applications (SPAs)
SPAs provide a smooth user experience by loading content dynamically without full page refreshes.

### Progressive Web Apps (PWAs)
PWAs combine the best of web and mobile apps, offering offline functionality and native-like experiences.

### Micro-frontends
Breaking down monolithic frontend applications into smaller, manageable pieces.

## Essential Technologies

### Frontend Frameworks
- **React**: Component-based library with a rich ecosystem
- **Vue.js**: Progressive framework with excellent documentation
- **Angular**: Full-featured framework for enterprise applications

### Build Tools
- **Vite**: Fast build tool for modern web development
- **Webpack**: Powerful module bundler with extensive configuration options
- **Parcel**: Zero-configuration build tool

### State Management
- **Redux**: Predictable state container for JavaScript apps
- **MobX**: Simple, scalable state management through reactive programming
- **Zustand**: Small, fast state management solution

## Best Practices

### Performance Optimization
- Implement code splitting and lazy loading
- Optimize images and assets
- Use CDNs for static content delivery
- Monitor and analyze performance metrics

### Accessibility
- Follow WCAG guidelines
- Implement proper ARIA attributes
- Ensure keyboard navigation
- Test with screen readers

### Security
- Validate all user inputs
- Implement proper authentication
- Use HTTPS everywhere
- Keep dependencies updated

### Testing
- Write unit tests for components
- Implement integration tests
- Use end-to-end testing for critical flows
- Maintain good test coverage

## DevOps and Deployment

Modern web applications require proper CI/CD pipelines, containerization, and monitoring. Consider using platforms like Vercel, Netlify, or AWS for deployment.

The web development landscape continues to evolve rapidly. Stay updated with the latest trends and best practices to build applications that are fast, secure, and maintainable.`,
        url: 'https://web.dev',
        author: 'Mike Johnson',
        category: 'Web Development',
        date: '2024-01-25',
        createdAt: new Date('2024-01-25')
    },
    {
        id: '4',
        title: 'CSS Grid vs Flexbox: When to Use Each',
        description: 'Understanding the differences between CSS Grid and Flexbox, and when to use each layout method effectively.',
        content: `CSS Grid and Flexbox are two powerful layout systems in CSS. While they can sometimes achieve similar results, they're designed for different use cases.

## Flexbox: One-Dimensional Layouts

Flexbox is designed for one-dimensional layouts - either a row or a column.

### When to Use Flexbox:
- Navigation bars
- Card layouts in a row
- Centering content
- Distributing space between items
- When you need items to grow or shrink

### Flexbox Example:
\`\`\`css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

## CSS Grid: Two-Dimensional Layouts

CSS Grid is designed for two-dimensional layouts - both rows and columns simultaneously.

### When to Use CSS Grid:
- Complex page layouts
- Card grids with varying sizes
- Magazine-style layouts
- When you need precise control over both dimensions
- Responsive layouts with different breakpoints

### Grid Example:
\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
}
\`\`\`

## Practical Guidelines

### Use Flexbox When:
- You're working with a single row or column
- You need to align items within a container
- You want items to grow or shrink based on available space
- Building navigation components

### Use Grid When:
- You're creating a complex layout with both rows and columns
- You need to place items in specific grid positions
- You're building responsive layouts with different structures
- Creating dashboard-style interfaces

## Combining Both

Often, the best approach is to use Grid for the overall page layout and Flexbox for component-level layouts.

\`\`\`css
/* Grid for overall layout */
.page-layout {
  display: grid;
  grid-template-areas: 
    "header header"
    "sidebar main"
    "footer footer";
}

/* Flexbox for navigation */
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
\`\`\`

Remember: these technologies complement each other. Learn both and use the right tool for each specific layout challenge.`,
        url: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
        author: 'Sarah Wilson',
        category: 'CSS',
        date: '2024-02-01',
        createdAt: new Date('2024-02-01')
    },
    {
        id: '5',
        title: 'JavaScript ES2023 Features',
        description: 'Explore the latest JavaScript ES2023 features and how they can improve your code quality and developer experience.',
        content: `JavaScript continues to evolve with new features that make development more enjoyable and code more readable. Let's explore the key features introduced in ES2023.

## Array Methods

### \`findLast()\` and \`findLastIndex()\`
These methods work like \`find()\` and \`findIndex()\`, but search from the end of the array.

\`\`\`javascript
const numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
const lastEven = numbers.findLast(n => n % 2 === 0); // 2
const lastEvenIndex = numbers.findLastIndex(n => n % 2 === 0); // 7
\`\`\`

### \`toReversed()\`, \`toSorted()\`, \`toSpliced()\`
These are immutable versions of existing array methods.

\`\`\`javascript
const original = [3, 1, 4, 1, 5];
const reversed = original.toReversed(); // [5, 1, 4, 1, 3]
const sorted = original.toSorted(); // [1, 1, 3, 4, 5]
// original array remains unchanged
\`\`\`

## Hashbang Comments

You can now use hashbang comments at the beginning of JavaScript files:

\`\`\`javascript
#!/usr/bin/env node
console.log('Hello, World!');
\`\`\`

## Symbols as WeakMap Keys

WeakMaps can now use Symbols as keys:

\`\`\`javascript
const weakMap = new WeakMap();
const symbol = Symbol('key');
weakMap.set(symbol, 'value');
\`\`\`

## Practical Applications

### Immutable Array Operations
The new immutable array methods are perfect for React state updates:

\`\`\`javascript
// Instead of mutating state
const handleSort = () => {
  setItems(items.sort());
};

// Use immutable version
const handleSort = () => {
  setItems(items.toSorted());
};
\`\`\`

### Better Performance with \`findLast()\`
When you know the item you're looking for is likely at the end:

\`\`\`javascript
// More efficient for finding recent items
const recentLog = logs.findLast(log => log.level === 'error');
\`\`\`

## Browser Support

These features are well-supported in modern browsers. For older browsers, consider using Babel or polyfills.

## Best Practices

1. Use immutable methods when working with React state
2. Prefer \`findLast()\` when searching from the end makes sense
3. Use hashbang comments for Node.js scripts
4. Consider Symbol keys in WeakMaps for truly private metadata

ES2023 brings practical improvements that can make your JavaScript code more elegant and performant. Start incorporating these features into your projects today!`,
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        author: 'Alex Chen',
        category: 'JavaScript',
        date: '2024-02-05',
        createdAt: new Date('2024-02-05')
    }
];

// DOM Elements
const blogGrid = document.getElementById('blog-grid');
const blogContent = document.getElementById('blog-content');
const blogDetail = document.getElementById('blog-detail');
const blogsSection = document.getElementById('blogs');
const backToBlogsBtn = document.getElementById('back-to-blogs');
const searchInput = document.getElementById('search');
const categoryFilter = document.getElementById('category-filter');
const sortFilter = document.getElementById('sort-filter');
const blogCount = document.getElementById('blog-count');
const blogForm = document.getElementById('blog-form');

// Current filters
const filters = {
    search: '',
    category: 'all',
    sortBy: 'newest'
};

// Initialize the app
function init() {
    renderBlogs();
    setupEventListeners();
}

// Render blogs based on current filters
function renderBlogs() {
    const filteredBlogs = getFilteredBlogs();
    blogGrid.innerHTML = '';
    
    filteredBlogs.forEach(blog => {
        const blogCard = createBlogCard(blog);
        blogGrid.appendChild(blogCard);
    });
    
    updateBlogCount(filteredBlogs.length);
}

// Create a blog card element
function createBlogCard(blog) {
    const card = document.createElement('div');
    card.className = 'blog-card';
    card.innerHTML = `
        <div class="blog-card-header">
            <div class="blog-card-meta">
                <span class="blog-category">${blog.category}</span>
                <span class="blog-date">${formatDate(blog.date)}</span>
            </div>
            <h3 class="blog-title">${blog.title}</h3>
            <p class="blog-description">${blog.description}</p>
        </div>
        <div class="blog-card-footer">
            <span class="blog-author">${blog.author}</span>
            <button class="btn btn-outline read-more" data-id="${blog.id}">Read More</button>
        </div>
    `;
    return card;
}

// Show blog detail
function showBlogDetail(id) {
    const blog = blogs.find(blog => blog.id === id);
    if (!blog) return;
    
    blogContent.innerHTML = `
        <div class="blog-content-header">
            <div class="blog-content-meta">
                <span class="blog-category">${blog.category}</span>
                <span class="blog-date">${formatDate(blog.date)}</span>
            </div>
            <h1 class="blog-content-title">${blog.title}</h1>
            <div class="blog-content-meta">
                <span class="blog-author">By ${blog.author}</span>
                ${blog.url ? `<a href="${blog.url}" target="_blank" class="btn btn-outline">External Link</a>` : ''}
            </div>
            <p class="blog-content-description">${blog.description}</p>
        </div>
        <div class="blog-content-body">
            ${formatContent(blog.content)}
        </div>
    `;
    
    blogsSection.style.display = 'none';
    blogDetail.style.display = 'block';
    window.scrollTo(0, 0);
}

// Format blog content (simple markdown-like parsing)
function formatContent(content) {
    // Convert markdown headings
    content = content.replace(/^## (.*$)/gm, '<h2>$1</h2>');
    content = content.replace(/^### (.*$)/gm, '<h3>$1</h3>');
    
    // Convert code blocks
    content = content.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
    
    // Convert paragraphs (lines with content)
    content = content.replace(/^(?!<h|<pre|<ul|<ol|<li|<\/)(.*$)/gm, '<p>$1</p>');
    
    // Convert line breaks
    content = content.replace(/\n\n/g, '<br>');
    
    return content;
}

// Get filtered and sorted blogs
function getFilteredBlogs() {
    let filtered = [...blogs];
    
    // Apply search filter
    if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        filtered = filtered.filter(blog => 
            blog.title.toLowerCase().includes(searchTerm) || 
            blog.description.toLowerCase().includes(searchTerm)
        );
    }
    
    // Apply category filter
    if (filters.category !== 'all') {
        filtered = filtered.filter(blog => blog.category === filters.category);
    }
    
    // Apply sorting
    filtered.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return filters.sortBy === 'newest' ? dateB - dateA : dateA - dateB;
    });
    
    return filtered;
}

// Update blog count display
function updateBlogCount(count) {
    blogCount.textContent = `Showing ${count} of ${blogs.length} blogs`;
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

// Setup event listeners
function setupEventListeners() {
    // Blog card click
    blogGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('read-more')) {
            const id = e.target.dataset.id;
            showBlogDetail(id);
        }
    });
    
    // Back to blogs button
    backToBlogsBtn.addEventListener('click', () => {
        blogDetail.style.display = 'none';
        blogsSection.style.display = 'block';
    });
    
    // Search input
    searchInput.addEventListener('input', debounce((e) => {
        filters.search = e.target.value;
        renderBlogs();
    }, 300));
    
    // Category filter
    categoryFilter.addEventListener('change', (e) => {
        filters.category = e.target.value;
        renderBlogs();
    });
    
    // Sort filter
    sortFilter.addEventListener('change', (e) => {
        filters.sortBy = e.target.value;
        renderBlogs();
    });
    
    // Blog form submission
    blogForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newBlog = {
            id: Date.now().toString(),
            title: document.getElementById('title').value,
            description: document.getElementById('description').value,
            content: document.getElementById('content').value,
            url: document.getElementById('url').value,
            author: document.getElementById('author').value,
            category: document.getElementById('category').value,
            date: document.getElementById('date').value,
            createdAt: new Date()
        };
        
        blogs.unshift(newBlog);
        renderBlogs();
        blogForm.reset();
        
        // Show confirmation
        alert('Blog added successfully!');
    });
    
    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            const targetId = link.getAttribute('href');
            if (targetId === '#') {
                // Home
                blogDetail.style.display = 'none';
                blogsSection.style.display = 'block';
            }
        });
    });
}

// Debounce function for search input
function debounce(func, delay) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init); 