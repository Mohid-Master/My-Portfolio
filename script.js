document.getElementById('menu-icon').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
});

// document.querySelectorAll('.sidebar a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const targetId = this.getAttribute('href');
//         document.querySelector(targetId).scrollIntoView({
//             behavior: 'smooth'
//         });
//         document.getElementById('sidebar').style.display = 'none'; // Close sidebar after selection
//     });
// });