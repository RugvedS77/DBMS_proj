const Footer = () => {
    return (
        <footer class="font-sans">
        <div class="bg-slate-800">
            <div class="container px-6 py-8 mx-auto">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4  dark:bg-slate-800 py-8">
                    <div class="sm:col-span-2">
                        <h1 class="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">Subscribe to our newsletter to get an update.</h1>
                        <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                            <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />
                            <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">Subscribe</button>
                        </div>
                    </div>
                    <div>
                        <p class="font-bold text-white text-wrap">Quick Link</p>
                        <div class="flex flex-col items-start mt-5 space-y-2">
                            <p class="text-white transition-colors duration-300 dark:text-white dark:hover:text-white hover:underline hover:cursor-pointer hover:text-zinc-950">Home</p>
                            <p class="text-white transition-colors duration-300 dark:text-white dark:hover:text-white hover:underline hover:cursor-pointer hover:text-zinc-950">Who We Are</p>
                            <p class="text-white transition-colors duration-300 dark:text-white dark:hover:text-white hover:underline hover:cursor-pointer hover:text-zinc-950">Our Philosophy</p>
                        </div>
                    </div>
                    <div>
                        <p class="font-bold text-gray-800 dark:text-white text-wrap">About US</p>
                        <div class="flex flex-col items-start mt-5 space-y-2">
                            <p class="text-white transition-colors duration-300 dark:text-white dark:hover:text-white hover:underline hover:cursor-pointer hover:text-zinc-950">Our Team</p>
                            <p class="text-white transition-colors duration-300 dark:text-white dark:hover:text-white hover:underline hover:cursor-pointer hover:text-zinc-950">Blog</p>
                            {/* <p class="text-white transition-colors duration-300 dark:text-white dark:hover:text-white hover:underline hover:cursor-pointer text-zinc-950">Our Vision</p> */}
                        </div>
                    </div>
                    <div>
                        <p class="font-bold text-gray-800 dark:text-white text-wrap">Connect Us</p>
                        <div class="flex flex-col items-start mt-5 space-y-2">
                            <p class="text-white transition-colors duration-300 dark:text-white dark:hover:text-white hover:underline hover:cursor-pointer hover:text-blue-500">Contact: 9999999999</p>
                            <p class="text-white transition-colors duration-300 dark:text-white dark:hover:text-white hover:underline hover:cursor-pointer hover:text-blue-500">Email: MORS@gmail.com</p>
                            <p class="text-white transition-colors duration-300 dark:text-white dark:hover:text-white hover:underline hover:cursor-pointer hover:text-blue-500">Address: Kondwa Katraj</p>
                        </div>
                    </div>
                    <div>
                        <p class="font-bold text-gray-800 dark:text-white text-wrap">Industries</p>
                        <div class="flex flex-col items-start mt-5 space-y-2">
                            <p class="text-white transition-colors duration-300 dark:text-white dark:hover:text-white hover:underline hover:cursor-pointer hover:text-blue-500">Retail & E-Commerce</p>
                            <p class="text-white transition-colors duration-300 dark:text-white dark:hover:text-white hover:underline hover:cursor-pointer hover:text-blue-500">Information Technology</p>
                            <p class="text-white transition-colors duration-300 dark:text-white dark:hover:text-white hover:underline hover:cursor-pointer hover:text-blue-500">Finance & Insurance</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="bg-black">
            <div class="container px-6 py-8 mx-auto">
                <div class="sm:flex sm:items-center sm:justify-between py-4">
                    <div class="flex flex-1 gap-4 hover:cursor-pointer">
                        <img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" width="130" height="110" alt="" />
                        <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" width="130" height="110" alt="" />
                    </div>
                    <div class="flex gap-4 hover:cursor-pointer">
                        <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                        <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                        <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                        <img src="https://www.svgrepo.com/show/94698/github.svg" class="" width="30" height="30" alt="gt" />
                        <img src="https://www.svgrepo.com/show/22037/path.svg" width="30" height="30" alt="pn" />
                        <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
                        <img src="https://www.svgrepo.com/show/22048/dribbble.svg" class="" width="30" height="30" alt="db" />
                    </div>
                </div>
                <p class="font-sans text-center text-lg text-white">© 2023 Your Company Inc. All rights reserved.</p>
            </div>
        </div>
    </footer>    
    )
}

export default Footer;