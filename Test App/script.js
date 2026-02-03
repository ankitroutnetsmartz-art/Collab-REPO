// const carData = [
//     { id: 1, name: "Tourbillon Legacy", cat: "motorsport", price: "$4.6M", img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800" },
//     { id: 2, name: "Nebula E-GTR", cat: "electric", price: "$2.1M", img: "https://images.unsplash.com/photo-1554744512-d6c603f27c54?auto=format&fit=crop&w=800" },
//     { id: 3, name: "Phantom V16", cat: "sport", price: "$1.8M", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800" },
//     { id: 4, name: "Zenith RS", cat: "motorsport", price: "$3.4M", img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800" },
//     { id: 5, name: "Monolith GT", cat: "sport", price: "$980K", img: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800" },
//     { id: 6, name: "Volt Apex S", cat: "electric", price: "$1.2M", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800" },
//     { id: 7, name: "Black Label GTR", cat: "motorsport", price: "$5.8M", img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800" },
//     { id: 8, name: "Legacy V12", cat: "sport", price: "$2.9M", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800" },
//     { id: 9, name: "Apex Roadster", fuel: "gas", price: "$1.5M", hp: 720, img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800" },
//     { id: 10, name: "Zenith Coupe", fuel: "electric", price: "$890K", hp: 580, img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800" },
//     { id: 11, name: "Horizon 4x4", fuel: "gas", price: "$680K", hp: 400, img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800" },
//     { id: 12, name: "Aether Hyper-E", cat: "electric", price: "$3.2M", hp: 1400, img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800" },
//     { id: 13, name: "Stratus Track-Day", cat: "motorsport", price: "$2.7M", hp: 850, img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800" },
//     { id: 14, name: "Vanguard GT", cat: "sport", price: "$1.4M", hp: 780, img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=800" },
//     { id: 15, name: "Titan V16 Prototype", cat: "motorsport", price: "$7.2M", hp: 1800, img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=800" }
// ];

// function initGallery(filter = 'all') {
//     const container = document.getElementById('car-container');
//     container.innerHTML = '';
    
//     const displayList = filter === 'all' ? carData : carData.filter(car => car.cat === filter);

//     displayList.forEach(car => {
//         const card = `
//             <div class="car-card">
//                 <div class="car-img" style="background-image: url('${car.img}')"></div>
//                 <div class="car-info">
//                     <h3>${car.name}</h3>
//                     <p class="car-price">${car.price}</p>
//                 </div>
//             </div>
//         `;
//         container.innerHTML += card;
//     });


// }

// document.querySelectorAll('.filter-btn').forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         document.querySelector('.filter-btn.active').classList.remove('active');
//         e.target.classList.add('active');
//         initGallery(e.target.dataset.filter);
//     });
// });

// document.addEventListener('DOMContentLoaded', () => initGallery());
// const filterButtons = document.querySelectorAll('.filter-btn');

// filterButtons.forEach(btn => {
//     btn.addEventListener('click', () => {
//         filterButtons.forEach(b => b.classList.remove('active'));
        
//         btn.classList.add('active');
        
//         const filterValue = btn.getAttribute('data-filter');
//     });
// });

// // Function to render the car grid
// function renderCars(data) {
//     const grid = document.getElementById('car-container');
//     grid.innerHTML = data.map(car => `
//         <div class="car-card" onclick="showSpecs(${car.id})">
//             <div class="car-img" style="background-image: url('${car.img}')"></div>
//             <div class="car-info">
//                 <span class="badge">${(car.cat || car.fuel || 'Hypercar').toUpperCase()}</span>
//                 <h3>${car.name}</h3>
//                 <div class="price-tag">${car.price}</div>
//                 <button class="btn-cta">VIEW SPECS</button>
//             </div>
//         </div>
//     `).join('');
// }

// // Function to show the Specs Overlay
// function showSpecs(carId) {
//     const car = carData.find(c => c.id === carId);
//     const overlay = document.getElementById('specs-overlay');
//     const content = document.getElementById('specs-content');

//     content.innerHTML = `
//         <div class="specs-grid-layout">
//             <div class="specs-visual">
//                 <img src="${car.img}" alt="${car.name}">
//             </div>
//             <div class="specs-details">
//                 <span class="gold-badge">Technical Sheet</span>
//                 <h2>${car.name}</h2>
//                 <div class="specs-stats">
//                     <div class="stat-box"><span>Power</span><strong>${car.hp || '1000+'} HP</strong></div>
//                     <div class="stat-box"><span>Price</span><strong>${car.price}</strong></div>
//                     <div class="stat-box"><span>Category</span><strong>${(car.cat || car.fuel).toUpperCase()}</strong></div>
//                     <div class="stat-box"><span>Chassis</span><strong>Carbon Fiber</strong></div>
//                 </div>
//                 <p class="specs-desc">The ${car.name} represents the pinnacle of Apex engineering, featuring a bespoke aerodynamics package and an intelligent drivetrain tuned for extreme performance.</p>
//                 <button class="btn-gold-fill" onclick="event.stopPropagation(); window.location.href='#luxury'">INQUIRE FOR COMMISSION</button>
//             </div>
//         </div>
//     `;

