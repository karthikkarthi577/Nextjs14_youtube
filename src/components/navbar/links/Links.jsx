"use client";
import Link from "next/link";
import styles from "./links.module.css";
import { usePathname } from "next/navigation";

const Links = () => {
  let path = usePathname();
  const session = true;
  const isAmin = true;
  let links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  if (session) {
    if (isAmin) {
      links.push({ title: "Admin", path: "/admin" });
    }
  } else {
    links.push({ title: "Login", path: "/login" });
  }
  return (
    <div className={styles.container}>
      {links.map((res) => {
        return (
          <>
            <div className={styles.links}>
              <Link href={res.path} className={styles.a}>
                <div
                  className={`${styles.linkcontainer} 
                    ${path == res.path ? styles.active : styles.nonactive}`}
                >
                  {res.title}
                </div>
              </Link>
            </div>
          </>
        );
      })}
      {session === true ? (
        <div className={styles.linkcontainer}>Logout</div>
      ) : null}
    </div>
  );
};

export default Links;
