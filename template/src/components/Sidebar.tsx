import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    SummaryIcon, 
    ProjectsIcon, 
    TasksIcon, 
    CalendarIcon, 
    LibrariesIcon, 
    MessagesIcon, 
    ClientsIcon, 
    VendorsIcon, 
    UsersIcon, 
    SettingsIcon 
} from './icons';

export const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        {
            id: 'summary',
            label: 'Summary',
            path: '/summary',
            icon: <SummaryIcon className="w-full h-full" />
        },
        {
            id: 'projects',
            label: 'Projects',
            path: '/projects',
            icon: <ProjectsIcon className="w-full h-full" />
        },
        {
            id: 'tasks',
            label: 'All Tasks',
            path: '/tasks',
            icon: <TasksIcon className="w-full h-full" />
        },
        {
            id: 'calendar',
            label: 'Calendar',
            path: '/calendar',
            icon: <CalendarIcon className="w-full h-full" />
        },
        {
            id: 'libraries',
            label: 'All Libraries',
            path: '/libraries',
            icon: <LibrariesIcon className="w-full h-full" />
        },
        {
            id: 'messages',
            label: 'Messages',
            path: '/messages',
            icon: <MessagesIcon className="w-full h-full" />
        },
        {
            id: 'clients',
            label: 'Clients',
            path: '/clients',
            icon: <ClientsIcon className="w-full h-full" />
        },
        {
            id: 'vendors',
            label: 'Vendors',
            path: '/vendors',
            icon: <VendorsIcon className="w-full h-full" />
        },
        {
            id: 'users',
            label: 'Users',
            path: '/users',
            icon: <UsersIcon className="w-full h-full" />
        },
        {
            id: 'settings',
            label: 'Settings',
            path: '/settings',
            icon: <SettingsIcon className="w-full h-full" />
        }
    ];

    const containerVariants = {
        hidden: { 
            opacity: 0, 
            x: -50,
            filter: "blur(6px)"
        },
        visible: {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.4,
                staggerChildren: 0.04,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            x: -20, 
            scale: 0.9,
            rotateY: -25 
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 0.25
            }
        }
    };

    return (
        <motion.div 
            className="fixed left-0 top-20 w-[68px] bg-white h-[calc(100vh-5rem)] flex flex-col items-center py-3 overflow-y-auto border-r border-[#E0E5EF] z-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div 
                className="flex flex-col gap-2"
                variants={containerVariants}
            >
                {menuItems.map((item) => {
                    const isActive = location.pathname === item.path || (location.pathname === '/' && item.id === 'summary');
                    return (
                        <motion.div 
                            key={item.id} 
                            className="flex flex-col items-center cursor-pointer"
                            onClick={() => navigate(item.path)}
                            variants={itemVariants}
                            whileHover={{ 
                                scale: 1.05,
                                y: -2
                            }}
                            whileTap={{ 
                                scale: 0.95,
                                y: 0
                            }}
                            transition={{
                                duration: 0.2,
                                ease: "easeInOut"
                            }}
                        >
                            <motion.div 
                                className={`w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer`}
                                animate={{
                                    backgroundColor: isActive ? '#1F1F1F' : '#F2F4F8'
                                }}
                                whileHover={{
                                    backgroundColor: '#1F1F1F',
                                    boxShadow: '0 4px 12px rgba(31, 31, 31, 0.15)',
                                    scale: 1.1
                                }}
                                whileTap={{
                                    scale: 0.9
                                }}
                                transition={{
                                    duration: 0.2,
                                    ease: "easeInOut"
                                }}
                            >
                                <motion.div 
                                    className={`w-4 h-4 flex items-center justify-center`}
                                    animate={{
                                        color: isActive ? '#ffffff' : '#575757'
                                    }}
                                    whileHover={{
                                        color: '#ffffff',
                                        scale: 1.1
                                    }}
                                    transition={{
                                        duration: 0.2
                                    }}
                                >
                                    <motion.div 
                                        className="w-full h-full flex items-center justify-center"
                                        whileHover={{ 
                                            rotate: [0, -5, 5, 0],
                                            transition: { duration: 0.4 }
                                        }}
                                    >
                                        {item.icon}
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                            <motion.span 
                                className="text-[9px] text-[#313131] mt-2 text-center font-semibold"
                                whileHover={{
                                    scale: 1.05,
                                    color: '#1F1F1F'
                                }}
                                transition={{
                                    duration: 0.15
                                }}
                            >
                                {item.label}
                            </motion.span>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    );
};