import Link from "next/link";

function Nav() {
    return (
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
                <a className="mr-5 hover:text-white">Home</a>
            </Link>
            <Link href="/about">
                <a className="mr-5 hover:text-white">About Us</a>
            </Link>
            <a className="mr-5 hover:text-white">First Link</a>
            <a className="mr-5 hover:text-white">Second Link</a>
            <a className="mr-5 hover:text-white">Third Link</a>
            <a className="mr-5 hover:text-white">Fourth Link</a>
        </nav>
    )
}
export default Nav