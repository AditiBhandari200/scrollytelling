"use client";
import Link from "next/link";

export default function FooterSection() {
    return (
        <section className="bg-[url('/shweta/assets/hero_footer/Mobile/footer.png')] bg-cover bg-center bg-no-repeat min-h-[500px] flex flex-col items-center justify-between text-white py-10 md:bg-[url('/shweta/assets/hero_footer/Desktop/footer.png')] md:min-h-[350px]">
            <img
                src="/shweta/assets/media/white.png"
                alt="footer"
                className="w-1/2 md:size-56 mx-auto"
            />
            <div className="text-center md:hidden">
                <p>
                    <Link href="#process" className="hover:text-[#CCFF00]">
                        Work with me
                    </Link>{" "}
                    |{" "}
                    <Link href="#mission" className="hover:text-[#CCFF00]">
                        Reflect with me
                    </Link>{" "}
                    |<br />
                    <Link href="#testimonials" className="hover:text-[#CCFF00]">
                        Transformation stories
                    </Link>{" "}
                    |{" "}
                    <Link
                        href="https://invincibleyou.world"
                        className="hover:text-[#CCFF00]"
                    >
                        About IYOU
                    </Link>{" "}
                    |{" "}
                    <Link
                        href="https://invincibleyou.world/book-executionedge"
                        className="hover:text-[#CCFF00]"
                    >
                        My book
                    </Link>
                </p>
            </div>
            <div className="flex items-center justify-center md:justify-between w-full md:max-w-5xl">
                <div className="text-center">
                    <p className="text-sm">
                        Copyright &copy; {new Date().getFullYear()} InvincibleYOU. All
                        rights reserved.
                    </p>
                </div>
                <div className="hidden md:flex justify-center gap-2 text-sm">
                    <Link href="#process" className="hover:text-[#CCFF00]">
                        Work with me
                    </Link>{" "}
                    |
                    <Link href="#mission" className="hover:text-[#CCFF00]">
                        Reflect with me
                    </Link>{" "}
                    |
                    <Link href="#testimonials" className="hover:text-[#CCFF00]">
                        Transformation stories
                    </Link>{" "}
                    |
                    <Link
                        href="https://invincibleyou.world"
                        className="hover:text-[#CCFF00]"
                    >
                        About IYOU
                    </Link>{" "}
                    |
                    <Link
                        href="https://invincibleyou.world/book-executionedge"
                        className="hover:text-[#CCFF00]"
                    >
                        My book
                    </Link>
                </div>
            </div>
        </section>
    );
}
