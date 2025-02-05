"use client";

import Tasklist from "@/components/Tasklist";

export default function Task() {
    return (
        <div className="flex min-h-[80vh] flex-col items-center bg-sky h-auto bg-fixed p-3 md:p-10">
            <Tasklist />
        </div>
    )
}