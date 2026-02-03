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

function initGallery(filter = 'all') {
    const container = document.getElementById('car-container');
    container.innerHTML = '';
    
    const displayList = filter === 'all' ? carData : carData.filter(car => car.cat === filter);

    displayList.forEach(car => {
        const card = `
            <div class="car-card">
                <div class="car-img" style="background-image: url('${car.img}')"></div>
                <div class="car-info">
                    <h3>${car.name}</h3>
                    <p class="car-price">${car.price}</p>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        e.target.classList.add('active');
        initGallery(e.target.dataset.filter);
    });
});

document.addEventListener('DOMContentLoaded', () => initGallery());
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
    });
});
