import React from 'react';
import Link from 'next/link';

const AnnouncementBanner = () => {
    return (
        <div className="bg-[var(--purple900)] text-white py-2 text-center w-full">
            <div className="container mx-auto px-4">
                <p className="text-sm sm:text-base">
                    🎉 Exciting News! Check out our new book launch!{' '}
                    <Link
                        href="/book-executionedge"
                        className="underline hover:text-purple-200 transition-colors duration-200"
                    >
                        Learn more →
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default AnnouncementBanner; 