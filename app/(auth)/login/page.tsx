"use client"

import Link from "next/link"

export default function LoginPage() {
    return(
        <div data-theme="light" className="flex h-screen w-full flex-col items-center justify-center p-6 md:p-10">
            <div className="flex w-full max-w-md flex-col items-center">
                
                {/* sign in card */}
                <div className="card bg-base-300 rounded-box flex flex-col h-fit w-full gap-2 items-center p-6 md:p-10">
                    <h1 className="text-2xl font-bold">Sign In</h1>
                    <form className="flex flex-col w-full items-center gap-4">
                      <input type="text" placeholder="Username" className="input input-bordered w-full max-w-xs" />
                      <div className="flex flex-col w-full max-w-xs">
                          <input type="password" placeholder="Password" className="input input-bordered w-full" />
                          <a className="text-sm link link-primary self-end mt-1">Forgot Password?</a>
                      </div>
                      <Link className="w-full max-w-xs" href="/home">
                          <button type="submit" className="btn btn-active btn-primary w-full max-w-xs">Sign In</button>
                      </Link>
                    </form>
                </div>

                {/* divider */}
                <div className="divider">or login with</div>

                {/* other sign in */}
                <div className="card bg-base-300 rounded-box grid h-fit w-full place-items-center p-6 md:p-10">
                    <div className = "flex flex-row w-full max-w-xs items-center gap-4">
                        <button className="btn btn-outline btn-primary flex-1">
                        <svg viewBox="0 0 262 262" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
                            <path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/>
                            <path fill="#0F9D58" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/>
                            <path fill="#F4B400" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"/>
                            <path fill="#DB4437" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/>
                        </svg>
                            Google
                        </button>
                        <button className="btn btn-outline btn-primary flex-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6">
                              <path fill="#F25022" d="M1 1h10v10H1z"/>
                              <path fill="#7FBA00" d="M13 1h10v10H13z"/>
                              <path fill="#00A4EF" d="M1 13h10v10H1z"/>
                              <path fill="#FFB900" d="M13 13h10v10H13z"/>
                            </svg>
                            Microsoft
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
