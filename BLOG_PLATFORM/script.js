let blogs = [
    {
        id: '1',
        title: 'Getting Started with React',
        description: 'A comprehensive guide to starting your React journey with hooks, components, and modern best practices.',
        content: `React has revolutionized the way we build user interfaces...`, // truncated for brevity
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
        content: `TypeScript has become the go-to choice...`, // truncated
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
        content: `Modern web development has evolved significantly...`, // truncated
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
        content: `CSS Grid and Flexbox are two powerful layout systems...`, // truncated
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
        content: `JavaScript continues to evolve with new features...`, // truncated
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        author: 'Alex Chen',
        category: 'JavaScript',
        date: '2024-02-05',
        createdAt: new Date('2024-02-05')
    }
];

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

const filters = {
    search: '',
    category: 'all',
    sortBy: 'newest'
};

function init() {
    renderBlogs();
    setupEventListeners();
}

function renderBlogs() {
    const filteredBlogs = getFilteredBlogs();
    blogGrid.innerHTML = '';
    filteredBlogs.forEach(blog => {
        const blogCard = createBlogCard(blog);
        blogGrid.appendChild(blogCard);
    });
    updateBlogCount(filteredBlogs.length);
}

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

function formatContent(content) {
    content = content.replace(/^## (.*$)/gm, '<h2>$1</h2>');
    content = content.replace(/^### (.*$)/gm, '<h3>$1</h3>');
    content = content.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
    content = content.replace(/^(?!<h|<pre|<ul|<ol|<li|<\/)(.*$)/gm, '<p>$1</p>');
    content = content.replace(/\n\n/g, '<br>');
    return content;
}

function getFilteredBlogs() {
    let filtered = [...blogs];
    if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        filtered = filtered.filter(blog => 
            blog.title.toLowerCase().includes(searchTerm) || 
            blog.description.toLowerCase().includes(searchTerm)
        );
    }
    if (filters.category !== 'all') {
        filtered = filtered.filter(blog => blog.category === filters.category);
    }
    filtered.sort((a, b) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return filters.sortBy === 'newest' ? dateB - dateA : dateA - dateB;
    });
    return filtered;
}

function updateBlogCount(count) {
    blogCount.textContent = `Showing ${count} of ${blogs.length} blogs`;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function setupEventListeners() {
    blogGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('read-more')) {
            const id = e.target.dataset.id;
            showBlogDetail(id);
        }
    });

    backToBlogsBtn.addEventListener('click', () => {
        blogDetail.style.display = 'none';
        blogsSection.style.display = 'block';
    });

    searchInput.addEventListener('input', debounce((e) => {
        filters.search = e.target.value;
        renderBlogs();
    }, 300));

    categoryFilter.addEventListener('change', (e) => {
        filters.category = e.target.value;
        renderBlogs();
    });

    sortFilter.addEventListener('change', (e) => {
        filters.sortBy = e.target.value;
        renderBlogs();
    });

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
        alert('Blog added successfully!');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const targetId = link.getAttribute('href');
            if (targetId === '#') {
                blogDetail.style.display = 'none';
                blogsSection.style.display = 'block';
            }
        });
    });
}

function debounce(func, delay) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}

document.addEventListener('DOMContentLoaded', init);
