import { CustomUser } from '@/app/api/auth/[...nextauth]/options';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React from 'react';
import GroupChatCardMenu from './GroupChatCardMenu';

export default function GroupChatCard({
	group,
	user,
}: {
	group: GroupChatType;
	user: CustomUser;
}) {
	return (
		<Card>
			<CardHeader className="flex justify-between items-center ">
				<CardTitle className="text-2xl">{group.title}</CardTitle>
				<GroupChatCardMenu user={user} group={group} />
			</CardHeader>
			<CardContent>
				<p className="text-xl text-gray-500">
					Passcode :{' '}
					<strong className="text-xl text-black">{group.passcode}</strong>
				</p>
				{/* <br /> */}
				<p className="text-xl text-gray-500">
					Created At : {new Date(group.created_at).toDateString()}
				</p>
			</CardContent>
		</Card>
	);
}
