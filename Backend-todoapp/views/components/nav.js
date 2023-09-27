const navbar = document.querySelector('#navbar');
console.log(navbar);

const createHomeNav = () => {
    navbar.innerHTML = `
    <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
    <p class="font-bold text-xl text-white">TodoApp</p>


    <!-- Version movil -->
    <svg 
    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
    stroke-width="1.5" 
    stroke="currentColor" 
    class="w-10 h-10 md:hidden text-white cursor-pointer py-2 hover: bg-indigo-800 
    rounded-lg"
    >
        <path 
           stroke-linecap="round" 
           stroke-linejoin="round" 
           d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
           />
      </svg>
      

    <!-- Version Escritorio -->
    <div class="hidden md:flex flex-row gap-4">
        <a href="/login/" class="transition ease-in-out text-white font-bold hover:bg-indigo-800 py-2 px-4 rounded-lg">Login</a>
        <a href="/signup/" class="transition ease-in-out text-black font-bold bg-slate-200 hover:bg-slate-300 py-2 px-4 rounded-lg"">Registro</a>
    </div>
    <!-- menu movil -->
    <div class="bg-slate-900/60 fixed top-16 right-0 left-0 bottom-0 flex justify-center items-center flex-col gap-4 hidden">
      <a href="/login/" class="transition ease-in-out text-white font-bold hover:bg-indigo-800 py-2 px-4 rounded-lg">Login</a>
      <a href="/signup/" class="transition ease-in-out text-black font-bold bg-slate-200 hover:bg-slate-300 py-2 px-4 rounded-lg"">Registro</a>
    </div>
</div>
  `;
};

const createNavSignup = () => {
    navbar.innerHTML = `
    <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
    <p class="font-bold text-xl text-white">TodoApp</p>


    <!-- Version movil -->
    <svg 
    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
    stroke-width="1.5" 
    stroke="currentColor" 
    class="w-10 h-10 md:hidden text-white cursor-pointer py-2 hover: bg-indigo-800 
    rounded-lg"
    >
        <path 
           stroke-linecap="round" 
           stroke-linejoin="round" 
           d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
           />
      </svg>
      

    <!-- Version Escritorio -->
    <div class="hidden md:flex flex-row gap-4">
        <a href="/login/" class="transition ease-in-out text-white font-bold hover:bg-indigo-800 py-2 px-4 rounded-lg">Login</a>
    </div>
    <!-- menu movil -->
    <div class="bg-slate-900/60 fixed top-16 right-0 left-0 bottom-0 flex justify-center items-center flex-col gap-4 hidden">
      <a href="/login/" class="transition ease-in-out text-white font-bold hover:bg-indigo-800 py-2 px-4 rounded-lg">Login</a>
    </div>
</div>
  `;
};

const createNavLogin = () => {
  navbar.innerHTML = `
  <div class="max-w-7xl h-16 mx-auto flex items-center px-4 justify-between">
  <p class="font-bold text-xl text-white">TodoApp</p>


  <!-- Version movil -->
  <svg 
  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
  stroke-width="1.5" 
  stroke="currentColor" 
  class="w-10 h-10 md:hidden text-white cursor-pointer py-2 hover: bg-indigo-800 
  rounded-lg"
  >
      <path 
         stroke-linecap="round" 
         stroke-linejoin="round" 
         d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
         />
    </svg>
    

  <!-- Version Escritorio -->
  <div class="hidden md:flex flex-row gap-4">
      <a href="/signup/" class="transition ease-in-out text-white font-bold hover:bg-indigo-800 py-2 px-4 rounded-lg">Registro</a>
  </div>
  <!-- menu movil -->
  <div class="bg-slate-900/60 fixed top-16 right-0 left-0 bottom-0 flex justify-center items-center flex-col gap-4 hidden">
    <a href="/signup/" class="transition ease-in-out text-white font-bold hover:bg-indigo-800 py-2 px-4 rounded-lg">Registro</a>
  </div>
</div>
`;
};

if (window.location.pathname === '/') {
    createHomeNav();
} else if (window.location.pathname === '/signup/') {
    createNavSignup();
} else if (window.location.pathname === '/login/') {
  createNavLogin();


const navBtn = navbar.children[0].children[1];


navBtn.addEventListener('click', e => {
    const menuMobile = navbar.children[0].children[3];
    if (!navBtn.classList.contains('active')) {
        navBtn.classList.add('active');
        navBtn.innerHTML = ' <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />';
        menuMobile.classList.remove('hidden');
        menuMobile.classList.add('flex');
    } else {
        navBtn.classList.remove('active');
        navBtn.innerHTML = ' <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />'
        menuMobile.classList.add('hidden');
        menuMobile.classList.remove('flex');
    }
    
});

};
