import React from 'react'

function Footer() {
    return (
        <footer className='footer-background'>
            <div className="container mx-auto w-full sm:px-16 px-8  sm:pt-10 pt-5 space-y-4 sm:block flex flex-col justify-center items-center ">
                <div className="sm:w-fit w-[90px] ClashDisplay-Bold sm:text-3xl relative tracking-widest">
                    <h1>SwiftMail</h1>
                    <img src="/gradient.png" alt="gradient" className=' w-full absolute  top-3 -z-20' />
                </div>
                {/* <div className='grid sm:grid-cols-12  grid-cols-3 sm:space-y-0 space-y-8 sm:text-start text-center '>
                    <ul className='list-none space-y-4 col-span-3'>
                        <li className='ClashDisplay-Medium'>Product</li>
                        <div className='ClashDisplay-Light space-y-3'>
                            <li  className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'>Price</li>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'>Reviews</li>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'>25+ Language supported</li>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'>Easy Doc</li>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'>Templates</li>
                        </div>
                    </ul>
                    <ul className='list-none space-y-4 col-span-3'>
                        <li className='ClashDisplay-Medium'>Company</li>
                        <div className='ClashDisplay-Light space-y-2'>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer' >Blog</li>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer' >Contact Us</li>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer' >Twitter</li>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer' >Linkedin</li>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer' >Discord</li>
                        </div>
                    </ul>
                    <ul className='list-none space-y-4 col-span-3'>
                        <li className='ClashDisplay-Medium'>Support</li>
                        <div className='ClashDisplay-Light space-y-2'>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer' >Weekly Demo</li>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer' >Report a bug</li>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer' >Report on Outage</li>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'>Request a New Feature</li>
                        </div>
                    </ul>
                    <ul className='list-none space-y-4 col-span-3'>
                        <li className='ClashDisplay-Medium'>Use Cases</li>
                        <div className='ClashDisplay-Light'>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'>For Students</li>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'>For Recruiters</li>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'>For Email Marketers</li>
                            <li className='hover:text-blue-500 transition-colors duration-300 cursor-pointer'>For Freelancers</li>
                        </div>
                    </ul>
                </div> */}
                <div className=" w-full border-t h-full py-5 container mx-auto  sm:gap-12 gap-8  sm:justify-between  justify-center  items-center flex sm:flex-row flex-col">
                    <div className="  ClashDisplay-Medium tracking-widest w-full sm:text-start  text-center text-white text-base font-normal leading-snug">@ 2024 Swift Mail. All rights reserved.</div>
                    <div className="gap-4  flex w-full sm:justify-end justify-center items-center">
                        {/* <a href="https://www.facebook.com" target="_blank" className=" w-6 h-6 relative">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M9.04525 5.865V8.613H7.03125V11.973H9.04525V21.959H13.1792V11.974H15.9543C15.9543 11.974 16.2142 10.363 16.3403 8.601H13.1962V6.303C13.1962 5.96 13.6462 5.498 14.0922 5.498H16.3463V2H13.2822C8.94225 2 9.04525 5.363 9.04525 5.865Z" fill="#ffffff"></path>
							</svg>
					</a>
					<a href="https://x.com/EmailGenie" target="_blank" className=" w-6 h-6 relative">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M22 5.90765C21.2504 6.23503 20.4565 6.44969 19.644 6.54465C20.4968 6.04388 21.138 5.24976 21.448 4.31065C20.64 4.78098 19.7587 5.11226 18.841 5.29065C18.4545 4.88586 17.9897 4.56404 17.4748 4.34483C16.9598 4.12562 16.4056 4.01362 15.846 4.01565C13.58 4.01565 11.743 5.82565 11.743 8.05565C11.743 8.37165 11.779 8.68065 11.849 8.97565C10.2236 8.89835 8.63212 8.48306 7.17617 7.75629C5.72022 7.02952 4.43176 6.00723 3.393 4.75465C3.02883 5.36905 2.83742 6.07043 2.839 6.78465C2.8397 7.45262 3.00683 8.10988 3.32529 8.69705C3.64375 9.28421 4.1035 9.78276 4.663 10.1477C4.01248 10.1267 3.37602 9.95298 2.805 9.64065V9.69065C2.805 11.6487 4.22 13.2817 6.095 13.6537C5.74261 13.7472 5.37958 13.7945 5.015 13.7947C4.75 13.7947 4.493 13.7697 4.242 13.7197C4.51008 14.5276 5.02311 15.232 5.70982 15.735C6.39653 16.238 7.22284 16.5147 8.074 16.5267C6.61407 17.6512 4.82182 18.2587 2.979 18.2537C2.647 18.2537 2.321 18.2337 2 18.1977C3.88125 19.3884 6.06259 20.0189 8.289 20.0157C15.836 20.0157 19.962 13.8587 19.962 8.51965L19.948 7.99665C20.7529 7.43032 21.4481 6.7225 22 5.90765Z" fill="#ffffff"></path>
							</svg>
					</a>
					<a href="https://www.instagram.com/EmailGenie/" target="_blank" className=" w-6 h-6 relative">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M16.017 2H7.947C6.37015 2.00185 4.85844 2.62914 3.74353 3.74424C2.62862 4.85933 2.00159 6.37115 2 7.948L2 16.018C2.00185 17.5948 2.62914 19.1066 3.74424 20.2215C4.85933 21.3364 6.37115 21.9634 7.948 21.965H16.018C17.5948 21.9631 19.1066 21.3359 20.2215 20.2208C21.3364 19.1057 21.9634 17.5938 21.965 16.017V7.947C21.9631 6.37015 21.3359 4.85844 20.2208 3.74353C19.1057 2.62862 17.5938 2.00159 16.017 2V2ZM19.957 16.017C19.957 16.5344 19.8551 17.0468 19.6571 17.5248C19.4591 18.0028 19.1689 18.4371 18.803 18.803C18.4371 19.1689 18.0028 19.4591 17.5248 19.6571C17.0468 19.8551 16.5344 19.957 16.017 19.957H7.947C6.90222 19.9567 5.90032 19.5415 5.16165 18.8026C4.42297 18.0638 4.008 17.0618 4.008 16.017V7.947C4.00827 6.90222 4.42349 5.90032 5.16235 5.16165C5.90122 4.42297 6.90322 4.008 7.948 4.008H16.018C17.0628 4.00827 18.0647 4.42349 18.8034 5.16235C19.542 5.90122 19.957 6.90322 19.957 7.948V16.018V16.017Z" fill="#ffffff"></path>
									<path d="M11.9823 6.82031C10.6137 6.82243 9.30184 7.3671 8.33421 8.33492C7.36658 9.30274 6.82216 10.6147 6.82031 11.9833C6.8219 13.3522 7.36634 14.6646 8.33421 15.6327C9.30209 16.6008 10.6144 17.1455 11.9833 17.1473C13.3524 17.1457 14.665 16.6012 15.6331 15.6331C16.6012 14.665 17.1457 13.3524 17.1473 11.9833C17.1452 10.6144 16.6003 9.3022 15.632 8.33451C14.6637 7.36682 13.3512 6.82264 11.9823 6.82131V6.82031ZM11.9823 15.1393C11.1456 15.1393 10.3431 14.8069 9.75139 14.2152C9.15971 13.6236 8.82731 12.8211 8.82731 11.9843C8.82731 11.1476 9.15971 10.3451 9.75139 9.75339C10.3431 9.16171 11.1456 8.82931 11.9823 8.82931C12.8191 8.82931 13.6216 9.16171 14.2132 9.75339C14.8049 10.3451 15.1373 11.1476 15.1373 11.9843C15.1373 12.8211 14.8049 13.6236 14.2132 14.2152C13.6216 14.8069 12.8191 15.1393 11.9823 15.1393Z" fill="#ffffff"></path>
									<path d="M17.1569 8.09509C17.8401 8.09509 18.3939 7.54127 18.3939 6.85809C18.3939 6.17492 17.8401 5.62109 17.1569 5.62109C16.4737 5.62109 15.9199 6.17492 15.9199 6.85809C15.9199 7.54127 16.4737 8.09509 17.1569 8.09509Z" fill="#ffffff"></path>
							</svg>
					</a>
					
					<a href="https://linkedin.com/company/EmailGenie" target="_blank" className=" w-6 h-6 relative">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M21.959 13.7203V21.0993H17.681V14.2143C17.681 12.4843 17.062 11.3043 15.514 11.3043C14.332 11.3043 13.628 12.1003 13.319 12.8693C13.206 13.1443 13.177 13.5273 13.177 13.9123V21.0993H8.897C8.897 21.0993 8.955 9.43934 8.897 8.23034H13.177V10.0543L13.149 10.0963H13.177V10.0543C13.745 9.17934 14.76 7.92834 17.033 7.92834C19.848 7.92834 21.959 9.76834 21.959 13.7203ZM4.421 2.02734C2.958 2.02734 2 2.98734 2 4.25034C2 5.48534 2.93 6.47434 4.365 6.47434H4.393C5.886 6.47434 6.813 5.48534 6.813 4.25034C6.787 2.98734 5.887 2.02734 4.422 2.02734H4.421ZM2.254 21.0993H6.532V8.23034H2.254V21.0993Z" fill="#ffffff"></path>
							</svg>
					</a> */}

                        <a href="https://discord.gg/2gXvMj8mC7" target="_blank" className=" relative">
                            <svg height="24" viewBox="-2.69 .21 802.65 159.23867842" width="80" xmlns="http://www.w3.org/2000/svg"><path d="m799.96 37.4v80.85h-26.97v-14.71c-2.28 5.54-5.74 9.76-10.4 12.64-4.65 2.87-10.41 4.32-17.23 4.32-6.1 0-11.42-1.51-15.97-4.54-4.54-3.03-8.05-7.19-10.52-12.47-2.45-5.28-3.69-11.24-3.69-17.92-.08-6.88 1.23-13.06 3.91-18.53s6.47-9.73 11.34-12.8c4.88-3.06 10.45-4.6 16.69-4.6 12.85 0 21.47 5.69 25.87 17.07v-29.31zm-31 58.01c2.76-2.73 4.12-6.28 4.12-10.61 0-4.18-1.33-7.6-4.01-10.22-2.67-2.61-6.34-3.93-10.94-3.93-4.55 0-8.18 1.33-10.9 4-2.72 2.66-4.07 6.11-4.07 10.38s1.35 7.75 4.07 10.44c2.72 2.7 6.31 4.04 10.79 4.04 4.54-.01 8.19-1.38 10.94-4.1zm-58.61-41.62v24.26c-2.8-1.88-6.42-2.81-10.9-2.81-5.87 0-10.39 1.81-13.54 5.44-3.16 3.63-4.73 9.27-4.73 16.91v20.66h-26.97v-65.69h26.42v20.88c1.46-7.63 3.84-13.26 7.11-16.9 3.25-3.63 7.46-5.44 12.59-5.44 3.89 0 7.22.9 10.02 2.69zm-130.61 61.99c-6.35-3.14-11.19-7.44-14.53-12.91-3.33-5.47-5.01-11.57-5.01-18.31s1.66-12.75 5.01-18.03 8.16-9.42 14.49-12.42c6.3-3 13.83-4.49 22.56-4.49s16.26 1.49 22.57 4.49 11.12 7.11 14.42 12.36c3.31 5.24 4.96 11.26 4.96 18.08 0 6.73-1.65 12.83-4.96 18.3-3.3 5.47-8.13 9.77-14.48 12.92-6.36 3.14-13.86 4.71-22.52 4.71-8.67 0-16.17-1.55-22.51-4.7zm33.45-19.92c2.68-2.73 4.03-6.34 4.03-10.83s-1.34-8.07-4.03-10.72c-2.67-2.66-6.32-3.99-10.94-3.99-4.71 0-8.39 1.33-11.07 3.99s-4.01 6.23-4.01 10.72 1.33 8.1 4.01 10.83c2.67 2.72 6.36 4.1 11.07 4.1 4.62-.01 8.27-1.38 10.94-4.1zm-111.67 19.92c-6.31-3.14-11.07-7.41-14.25-12.8s-4.78-11.46-4.78-18.19c0-6.74 1.65-12.77 4.95-18.08 3.31-5.31 8.15-9.49 14.54-12.52 6.38-3.03 14.01-4.54 22.89-4.54 11.01 0 20.15 2.36 27.41 7.08v20.55c-2.56-1.8-5.55-3.26-8.96-4.38s-7.06-1.69-10.96-1.69c-6.83 0-12.16 1.27-16.01 3.82s-5.79 5.87-5.79 10c0 4.04 1.87 7.34 5.62 9.94 3.74 2.59 9.16 3.89 16.29 3.89 3.66 0 7.28-.55 10.85-1.62 3.55-1.1 6.62-2.43 9.18-4v19.88c-8.06 4.94-17.42 7.41-28.07 7.41-8.96-.03-16.6-1.6-22.91-4.75zm-77.94 2.36c-5.95-1.57-11.31-3.85-16.08-6.85v-18.64c3.61 2.84 8.43 5.18 14.49 7.02 6.05 1.83 11.9 2.75 17.56 2.75 2.65 0 4.64-.36 5.99-1.06 1.36-.71 2.04-1.56 2.04-2.54 0-1.12-.37-2.05-1.11-2.8-.74-.76-2.17-1.38-4.29-1.91l-13.21-3.03c-7.56-1.8-12.93-4.29-16.12-7.48-3.19-3.18-4.78-7.35-4.78-12.51 0-4.35 1.38-8.12 4.18-11.35 2.79-3.22 6.75-5.71 11.89-7.46 5.15-1.76 11.15-2.64 18.06-2.64 6.16 0 11.81.67 16.95 2.02s9.39 3.06 12.77 5.16v17.64c-3.46-2.11-7.43-3.76-11.95-5.01-4.52-1.24-9.15-1.84-13.94-1.84-6.9 0-10.34 1.2-10.34 3.59 0 1.12.53 1.96 1.6 2.52s3.03 1.14 5.88 1.75l11.01 2.02c7.19 1.26 12.55 3.49 16.07 6.67 3.53 3.18 5.29 7.88 5.29 14.1 0 6.82-2.91 12.23-8.75 16.24-5.83 4.01-14.11 6.01-24.83 6.01-6.31-.01-12.44-.8-18.38-2.37zm-55.01-50.1c8.24 3.62 18.46 3.78 26.89 0v50.56h-26.89zm13.46-8.49c7.42 0 13.44-5.52 13.44-12.32s-6.02-12.32-13.44-12.32c-7.43 0-13.45 5.52-13.45 12.32s6.02 12.32 13.45 12.32zm-113.34-19.91h42.93c10.35 0 19.09 1.65 26.26 4.94 7.16 3.29 12.52 7.88 16.08 13.75 3.55 5.87 5.34 12.6 5.34 20.17 0 7.41-1.86 14.13-5.57 20.15-3.71 6.03-9.35 10.79-16.95 14.31-7.59 3.51-17 5.28-28.24 5.28h-39.85zm39.41 58.62c6.96 0 12.33-1.78 16.07-5.32 3.74-3.57 5.61-8.41 5.61-14.55 0-5.7-1.67-10.24-5-13.64s-8.38-5.12-15.13-5.12h-13.43v38.63zm-109 30.62c-17.32 12.94-34.11 20.78-50.63 25.91-4.09-5.59-7.7-11.56-10.83-17.82a105.82 105.82 0 0 0 17.09-8.31c-1.41-1.06-2.81-2.17-4.18-3.3-32.51 15.36-68.25 15.36-101.15 0a96.475 96.475 0 0 1 -4.19 3.3c5.4 3.24 11.11 6.03 17.07 8.29-3.13 6.28-6.77 12.23-10.84 17.83-16.5-5.14-33.28-12.98-50.59-25.9-3.54-37.87 3.54-76.29 29.64-115.7 12.95-6.06 26.8-10.47 41.29-12.97 1.79 3.2 3.91 7.52 5.34 10.95 15.1-2.31 30.34-2.31 45.72 0 1.43-3.43 3.51-7.75 5.28-10.95 14.47 2.5 28.31 6.89 41.25 12.94 22.63 33.76 33.88 71.83 29.73 115.73zm-114.37-43.71c.18-11.23-7.92-20.44-17.97-20.44s-17.98 9.22-17.98 20.44c0 11.21 8.1 20.42 17.98 20.42 10.05 0 17.99-9.21 17.97-20.42zm66.43 0c.18-11.23-7.92-20.44-17.97-20.44s-17.98 9.22-17.98 20.44c0 11.21 8.1 20.42 17.98 20.42 10.05 0 17.97-9.21 17.97-20.42z" fill="#ffffff" /></svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer