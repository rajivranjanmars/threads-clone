import { currentUser } from "@clerk/nextjs";
import { fetchUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";
import PostThread from "@/components/forms/postThread";
async function Page(){
    const user = await currentUser();
     if(!user) return null;
     const userInfo =await fetchUser(user.id);
     if(!userInfo?.onboarded) redirect('/onboarding');
     const userStringId =userInfo._id.toString();
    return (<>
    <h1 className="head-text">Create thread</h1>
        <PostThread userId={userStringId}/>
    </>
    )
   

}

export default Page;