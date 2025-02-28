import UpdateButton from "@/components/UpdateButton";
import { updateUser } from "@/lib/actions";
import { wixClientServer } from "@/lib/wixClientServer";
import { members } from "@wix/members";

export default async function Profile() {
  const wixClient = await wixClientServer();
  const user = await wixClient.members.getCurrentMember({
    fieldsets: [members.Set.FULL],
  });

  if (!user.member?.contactId) {
    return <div>Not logged in!</div>;
  }

  return (
    <div className="flex flex-col md:flex-row gap-24 md:h-[calc(100vh-180px)] items-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl">Profile</h1>
        <form action={updateUser} className="flex flex-col mt-12 gap-4">
          <input type="text" hidden name="id" value={user.member.contactId} />
          <label className="text-sm text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            placeholder={user.member.profile?.nickname || "John"}
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-70"
          />
          <label className="text-sm text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder={user.member.contact?.firstName || "John"}
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-70"
          />
          <label className="text-sm text-gray-700">Surname</label>
          <input
            type="text"
            name="lastName"
            placeholder={user.member.contact?.lastName || "Doe"}
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-70"
          />
          <label className="text-sm text-gray-700">E-mail</label>
          <input
            type="text"
            name="email"
            placeholder={user.member.loginEmail || "John@gmail.com"}
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-70"
          />
          <label className="text-sm text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder={
              (user.member.contact?.phones && user.member.contact.phones[0]) ||
              "+234"
            }
            className="ring-1 ring-gray-300 rounded-md p-2 max-w-70"
          />
          <UpdateButton />
        </form>
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        <h1 className="text-2xl">Orders</h1>
        <div className="mt-12 text-gray-500">No orders available!</div>
      </div>
    </div>
  );
}
