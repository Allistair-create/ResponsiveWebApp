// Service/Product Flipcards Data
const servicesData = [
    {
        title: 'Web Development',
        icon: 'fa-code',
        description: 'Custom web solutions for your business',
        link: '#'
    },
    {
        title: 'Mobile Apps',
        icon: 'fa-mobile-alt',
        description: 'Native and cross-platform mobile applications',
        link: '#'
    },
    {
        title: 'UI/UX Design',
        icon: 'fa-paint-brush',
        description: 'User-centered design solutions',
        link: '#'
    },
    {
        title: 'Cloud Services',
        icon: 'fa-cloud',
        description: 'Scalable cloud infrastructure',
        link: '#'
    },
    {
        title: 'SEO Optimization',
        icon: 'fa-search',
        description: 'Improve your online visibility',
        link: '#'
    },
    {
        title: 'Content Marketing',
        icon: 'fa-pen',
        description: 'Engaging content strategy',
        link: '#'
    },
    {
        title: 'Data Analytics',
        icon: 'fa-chart-bar',
        description: 'Data-driven insights',
        link: '#'
    },
    {
        title: 'Cybersecurity',
        icon: 'fa-shield-alt',
        description: 'Protect your digital assets',
        link: '#'
    },
    {
        title: 'AI Solutions',
        icon: 'fa-brain',
        description: 'Artificial Intelligence integration',
        link: '#'
    },
    {
        title: 'Consulting',
        icon: 'fa-comments',
        description: 'Expert technical consulting',
        link: '#'
    }
];

// Create Flipcards
function createFlipcards() {
    const servicesGrid = document.querySelector('.services-grid');
    servicesGrid.innerHTML = '';

    servicesData.forEach(service => {
        const flipcard = `
            <div class="flipcard">
                <div class="flipcard-inner">
                    <div class="flipcard-front">
                        <h3>${service.title}</h3>
                        <i class="fas ${service.icon} fa-3x"></i>
                    </div>
                    <div class="flipcard-back">
                        <h3>${service.title}</h3>
                        <p>${service.description}</p>
                        <a href="${service.link}" class="cta-button">Learn More</a>
                    </div>
                </div>
            </div>
        `;
        servicesGrid.innerHTML += flipcard;
    });
}

// Initialize tooltips
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[title]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
}

// Show tooltip
function showTooltip(event) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = event.target.getAttribute('title');
    document.body.appendChild(tooltip);

    const rect = event.target.getBoundingClientRect();
    tooltip.style.top = rect.bottom + 5 + 'px';
    tooltip.style.left = rect.left + (rect.width - tooltip.offsetWidth) / 2 + 'px';
}

// Hide tooltip
function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.remove();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createFlipcards();
    initTooltips();
});
