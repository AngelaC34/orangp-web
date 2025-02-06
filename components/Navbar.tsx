import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="dropdown gap-2">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><Link href="/home">Home</Link></li>
                    <li><Link href="/task">Task</Link></li>
                    <li><Link href="/leaderboard">Leaderboard</Link></li>
                    <li><Link href="/rating">Rating</Link></li>
                    <li><Link href="/reward">Reward</Link></li>
                </ul>
            </div>
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">OrangP</a>
        </div>
        <div className="flex-none">
            <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <Image
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    width="40"
                    height="40"
                    alt="Tailwind CSS Navbar component"
                />
                </div>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li>
                <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
            </div>
        </div>
        </div>
    );
};

export default Navbar;