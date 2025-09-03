// Market Filter Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const filterBubbles = document.querySelectorAll('.filter-bubble');
    const marketCards = document.querySelectorAll('.market-card');
    
    // Initialize the dashboard
    initializeDashboard();
    
    function initializeDashboard() {
        // Add click event listeners to filter bubbles
        filterBubbles.forEach(bubble => {
            bubble.addEventListener('click', handleFilterClick);
            
            // Add keyboard support for accessibility
            bubble.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleFilterClick.call(this);
                }
            });
        });
        
        // Show all cards initially
        showAllCards();
    }
    
    function handleFilterClick() {
        const selectedFilter = this.getAttribute('data-filter');
        
        // Update active state
        updateActiveFilter(this);
        
        // Filter cards based on selection
        filterCards(selectedFilter);
        
        // Add smooth transition effect
        addTransitionEffect();
    }
    
    function updateActiveFilter(clickedBubble) {
        // Remove active class from all bubbles
        filterBubbles.forEach(bubble => {
            bubble.classList.remove('active');
        });
        
        // Add active class to clicked bubble
        clickedBubble.classList.add('active');
    }
    
    function filterCards(filter) {
        marketCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (filter === 'all' || cardCategory === filter) {
                card.classList.remove('hidden');
                card.style.display = 'block';
            } else {
                card.classList.add('hidden');
                card.style.display = 'none';
            }
        });
        
        // Update grid layout after filtering
        updateGridLayout();
    }
    
    function showAllCards() {
        marketCards.forEach(card => {
            card.classList.remove('hidden');
            card.style.display = 'block';
        });
    }
    
    function addTransitionEffect() {
        const grid = document.querySelector('.market-grid');
        grid.classList.add('loading');
        
        setTimeout(() => {
            grid.classList.remove('loading');
        }, 300);
    }
    
    function updateGridLayout() {
        // Force a reflow to ensure proper grid layout
        const grid = document.querySelector('.market-grid');
        grid.style.display = 'none';
        grid.offsetHeight; // Trigger reflow
        grid.style.display = 'grid';
    }
    
    // Add hover effects for better UX
    function addHoverEffects() {
        marketCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }
    
    // Initialize hover effects
    addHoverEffects();
    
    // Initialize charts
    initializeCharts();
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Reset to show all cards
            const allBubble = document.querySelector('[data-filter="all"]');
            if (allBubble) {
                updateActiveFilter(allBubble);
                filterCards('all');
            }
        }
    });
    
    // Add touch support for mobile devices
    if ('ontouchstart' in window) {
        filterBubbles.forEach(bubble => {
            bubble.addEventListener('touchstart', function(e) {
                e.preventDefault();
                this.style.transform = 'scale(0.95)';
            });
            
            bubble.addEventListener('touchend', function(e) {
                e.preventDefault();
                this.style.transform = 'scale(1)';
                handleFilterClick.call(this);
            });
        });
    }
    
    // Performance optimization: Debounce resize events
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            updateGridLayout();
        }, 250);
    });
    
    // Add analytics tracking (placeholder for future implementation)
    function trackFilterUsage(filter) {
        console.log(`Filter used: ${filter}`);
        // Here you would typically send data to your analytics service
    }
    
    // Enhanced filter click handler with analytics
    const originalHandleFilterClick = handleFilterClick;
    handleFilterClick = function() {
        const selectedFilter = this.getAttribute('data-filter');
        trackFilterUsage(selectedFilter);
        originalHandleFilterClick.call(this);
    };
});

// Utility functions for potential future enhancements
const MarketUtils = {
    // Format currency values
    formatCurrency: function(value) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(value);
    },
    
    // Format percentage values
    formatPercentage: function(value) {
        return `${value > 0 ? '+' : ''}${value.toFixed(2)}%`;
    },
    
    // Generate random price data (for demo purposes)
    generateRandomPrice: function(basePrice) {
        const change = (Math.random() - 0.5) * 0.1; // ±5% change
        return basePrice * (1 + change);
    }
};

// Chart generation functions
function initializeCharts() {
    const charts = document.querySelectorAll('.price-chart');
    
    charts.forEach(canvas => {
        const symbol = canvas.getAttribute('data-symbol');
        loadStaticData(canvas, symbol);
    });
}

function loadStaticData(canvas, symbol) {
    try {
        // Show loading state briefly
        showLoadingState(canvas);
        
        console.log(`Loading static data for ${symbol}...`);
        
        // Use static data from our data file
        if (STOCK_DATA_2025 && STOCK_DATA_2025[symbol]) {
            const stockData = STOCK_DATA_2025[symbol];
            console.log(`Using static data for ${symbol}:`, stockData.data.length, 'data points');
            generatePriceChart(canvas, symbol, stockData.data);
        } else {
            console.log(`No static data found for ${symbol}, using sample data`);
            generatePriceChart(canvas, symbol);
        }
    } catch (error) {
        console.log(`Failed to load static data for ${symbol}, using sample data:`, error);
        generatePriceChart(canvas, symbol);
    }
}

// Static data functions - no more API calls needed

function showLoadingState(canvas) {
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = canvas.offsetHeight;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw loading background
    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(0, 0, width, height);
    
    // Draw loading text
    ctx.fillStyle = '#666';
    ctx.font = '14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Loading...', width / 2, height / 2);
}