//     overlay.classList.add('active');
//     document.body.style.overflow = 'hidden'; // Stop scrolling behind modal
// }

// function closeSpecs() {
//     document.getElementById('specs-overlay').classList.remove('active');
//     document.body.style.overflow = 'auto';
// }

// document.getElementById('luxury-form').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const btn = e.target.querySelector('.btn-gold-fill');
//     const originalText = btn.innerText;
    
//     btn.innerText = "AUTHENTICATING...";
//     btn.style.opacity = "0.7";
//     btn.style.pointerEvents = "none";

//     const formData = {
//         name: e.target.querySelector('input[type="text"]').value,
//         email: e.target.querySelector('input[type="email"]').value,
//         interest: document.getElementById('interest').value,
//         message: e.target.querySelector('textarea').value,
//         timestamp: new Date().toLocaleString()
//     };

//     setTimeout(() => {
//         console.log("--- NEW LEAD CAPTURED ---");
//         console.table(formData);

//         btn.innerText = "APPLICATION RECEIVED";
//         btn.style.background = "#fff";
//         btn.style.color = "#000";

//         setTimeout(() => {
//             e.target.reset();
//             btn.innerText = originalText;
//             btn.style.background = "var(--gold)";
//             btn.style.color = "#000";
//             btn.style.opacity = "1";
//             btn.style.pointerEvents = "all";
//             alert(`Thank you, ${formData.name}. Our Black Label concierge will reach out to ${formData.email} shortly.`);
//         }, 3000);

//     }, 2000);
// });

