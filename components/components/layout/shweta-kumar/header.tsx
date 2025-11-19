"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlHeader = () => {
            const currentScrollY = window.scrollY;

            // Show header when at top of page
            if (currentScrollY < 10) {
                setIsVisible(true);
            }
            // Hide header when scrolling down, show when scrolling up
            else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', controlHeader);

        return () => {
            window.removeEventListener('scroll', controlHeader);
        };
    }, [lastScrollY]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-200 transition-transform duration-300 ease-in-out hidden md:block ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}
        >
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/shweta-kumar" className="flex items-center">
                        <img
                            src="/shweta/logo.png"
                            alt="InvincibleYOU"
                            className="h-24 w-auto"
                        />
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            href="#process"
                            className="text-gray-700 hover:text-purple-900 hover:underline underline-offset-4 font-medium transition-all duration-300"
                        >
                            Work with me
                        </Link>
                        <Link
                            href="#testimonials"
                            className="text-gray-700 hover:text-purple-900 hover:underline underline-offset-4 font-medium transition-all duration-300"
                        >
                            Transformation stories
                        </Link>
                        <Link
                            href="https://invincibleyou.world"
                            className="text-gray-700 hover:text-purple-900 hover:underline underline-offset-4 font-medium transition-all duration-300"
                        >
                            About Invincible YOU
                        </Link>
                        <Link
                            href="https://invincibleyou.world/book-executionedge"
                            className="text-gray-700 hover:text-purple-900 hover:underline underline-offset-4 font-medium transition-all duration-300"
                        >
                            The Execution Edge
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
