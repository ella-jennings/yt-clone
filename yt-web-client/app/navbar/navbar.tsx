'use client';

import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import { useEffect, useState } from "react";
import { User } from "firebase/auth";
import { onAuthStatedChangeHelper } from "../firebase/firebase";
import SignIn from "./sign-in";
import Upload from "./upload";

function Navbar() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStatedChangeHelper((user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    return (
        <nav className={styles.nav}>
            <Link href="/" >
                <Image width={90} height={20} src="/youtube-logo.svg" alt="Youtube Logo" />
            </Link>
            {
                user && <Upload />
            }
            <SignIn user={ user }/>
        </nav> 
    );
}

export default Navbar;