function generatePriceChart(canvas, symbol, realData = null) {
    const ctx = canvas.getContext('2d');
    const width = canvas.width = canvas.offsetWidth;
    const height = canvas.height = canvas.offsetHeight;
    
    // Chart styling
    const padding = 20;
    const chartWidth = width - (padding * 2);
    const chartHeight = height - (padding * 2);
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw background
    ctx.fillStyle = '#f8f9fa';
    ctx.fillRect(0, 0, width, height);
    
    // Generate full year data (Jan 1, 2025 to Dec 31, 2025)
    const yearData = generateYearData(symbol, realData);
    const today = new Date('2025-09-03');
    const todayIndex = getDayOfYear(today) - 1; // 0-based index
    
    // Calculate min/max for scaling (only from available data)
    const availableData = yearData.filter(d => d.price !== null);
    const minPrice = Math.min(...availableData.map(d => d.price));
    const maxPrice = Math.max(...availableData.map(d => d.price));
    const priceRange = maxPrice - minPrice;
    
    // Draw grid lines
    ctx.strokeStyle = '#e9ecef';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
        const y = padding + (chartWidth / 4) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
    }
    
    // Draw price line (green for available data, grey for future)
    const totalDays = 365;
    const dayWidth = chartWidth / (totalDays - 1);
    
    // Draw daily price bars (candlestick-style)
    yearData.forEach((dayData, index) => {
        if (dayData.price !== null && index > 0) {
            const currentPrice = dayData.price;
            const previousPrice = yearData[index - 1].price;
            
            if (previousPrice !== null) {
                const x = padding + dayWidth * index;
                const currentY = padding + chartHeight - ((currentPrice - minPrice) / priceRange) * chartHeight;
                const previousY = padding + chartHeight - ((previousPrice - minPrice) / priceRange) * chartHeight;
                
                // Determine if price went up or down
                const isUp = currentPrice >= previousPrice;
                const color = isUp ? '#28a745' : '#dc3545'; // Green for up, red for down
                
                // Draw the price change bar
                ctx.strokeStyle = color;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(x, previousY);
                ctx.lineTo(x, currentY);
                ctx.stroke();
                
                // Draw small horizontal lines at open/close
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(x - 2, previousY);
                ctx.lineTo(x + 2, previousY);
                ctx.moveTo(x - 2, currentY);
                ctx.lineTo(x + 2, currentY);
                ctx.stroke();
            }
        }
    });
    
    // Draw connecting line for overall trend
    ctx.strokeStyle = '#28a745';
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 2]); // Dashed line for trend
    ctx.beginPath();
    
    let lastValidPrice = null;
    let lastValidX = null;
    let lastValidY = null;
    
    yearData.forEach((dayData, index) => {
        const x = padding + dayWidth * index;
        
        if (dayData.price !== null) {
            const y = padding + chartHeight - ((dayData.price - minPrice) / priceRange) * chartHeight;
            
            if (lastValidPrice === null) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
            
            lastValidPrice = dayData.price;
            lastValidX = x;
            lastValidY = y;
        }
    });
    
    ctx.stroke();
    ctx.setLineDash([]); // Reset line dash
    
    // Draw future data extension (grey line)
    if (lastValidPrice !== null && todayIndex < totalDays - 1) {
        ctx.strokeStyle = '#999';
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]); // Dashed line for future
        ctx.beginPath();
        ctx.moveTo(lastValidX, lastValidY);
        ctx.lineTo(width - padding, lastValidY);
        ctx.stroke();
        ctx.setLineDash([]); // Reset line dash
    }
    
    // Draw data points (only for available data)
    ctx.fillStyle = '#28a745';
    yearData.forEach((dayData, index) => {
        if (dayData.price !== null) {
            const x = padding + dayWidth * index;
            const y = padding + chartHeight - ((dayData.price - minPrice) / priceRange) * chartHeight;
            
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, 2 * Math.PI);
            ctx.fill();
        }
    });
    
    // Add subtle gradient fill under the line (only for available data)
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = 'rgba(40, 167, 69, 0.1)';
    ctx.beginPath();
    ctx.moveTo(padding, padding + chartHeight);
    
    yearData.forEach((dayData, index) => {
        if (dayData.price !== null) {
            const x = padding + dayWidth * index;
            const y = padding + chartHeight - ((dayData.price - minPrice) / priceRange) * chartHeight;
            ctx.lineTo(x, y);
        }
    });
    
    ctx.lineTo(width - padding, padding + chartHeight);
    ctx.closePath();
    ctx.fill();
    
    ctx.globalCompositeOperation = 'source-over';
}

function generateYearData(symbol, realData = null) {
    const yearData = [];
    const startDate = new Date('2025-01-01');
    const today = new Date('2025-09-03');
    const todayIndex = getDayOfYear(today) - 1;
    
    // Generate data for each day of 2025
    for (let day = 0; day < 365; day++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + day);
        
        if (day <= todayIndex) {
            // Available data (before and including today)
            let price = null;
            
            if (realData && realData.length > 0) {
                // Use real data if available, distribute across available days
                const dataIndex = Math.floor((day / todayIndex) * (realData.length - 1));
                price = realData[dataIndex];
            } else {
                // Generate sample data
                const basePrice = getBasePrice(symbol);
                const variation = (Math.random() - 0.5) * 0.1; // ±5% variation
                price = basePrice * (1 + variation);
            }
            
            yearData.push({ date: currentDate, price: price });
        } else {
            // Future data (no price available)
            yearData.push({ date: currentDate, price: null });
        }
    }
    
    return yearData;
}

function getDayOfYear(date) {
    const start = new Date(date.getFullYear(), 0, 0);
    const diff = date - start;
    const oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}

function getBasePrice(symbol) {
    const prices = {
        'UHN': 162.78
    };
    return prices[symbol] || 100;
}

function generateSampleData(basePrice, points) {
    const data = [];
    let currentPrice = basePrice;
    
    for (let i = 0; i < points; i++) {
        // Add some realistic price movement
        const change = (Math.random() - 0.5) * 0.02; // ±1% change per point
        currentPrice *= (1 + change);
        data.push(currentPrice);
    }
    
    return data;
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MarketUtils };
}
