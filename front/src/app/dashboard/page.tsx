// import CreateChat from "@/components/chatGroup/CreateChat";
// import DashNav from "@/components/chatGroup/DashNav";
// import React from "react";
// import { authOptions, CustomSession } from "../api/auth/[...nextauth]/options";
// import { getServerSession } from "next-auth";
// import { fetchChatGroups } from "@/fetch/groupFetch";
// import GroupChatCard from "@/components/chatGroup/GroupChatCard";

// export default async function dashboard() {
//   const session: CustomSession | null = await getServerSession(authOptions);
//   const groups: Array<GroupChatType> | [] = await fetchChatGroups(
//     session?.user?.token!
//   );
//   return (
//     <div>
//       <DashNav
//         name={session?.user?.name!}
//         image={session?.user?.image ?? undefined}
//       />
//       <div className="container">
//         <div className="mt-6 text-end">
//           <CreateChat user={session?.user!} />
//         </div>

//         {/* If Groups */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {groups.length > 0 &&
//             groups.map((item, index) => (
//               <GroupChatCard group={item} key={index} user={session?.user!} />
//             ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import CreateChat from "@/components/chatGroup/CreateChat";
import DashNav from "@/components/chatGroup/DashNav";
import React from "react";
import { authOptions, CustomSession } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { fetchChatGroups } from "@/fetch/groupFetch";
import GroupChatCard from "@/components/chatGroup/GroupChatCard";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session: CustomSession | null = await getServerSession(authOptions);

  // If session or token missing, redirect to home page
  if (!session || !session.user?.token) {
    redirect("/");
  }

  // Fetch chat groups using absolute URL
  const groups: Array<GroupChatType> = await fetchChatGroups(session.user.token);

  return (
    <div>
      <DashNav
        name={session.user.name!}
        image={session.user.image ?? undefined}
      />
      <div className="container">
        <div className="mt-6 text-end">
          <CreateChat user={session.user} />
        </div>

        {/* If Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.length > 0 &&
            groups.map((item, index) => (
              <GroupChatCard group={item} key={index} user={session?.user!} />
            ))}
        </div>
      </div>
    </div>
  );
}