import { Avatar } from "@mantine/core";
import { IconClick } from '@tabler/icons-react';

const UpcomingCard = () => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center justify-around space-y-4 h-full max-w-lg md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-3">
            <h3 className="text-2xl font-semibold">Upcoming Task/Event</h3>
            <div className='flex flex-col items-center justify-center gap-1'>
                <p className="text-md">02:00 - 03:00 PM</p>
                <span className="text-sm font-semibold text-white bg-blue-500 px-3 py-1.5 rounded-lg">
                    15 Min left
                </span>
            </div>
            <div className="flex items-center justify-between w-1/2">
                <Avatar.Group className="flex">
                    <Avatar size='md' src='https://i.pravatar.cc/300' />
                    <Avatar size='md' src='https://i.pravatar.cc/300' />
                    <Avatar radius='xl'>5</Avatar>
                </Avatar.Group>
                <div className="bg-gray-500 rounded-full p-2">
                    <IconClick size={20} color="white" />
                </div>
            </div>
        </div>
    )
}

export default UpcomingCard