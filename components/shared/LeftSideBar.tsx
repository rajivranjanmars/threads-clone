"use client"
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignOutButton, OrganizationSwitcher,useAuth } from "@clerk/nextjs";

import { usePathname, useRouter } from 'next/navigation'

const LeftSideBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const {userId}=useAuth()
  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          const isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;

          if(link.route==='/profile') link.route=`${link.route}/${userId}`

          return (
            <Link href={link.route} key={link.label} className={ `flex lefsidebar_link py-2 rounded-3xl px-4 ${isActive && 'bg-primary-500'}`} >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="px-4 text-light-1 max-md:hidden">
                {link.label}
              </p>
            </Link>
          )
        })}
      </div>
      <div className="mt-10 px-6">
        <SignedIn>
          <SignOutButton signOutCallback={()=>router.push('/sign-in')}>
            <div className="flex cursor-pointer gap-4 p-4">
              <Image
                src="/assets/logout.svg"
                alt="Logout"
                width={24}
                height={24}
              /> <p className="px-4 text-light-1" >Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  )
}

export default LeftSideBar