import Link from "next/link";
import Image from  "next/image";
import { dark } from "@clerk/themes";
import { SignedIn,SignOutButton ,OrganizationSwitcher } from "@clerk/nextjs";
const Topbar = () => {
  const isuserSignedIn = true;
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4" > 
      <Image src="assets/logo.svg" alt="logo" width ={28} height={40}/>
      <p className="text-handling3-bold text-light-1 max-xs:hidden">
        Threads
      </p>
      </Link>
      <div className="flex items-center gapp-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
            <div className="flex cursor-pointer">
              <Image
               src="/assets/logout.svg"
                alt="Logout"
                width={24}
                height={24}
              />
            </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher
        appearance={{
        baseTheme:dark,
          elements:{
          organizationSwitcherTrigger:"py-2 px-4"
        }}}
        />

      </div>
    </nav>
  )
}

export default Topbar ;