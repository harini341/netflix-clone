// backend/data/movies.js
const moviesData = {
  trending: [
    { id: 1, title: "Stranger Things", poster: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg", year: "2022", rating: "TV-14" },
    { id: 2, title: "The Crown", poster: "https://resizing.flixster.com/aX9Yz5sNV2WpBA5CoENzIl9RbTM=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjI2NTU1OS53ZWJw", year: "2023", rating: "TV-MA" },
    { id: 3, title: "Wednesday", poster: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg", year: "2022", rating: "TV-14" },
    { id: 4, title: "The Witcher", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrpQa4kPsu6vyXAGfOOHSuscIGwdQuxyOs0Lp-EndlqkhFdcxNPg0kt-lws9e49GAqx2wxRg&s=10", year: "2023", rating: "TV-MA" },
    { id: 5, title: "Money Heist", poster: "https://resizing.flixster.com/ITt1FPrFePNR6FSqZrZK7BocG2U=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjEwMTMyOTMud2VicA==", year: "2021", rating: "TV-MA" },
    { id: 6, title: "Squid Game", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZOfVDdXGrKzyVeIN3C3BgeyVj_rH37Uvo3w&s", year: "2021", rating: "TV-MA" }
  ]
};

module.exports = { moviesData };