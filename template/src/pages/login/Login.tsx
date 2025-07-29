import banner from '../../assets/img/banner.webp';
import { Image } from '../../components';

export const Login = () => {
    return (
        <div className='flex bg-[#F3F4F7] w-screen h-screen p-6'>
            <div className='w-5/12 h-full relative'>
                <Image 
                    src={banner} 
                    alt="Estate Craft Banner" 
                    className='w-full h-full' 
                    objectFit="cover" 
                    rounded="lg"
                />
                <div className='absolute inset-0 bg-opacity-40 rounded-lg flex flex-col justify-center p-12'>
                    <h1 className='text-white text-5xl font-bold leading-tight mb-4'>
                        Get<br />
                        Everything<br />
                        You Want
                    </h1>
                    <p className='text-white text-lg opacity-90'>
                        You can get everything you want if you work hard,<br />
                        trust the process, and stick to the plan.
                    </p>
                </div>
            </div>

            <div className='w-7/12 h-full flex items-center justify-center px-16'>
                <div className='w-full max-w-md'>
                    <div className='mb-8'>
                        <h2 className='text-3xl font-semibold text-[#121212] mb-2'>Welcome Back</h2>
                        <p className='text-gray-600'>Enter your email and password to access your account</p>
                    </div>

                    <form className='space-y-6'>
                        <div>
                            <label htmlFor="email" className='block text-sm font-medium text-gray-700 mb-2'>
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all'
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className='block text-sm font-medium text-gray-700 mb-2'>
                                Password
                            </label>
                            <div className='relative'>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Enter your password"
                                    className='w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all'
                                />
                                <button
                                    type="button"
                                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600'
                                >
                                    <svg className='w-5 h-5' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className='flex items-center justify-between'>
                            <label className='flex items-center'>
                                <input type="checkbox" className='w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500' />
                                <span className='ml-2 text-sm text-gray-600'>Remember me</span>
                            </label>
                            <a href="#" className='text-sm text-gray-600 hover:text-gray-800'>
                                Forgot Password
                            </a>
                        </div>

                        <button
                            type="submit"
                            className='w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors font-medium'
                        >
                            Sign In
                        </button>

                        <div className='text-center'>
                            <a href="#" className='text-gray-600 hover:text-gray-800 text-sm'>
                                Login with Mobile Number
                            </a>
                        </div>

                        <p className='text-center text-sm text-gray-500'>
                            If you face any challenges logging in, kindly contact{' '}
                            <a href="#" className='text-gray-600 hover:text-gray-800'>
                                Bytive Support
                            </a>
                            .
                        </p>

                        <p className='text-center text-sm text-gray-600'>
                            Don't have an account?{' '}
                            <a href="#" className='text-gray-600 hover:text-gray-800 font-medium'>
                                Sign Up
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}