const carData = [
    { id: 1, name: "Tourbillon Legacy", cat: "motorsport", price: "$4.6M", img: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800" },
    { id: 2, name: "Nebula E-GTR", cat: "electric", price: "$2.1M", img: "https://images.unsplash.com/photo-1554744512-d6c603f27c54?auto=format&fit=crop&w=800" },
    { id: 3, name: "Phantom V16", cat: "sport", price: "$1.8M", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800" },
    { id: 4, name: "Zenith RS", cat: "motorsport", price: "$3.4M", img: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800" },
    { id: 5, name: "Monolith GT", cat: "sport", price: "$980K", img: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=800" },
    { id: 6, name: "Volt Apex S", cat: "electric", price: "$1.2M", img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800" },
    { id: 7, name: "Black Label GTR", cat: "motorsport", price: "$5.8M", img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800" },
    { id: 8, name: "Legacy V12", cat: "sport", price: "$2.9M", img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800" },
    { id: 9, name: "Apex Roadster", fuel: "gas", price: "$1.5M", hp: 720, img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800" },
    { id: 10, name: "Zenith Coupe", fuel: "electric", price: "$890K", hp: 580, img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800" },
    { id: 11, name: "Horizon 4x4", fuel: "gas", price: "$680K", hp: 400, img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800" },
    { id: 12, name: "Aether Hyper-E", cat: "electric", price: "$3.2M", hp: 1400, img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800" },
    { id: 13, name: "Stratus Track-Day", cat: "motorsport", price: "$2.7M", hp: 850, img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800" },
    { id: 14, name: "Vanguard GT", cat: "sport", price: "$1.4M", hp: 780, img: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=800" },
    { id: 15, name: "Titan V16 Prototype", cat: "motorsport", price: "$7.2M", hp: 1800, img: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=800" }
];

// --- 1. Gallery Logic ---
// Replace your existing search and filter logic with this:

const searchInput = document.getElementById('car-search');
let currentFilter = 'all';

function renderCars() {
    const grid = document.getElementById('car-container');
    const searchTerm = searchInput.value.toLowerCase();
    grid.innerHTML = '';
    
    // Combine Filter and Search Logic
    const displayList = carData.filter(car => {
        const matchesFilter = currentFilter === 'all' || car.cat === currentFilter || car.fuel === currentFilter;
        const matchesSearch = car.name.toLowerCase().includes(searchTerm);
        return matchesFilter && matchesSearch;
    });

    if (displayList.length === 0) {
        grid.innerHTML = `<div class="no-results">NO VEHICLES FOUND MATCHING YOUR CRITERIA.</div>`;
        return;
    }

    grid.innerHTML = displayList.map(car => `
        <div class="car-card" onclick="showSpecs(${car.id})">
            <div class="car-img" style="background-image: url('${car.img}')"></div>
            <div class="car-info">
                <span class="badge">${(car.cat || car.fuel || 'Hypercar').toUpperCase()}</span>
                <h3>${car.name}</h3>
                <div class="price-tag">${car.price}</div>
                <button class="btn-cta">VIEW SPECS</button>
            </div>
        </div>
    `).join('');
}

// Event Listener for Search
searchInput.addEventListener('input', renderCars);

// Updated Filter Listener
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        e.target.classList.add('active');
        
        currentFilter = e.target.dataset.filter;
        renderCars(); // Now renderCars uses the global currentFilter and searchInput value
    });
});

// function renderCars(filter = 'all') {
//     const grid = document.getElementById('car-container');
//     grid.innerHTML = '';
    
//     // Filter data based on category
//     const displayList = filter === 'all' 
//         ? carData 
//         : carData.filter(car => car.cat === filter || car.fuel === filter);

//     grid.innerHTML = displayList.map(car => `
//         <div class="car-card" onclick="showSpecs(${car.id})">
//             <div class="car-img" style="background-image: url('${car.img}')"></div>
//             <div class="car-info">
//                 <span class="badge">${(car.cat || car.fuel || 'Hypercar').toUpperCase()}</span>
//                 <h3>${car.name}</h3>
//                 <div class="price-tag">${car.price}</div>
//                 <button class="btn-cta">VIEW SPECS</button>
//             </div>
//         </div>
//     `).join('');
// }

// Handle Filter Button Clicks
// document.querySelectorAll('.filter-btn').forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         // UI: Toggle Active Class
//         document.querySelector('.filter-btn.active').classList.remove('active');
//         e.target.classList.add('active');
        
//         // Logic: Re-render with filter
//         renderCars(e.target.dataset.filter);
//     });
// });

// --- 2. Specs Modal Logic ---

function showSpecs(carId) {
    const car = carData.find(c => c.id === carId);
    const overlay = document.getElementById('specs-overlay');
    const content = document.getElementById('specs-content');

    // Populate modal with specific car data
    content.innerHTML = `
        <div class="specs-grid-layout">
            <div class="specs-visual">
                <img src="${car.img}" alt="${car.name}">
            </div>
            <div class="specs-details">
                <span class="gold-badge">Technical Sheet</span>
                <h2>${car.name}</h2>
                <div class="specs-stats">
                    <div class="stat-box"><span>Power</span><strong>${car.hp || '1000+'} HP</strong></div>
                    <div class="stat-box"><span>Price</span><strong>${car.price}</strong></div>
                    <div class="stat-box"><span>Category</span><strong>${(car.cat || car.fuel || 'Bespoke').toUpperCase()}</strong></div>
                    <div class="stat-box"><span>Chassis</span><strong>Carbon Fiber</strong></div>
                </div>
                <p class="specs-desc">The ${car.name} represents the pinnacle of Apex engineering, featuring a bespoke aerodynamics package and an intelligent drivetrain tuned for extreme performance.</p>
                <button class="btn-gold-fill" onclick="event.stopPropagation(); closeSpecs(); window.location.href='#luxury'">INQUIRE FOR COMMISSION</button>
            </div>
        </div>
    `;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; 
}

function closeSpecs() {
    document.getElementById('specs-overlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal if user clicks outside the content box
window.addEventListener('click', (e) => {
    const overlay = document.getElementById('specs-overlay');
    if (e.target === overlay) closeSpecs();
});

// --- 3. Form Submission Logic ---

document.getElementById('luxury-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const btn = e.target.querySelector('.btn-gold-fill');
    const originalText = btn.innerText;
    
    btn.innerText = "AUTHENTICATING...";
    btn.style.opacity = "0.7";
    btn.style.pointerEvents = "none";

    const formData = {
        name: e.target.querySelector('input[type="text"]').value,
        email: e.target.querySelector('input[type="email"]').value,
        interest: document.getElementById('interest').value,
        message: e.target.querySelector('textarea').value,
        timestamp: new Date().toLocaleString()
    };

    setTimeout(() => {
        console.log("--- NEW LEAD CAPTURED ---");
        console.table(formData);

        btn.innerText = "APPLICATION RECEIVED";
        btn.style.background = "#fff";
        btn.style.color = "#000";

        setTimeout(() => {
            e.target.reset();
            btn.innerText = originalText;
            btn.style.background = "var(--gold)";
            btn.style.color = "#000";
            btn.style.opacity = "1";
            btn.style.pointerEvents = "all";
            alert(`Thank you, ${formData.name}. Our Black Label concierge will reach out shortly.`);
        }, 3000);
    }, 2000);
});

// Initial Render
document.addEventListener('DOMContentLoaded', () => renderCars());