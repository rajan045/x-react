import { motion } from 'framer-motion';
import logo from '../assets/img/logo.svg';
import { SearchIcon, NotificationIcon, ChatIcon } from './icons';
import { Input } from './base';
import { UserProfileMenu } from './common';

export const Header = () => {
    const headerVariants = {
        hidden: { 
            opacity: 0, 
            y: -30,
            filter: "blur(4px)"
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.4,
                staggerChildren: 0.06,
                delayChildren: 0.05
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: -15, 
            scale: 0.95 
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.25
            }
        }
    };

    return (
        <motion.div 
            className='h-20 w-full bg-white flex items-center justify-between px-8 border-b border-border-light flex-shrink-0'
            initial="hidden"
            animate="visible"
            variants={headerVariants}
        >
            <motion.div 
                className='flex items-center'
                variants={itemVariants}
            >
            <motion.img 
                src={logo} 
                alt="Logo" 
                className='w-44 h-11 cursor-pointer' 
                whileHover={{ 
                    opacity: 0.8, 
                    scale: 1.02 
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                    duration: 0.2, 
                    ease: "easeInOut" 
                }}
            />
            </motion.div>

            <motion.div 
                className='flex items-center gap-4'
                variants={itemVariants}
            >
                <motion.div variants={itemVariants}>
                    <Input
                        placeholder="Search for anything..."
                        leftSection={<SearchIcon className='h-5 w-5 text-[#4E4E4E] ml-2' />}
                        width="320px"
                        height="44px"
                        radius="xl"
                        border="1px solid #E0E5EF"
                        backgroundColor="#F3F4F7"
                        animatedPlaceholders={[
                            "Find projects, clients...",
                            "Search users, vendors...",
                            "Look for messages, tasks..."
                        ]}
                    />
                </motion.div>
                
                <motion.button 
                    className='border border-border-light bg-bg-light rounded-full flex items-center justify-center size-11 text-gray-500 cursor-pointer'
                    variants={itemVariants}
                    whileHover={{ 
                        backgroundColor: 'white',
                        borderColor: 'border-hover',
                        scale: 1.05,
                        boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ 
                        duration: 0.2, 
                        ease: "easeInOut" 
                    }}
                >
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.15 }}
                    >
                        <NotificationIcon className='size-5 text-text-secondary' />
                    </motion.div>
                </motion.button>

                <motion.button 
                    className='border border-border-light bg-bg-light rounded-full flex items-center justify-center size-11 text-gray-500 cursor-pointer'
                    variants={itemVariants}
                    whileHover={{ 
                        backgroundColor: 'white',
                        borderColor: 'border-hover',
                        scale: 1.05,
                        boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ 
                        duration: 0.2, 
                        ease: "easeInOut" 
                    }}
                >
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.15 }}
                    >
                        <ChatIcon className='size-5 text-text-secondary' />
                    </motion.div>
                </motion.button>

                <motion.div variants={itemVariants}>
                    <UserProfileMenu 
                        userName="Alex meian"
                        userRole="Product manager"
                        userInitials="AM"
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}